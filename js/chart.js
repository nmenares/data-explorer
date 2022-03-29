class LineChart {
  constructor(data, svg, width, height, margin, scale='linear') {
    const vis = this;

    vis.data = data;
    vis.svg = svg;
    vis.width = width;
    vis.height = height;
    vis.margin = margin;
    vis.scale = scale;

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
        // .tickFormat(d => d * 100 + '%')

    vis.initPlot();
    vis.updatePlot();
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
    vis.yAxis.scale(vis.yScale);

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
    })

    vis.gYAxis.selectAll(".tick").attr("class", d => {
      if (Math.round(d * 100) % 10 === 0) {
        return 'tick big-tick';
      } else {
        return 'tick small-tick';
      }
    })

    vis.gXAxis.selectAll(".small-tick").select("line")
      .attr("y2", 4)
    vis.gYAxis.selectAll(".small-tick").select("line")
      .attr("x2", -4);

    vis.gYAxis.select(".y.axis-title")
      .attr("text-anchor", "end")
      .style("font-size", "12px")
      .attr("fill", "white")
      .attr("transform", "translate(18, 5) rotate(-90)")
      .text("Adoption Curves");
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

    function curveOpacity(d) {
      return 1.0;
    }

    function curveColor(d, i) {
      return vis.colors[i]
      // return "white";
    }

    function curveWidth(d) {
      return 1.5;
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
