class Chart {
  constructor(data, svg, width, height, margin, scale, tooltipDiv, yAxisTitle, type='line') {
    const vis = this;

    vis.data = data;
    vis.svg = svg;
    vis.width = width;
    vis.height = height;
    vis.margin = margin;
    vis.scale = scale;
    vis.tooltip = new Tooltip(tooltipDiv);
    vis.yAxisTitle = yAxisTitle;
    vis.type = type;

    vis.colors = ["#00e3e6", "#6797fd", "#6bd384", "#954e9f",
                  "#a84857", "#cce982", "#eba562"]

    vis.transition = 500;

    vis.xScale = d3.scaleTime()
        .range([vis.margin.left, vis.width - vis.margin.right]);
    vis.yScale = d3.scaleLinear()
        .range([vis.height - vis.margin.bottom, 0]);
    if (vis.type === 'line') {
      vis.line = d3.line()
          .curve(d3.curveMonotoneX);
    } else if (vis.type === 'stacked-area') {
      vis.area = d3.area();
    }

    vis.xAxis = d3.axisBottom()
        .tickFormat(d => {
          if (d.getFullYear() % 10 === 0) {
            return d3.timeFormat("%Y")(d);
          } else {
            return '';
          }
        })
        .ticks(d3.timeYear.every(1))
        .tickSize(6);
    vis.yAxis = d3.axisLeft()
        .scale(vis.yScale)
        // .tickSize(6);
        // .tickFormat(d => d * 100 + '%')

    vis.initPlot();
  }

  updateData(newData) {
    const vis = this;

    vis.data = newData;
  }

  initPlot() {

    const vis = this;

    vis.g = vis.svg.append("g")
        .attr("transform", "translate(" + vis.margin.left + "," + vis.margin.top + ")");

    vis.gXAxis = vis.svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(" + vis.margin.left + "," + (vis.margin.top + vis.height - vis.margin.bottom) + ")");
    vis.gYAxis = vis.svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + (2 * vis.margin.left) + "," + vis.margin.top + ")");

    vis.yLabel = vis.gYAxis.append("g")
        .append("text")
        .attr("class", "y axis-title");

    vis.rule = vis.g.append("g")
      .attr("class", "rule")
      .style("opacity", 0);

