class LineChart {
  constructor(data, svg, width, height, margin, scale, tooltipDiv) {
    const vis = this;

    vis.data = data;
    vis.svg = svg;
    vis.width = width;
    vis.height = height;
    vis.margin = margin;
    vis.scale = scale;
    vis.tooltip = new Tooltip(tooltipDiv);

    vis.colors = ["#00e3e6", "#6797fd", "#6bd384", "#954e9f",
                  "#a84857", "#cce982", "#eba562"]

    vis.transition = 500;

    vis.xScale = d3.scaleTime()
        .range([vis.margin.left, vis.width - vis.margin.right]);
    vis.yScale = d3.scaleLinear()
        .range([vis.height - vis.margin.bottom, 0]);
    vis.line = d3.line()
        .curve(d3.curveMonotoneX);

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

    let ymin = d3.min(vis.data.lines, l => d3.min(l.values, d => d.y));
    let ymax = d3.max(vis.data.lines, l => d3.max(l.values, d => d.y));
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
          return d;
        } else {
          return '';
        }
      })
      .tickValues(yNewValues);

    vis.line.x((d, i) => vis.xScale(d.x))
      .y((d, i) => vis.yScale(d.y));

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

    // vis.gYAxis.select(".y.axis-title")
    //   .attr("text-anchor", "end")
    //   .style("font-size", "12px")
    //   .attr("fill", "white")
    //   .attr("transform", "translate(18, 5) rotate(-90)")
    //   .text("Adoption Curves");
  };

  updateCurves() {

    const vis = this;

    vis.path = vis.g.selectAll("path").data(vis.data.lines);

    vis.path.enter().append("path")
      .transition()
      .duration(vis.transition)
      .attr("fill", "none")
      .attr("stroke-width", curveWidth)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      // .style("mix-blend-mode", "multiply")
      .attr("opacity", curveOpacity)
      // .attr("class", d => "curve "+nameNoSpaces(d.Sector))
      .attr("stroke",  curveColor)
      .attr("d", d => vis.line(d.values));

    vis.path.transition()
      .duration(vis.transition)
      .attr("fill", "none")
      .attr("stroke-width", curveWidth)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      // .style("mix-blend-mode", "multiply")
      .attr("opacity", curveOpacity)
      // .attr("class", d => "curve "+nameNoSpaces(d.Sector))
      .attr("stroke", curveColor)
      .attr("d", d => vis.line(d.values));

    vis.path.exit().remove();
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
            obj.y = d.values.filter(v => v.x.getFullYear() === xYear)[0].y;
            obj.color = curveColor(d, i);
            return obj;
          });

          let legendHtml = dataValues.sort((a,b) => b.y - a.y)
            .map((d,i) => {
              let spanCircle = `<span class="legend-circle">${getCircleHtml(d.color)}</span>`,
                  spanName = `<span class="legend-name">${d.name}</span>`,
                  spanNumber = `<span class="legend-value">${d.y.toFixed(0)}</span>`;

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
            .attr("cy", d => vis.yScale(d.y))
            .attr("r", circleRadius)
            .attr("fill", d => d.color)

          dots.attr("class", "circle-plot")
            .attr("cx", 0)
            .attr("cy", d => vis.yScale(d.y))
            .attr("r", circleRadius)
            .attr("fill", d => d.color)

          dots.exit().remove();

          let offset = vis.svg.node().getBoundingClientRect();
          console.log(vis.svg.node(), offset)

          vis.tooltip.update(`<div class="legend"><div class="legend-header">${xYear}</div><div class="legend-body">${legendHtml}</div></div>`,
                             offset.left + vis.margin.left + vis.xScale(xPoint) + 10,
                             document.documentElement.scrollTop + vis.margin.top + offset.top);
        } else {
          d3.selectAll(".rule")
            .style("opacity", 0);
          tooltip.hide();
        }
      }
    }



  } // updateCurves


}


// const dateParse = d3.timeParse("%Y");
// const colors = ['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00', '#a65628','#f781bf','#999999']
// var lineOpacity = 0.5;
// var yScale;
// var transition = 500;
// var dateFormat = d3.timeFormat("%d de %B");
// var yAxis;
//
// var label = svg.append("g")
//     .attr("display", "none")
//
// label.append("text")
//     .attr("font-family", "sans-serif")
//     .attr("font-size", 12)
//     .attr("class", "curve-label")
//     .attr("text-anchor", "middle")
//     .attr("text-anchor", "start")
//
//
// function addOptions(id, values, attrs) {
//   var element = d3.select("#"+id);
//   var options = element.selectAll("option").data(values);
//
//   options.enter().append("option")
//     .attr("value", (d,i) => attrs[i])
//     .html(d => d);
//
//   options.attr("value", (d,i) => attrs[i])
//     .html(d => d);
//
//   options.exit().remove();
//
//   return element;
// }
//
// Promise.all([
//     d3.csv('data/adoptioncurves.csv'),
// ]).then(function(data) {
//   let adoptionCurves = data[0];
//   console.log(adoptionCurves);
//
//   let regions = getUniquesMenu(adoptionCurves, 'Region'),
//       vectors = getUniquesMenu(adoptionCurves, 'Sector'),
//       scenarios = getUniquesMenu(adoptionCurves, 'Scenario'),
//       years = adoptionCurves.columns.filter(d => !isNaN(+d));
//
//   adoptionCurves.forEach(d => {
//     d.values = years.map(y => {
//       let obj = {};
//       obj.date = dateParse(y);
//       obj.number = +d[y];
//       return obj;
//     })
//   })
//   console.log(regions, vectors, scenarios, years)
//
//   state.yearsStr = years;
//   state.years = years.map(d => dateParse(d));
//   xScale.domain(d3.extent(state.years, d => +d));
//   xAxis.scale(xScale);
//
//
//
//   function updatePlot() {
//     updateAxes();
//     // updateSearchBox();
//     updateCurves();
//     // updateLabels();
//   }
//
//   filterData();
//   updatePlot();
//
// })