    vis.rule.append("line")
      .attr("y1", 0)
      .attr("y2", vis.height - vis.margin.bottom)
      .attr("stroke", "lightgray");
  }

  updatePlot() {
    const vis = this;

    vis.updateAxes();
    vis.updateCurves();
  }

  updateAxes() {

    const vis = this;

    // x-axis
    let xmin = d3.min(vis.data.lines, l => d3.min(l.values, d => d.x));
    let xmax = d3.max(vis.data.lines, l => d3.max(l.values, d => d.x));
    vis.xScale.domain([xmin, xmax]);
    vis.xAxis.scale(vis.xScale);

    let ymin, ymax;
    if (vis.type === 'line') {
      ymin = d3.min(vis.data.lines, l => d3.min(l.values, d => d.y));
      ymax = d3.max(vis.data.lines, l => d3.max(l.values, d => d.y));
    } else if (vis.type === 'stacked-area') {
      ymin = d3.min(vis.data.lines, l => d3.min(l.values, d => d.y0));
      ymax = d3.max(vis.data.lines, l => d3.max(l.values, d => d.y1));
    }

    vis.yScale.domain([ymin, ymax]);
    vis.yAxis.scale(vis.yScale)

    let nTicks = 5;
    let yValues = vis.yAxis.scale().ticks();
    let deltaY = (yValues[1] - yValues[0]) / nTicks;
    let yNewValues = ymin < 0 ?
                  [...d3.range(yValues[0] + deltaY, ymin, -deltaY).reverse(), ...d3.range(yValues[0], ymax, deltaY)] :
                  [...d3.range(yValues[0] - deltaY, ymin, -deltaY).reverse(), ...d3.range(yValues[0], ymax, deltaY)];

    vis.yScale.domain([ymin, ymax]);
    vis.yAxis.scale(vis.yScale)
      .tickFormat(d => {
        if (yValues.includes(d)) {
          return d3.format(".2s")(d);
        } else {
          return '';
        }
      })
      .tickValues(yNewValues);

    if (vis.type === 'line') {
      vis.line.x((d, i) => vis.xScale(d.x))
        .y((d, i) => vis.yScale(d.y));
    } else if (vis.type === 'stacked-area') {
      vis.area.x(d => vis.xScale(d.x))
        .y0(d => vis.yScale(d.y0))
        .y1(d => vis.yScale(d.y1));
    }

    // if (vis.scale === "log"){
    //   let yMax = d3.max(vis.data.lines, l => d3.max(l.values, d => d.y)) + 1;
    //   vis.yScale = d3.scaleLog()
    //       .range([vis.height - vis.margin.bottom, 0])
    //       .domain([1, yMax])
    //   let tickValues = d3.range(yMax.toString().length)
    //     .map(d => [1 * 10**d, 2 * 10**d, 5 * 10**d])
    //     .flat()
    //     .filter(d => d <= yMax);
    //   vis.yAxis = d3.axisLeft()
    //       .scale(vis.yScale)
    //       .tickValues(tickValues)
    //       .tickFormat(d3.format('i'))
    //   vis.line.x((d, i) => vis.xScale(d.x))
    //     .y(d => vis.yScale(d.y + 1));
    // } else if (this.scale === "linear") {
    //   let yMax = 1.0;
    //   vis.yScale = d3.scaleLinear()
    //       .range([vis.height - vis.margin.bottom, 0])
    //       .domain([0, yMax]).nice()
    //   vis.yAxis = d3.axisLeft()
    //       .scale(vis.yScale)
    //       .tickFormat(d => {
    //         if (Math.round(d * 100) % 10 === 0) {
    //           return Math.round(d * 100) + '%';
    //         } else {
    //           return '';
    //         }
    //       })
    //       .tickValues(d3.range(0, 1.01, 0.01))
    //       .tickSize(6)
    //   vis.line.x((d, i) => vis.xScale(d.x))
    //     .y((d, i) => vis.yScale(d.y));
    // }

    vis.gXAxis.call(vis.xAxis);
    vis.gYAxis.call(vis.yAxis);

    vis.gXAxis.selectAll(".domain").remove();
    vis.gYAxis.selectAll(".domain").remove();

    vis.gXAxis.selectAll(".tick").attr("class", d => {
      if (d.getFullYear() % 10 === 0) {
        return 'tick big-tick';
      } else {
        return 'tick small-tick';
      }
    });

    vis.gYAxis.selectAll(".tick").attr("class", d => {
      if (yValues.includes(d)) {
        return 'tick big-tick';
      } else {
        return 'tick small-tick';
      }
    });

    vis.gXAxis.selectAll(".small-tick").select("line")
      .attr("y2", 4)
    vis.gYAxis.selectAll(".small-tick").select("line")
      .attr("x2", -4);

    vis.yLabel
      .attr("text-anchor", "start")
      .style("font-size", "12px")
      .attr("fill", "white")
      .attr("transform", "translate(-20, -5)")
      .text(vis.yAxisTitle);
  };

  updateCurves() {

    const vis = this;

    vis.path = vis.g.selectAll("path").data(vis.data.lines);

    vis.path.enter().append("path")
      .transition()
      .duration(vis.transition)
      .attr("fill", vis.type === 'stacked-area' ? curveColor : "none")
      .attr("stroke-width", curveWidth)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      // .style("mix-blend-mode", "multiply")
      .attr("opacity", curveOpacity)
      // .attr("class", d => "curve "+nameNoSpaces(d.Sector))
      .attr("stroke", vis.type === 'line' ? curveColor : "none")
      .attr("d", d => vis.type === 'line' ? vis.line(d.values) : vis.type === 'stacked-area' ? vis.area(d.values) : null);

    vis.path.transition()
      .duration(vis.transition)
      .attr("fill", vis.type === 'stacked-area' ? curveColor : "none")
      .attr("stroke-width", curveWidth)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      // .style("mix-blend-mode", "multiply")
      .attr("opacity", curveOpacity)
      // .attr("class", d => "curve "+nameNoSpaces(d.Sector))
      .attr("stroke", vis.type === 'line' ? curveColor : "none")
      .attr("d", d => vis.type === 'line' ? vis.line(d.values) : vis.type === 'stacked-area' ? vis.area(d.values) : null);

    vis.path.exit().remove();
    vis.rule.raise();
    vis.svg.call(hover, vis.path);

    function curveOpacity(d) {
      return 1.0;
    }

    function curveColor(d, i) {
      return vis.colors[i % vis.colors.length]
    }

    function curveWidth(d) {
      return 1.5;
    }

    function circleRadius(d) {
      return 3.0;
    }

    function getCircleHtml(color) {
      let circleRadius = 4;
      return `<svg width="${2 * circleRadius}px" height="${2 * circleRadius}px"><circle cx="${circleRadius}px" cy="${circleRadius}px" r="${circleRadius}px" fill="${color}"></circle></svg>`
    }

    function hover(svg, path) {
      if ("ontouchstart" in document) svg
          .style("-webkit-tap-highlight-color", "transparent")
          .on("touchmove", moved)
          // .on("touchstart", entered)
          // .on("touchend", left)
          // .on("touch", click);
      else svg
          .on("mousemove", moved)
          // .on("mouseenter", entered)
          // .on("mouseleave", left)
          // .on("click", click);

      function moved(event) {
        let thisX = d3.pointer(event, this)[0] - vis.margin.left;
        if ((vis.margin.left < thisX) && (thisX < vis.width - vis.margin.right)) {
          const xm = vis.xScale.invert(thisX),
            xYear = xm.getFullYear(),
            xPoint = new Date(xYear, 1, 1);
          let dataValues = vis.data.lines.map((d, i) => {
            let obj = {};
            obj.name = d.name;
            let filteredValue = d.values.filter(v => v.x.getFullYear() === xYear)[0];
            if (vis.type === 'line') {
              obj.y = filteredValue.y;
            } else if (vis.type === 'stacked-area') {
              obj.y = filteredValue.y1 - filteredValue.y0;
              obj.y1 = filteredValue.y1;
            }
            obj.color = curveColor(d, i);
            return obj;
          });

          let legendHtml = dataValues.sort((a,b) => b.y - a.y)
            .map((d,i) => {
              let spanCircle = `<span class="legend-circle">${getCircleHtml(d.color)}</span>`,
                  spanName = `<span class="legend-name">${d.name}</span>`,
                  spanNumber = `<span class="legend-value">${d3.format(".2s")(d.y)}</span>`;

              return `<div class="legend-item">${spanCircle}${spanName}${spanNumber}</div>`;
            })
            .reduce((a,b) => a + b, "");

          d3.selectAll(".rule")
            .attr("transform", `translate(${vis.xScale(xPoint)},0)`)
            .style("opacity", 1);

          let dots = vis.rule.selectAll(".circle-plot")
            .data(dataValues);

          dots.enter().append("circle")
            .attr("class", "circle-plot")
            .attr("cx", 0)
            .attr("cy", d => vis.type === 'line' ? vis.yScale(d.y) : vis.yScale(d.y1))
            .attr("r", circleRadius)
            .attr("fill", d => d.color)

          dots.attr("class", "circle-plot")
            .attr("cx", 0)
            .attr("cy", d => vis.type === 'line' ? vis.yScale(d.y) : vis.yScale(d.y1))
            .attr("r", circleRadius)
            .attr("fill", d => d.color)

          dots.exit().remove();

          let offset = vis.svg.node().getBoundingClientRect();
          vis.tooltip.update(`<div class="legend"><div class="legend-header">${xYear}</div><div class="legend-body">${legendHtml}</div></div>`,
                             offset.left + vis.margin.left + vis.xScale(xPoint),
                             document.documentElement.scrollTop + vis.margin.top + offset.top);
        } else {
          d3.selectAll(".rule")
            .style("opacity", 0);
          vis.tooltip.hide();
        }
      }
    }
  } // updateCurves
}
