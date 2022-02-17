const tabs = ["Energy Demand", "Energy Supply", "Emissions", "GHG", "Analysis"];

const indicators = {
  "Energy Demand": ["Energy Demand", "Energy Demand Reductions"],
  "Energy Supply": ["Energy Supply", "Installed Capacity", "Energy Cost", "Required Investment"],
  "Emissions": ["GHG Emissions", "Emissions Mitigatin Wedges"],
  "GHG": ["GHG Concentration", "GHG Radiative Forcing", "Temperature Change"],
  "Analysis": ["Solution Adoption Rates", "Emissions Estimate Check", "NDC Estimates", "Co-benefits and Externalities"]
}

const dropdowns = {
  "Energy Demand": ["Scenario", "Region", "Sector", "Energy Carrier", "Energy End-use"],
  "Energy Demand Reductions": ["Scenario", "Region", "Sector", "Energy Carrier", "Energy End-use"],
  "Energy Supply": ["Scenario", "Region", "Sector", "Energy Carrier", "Energy Technology"],
  "Installed Capacity": ["Scenario", "Region", "Sector", "Energy Carrier", "Energy Technology"],
  "Energy Cost": ["Scenario", "Region", "Sector", "Energy Carrier", "Energy Technology", "Cost Type"],
  "Required Investment": ["Scenario", "Region", "Sector", "Energy Carrier", "Energy Technology"],
  "GHG Emissions": ["Scenario", "Region", "Sector", "GHG", "Energy Carrier", "Energy Technology"],
  "Emissions Mitigatin Wedges": ["Scenario", "Region", "Sector", "GHG", "Energy Carrier", "Energy Technology"],
  "GHG Concentration": ["Scenario", "GHG"],
  "GHG Radiative Forcing": ["Scenario", "GHG"],
  "Temperature Change": ["Scenario"],
  "Solution Adoption Rates": ["Scenario", "Region", "Sector", "Energy Carrier", "Energy Technology"],
  "Emissions Estimate Check": ["Region", "Sector", "Energy Technology"],
  "NDC Estimates": ["Region", "Sector", "Target Year"],
  "Co-benefits and Externalities": ["Scenario", "Region"]
}

function updateDropdowns(indicator) {
  let setFilter = g => {
    g.attr("class", "col-2 dropdown")
      .html(d => d)
  }

  let filters = d3.select("#filters").selectAll("div")
    .data(dropdowns[indicator])

  filters.enter().append("div")
    .call(setFilter)

  filters
    .call(setFilter)

  filters.exit().remove();
}

function updateButtons() {

  let setTab = g => {
    g.attr("type", "button")
      .attr("class", "btn btn-primary filter")
      .html(d => d)
      .on("click", (event, d) => {
        updateDropdowns(d);
      });
  }

  let chosenTab = d3.select(".tab.chosen").data()[0];

  let indicatorDivs = d3.select("#indicators").selectAll("button")
    .data(indicators[chosenTab])

  indicatorDivs.enter().append("button")
    .call(setTab)

  indicatorDivs
    .call(setTab)

  indicatorDivs.exit().remove();
}

const tabSpans = d3.select("#tabs").selectAll("span")
  .data(tabs)
  .join("span")
    .attr("class", "tab")
    .classed("chosen", (d,i) => i === 0)
    .html(d => d)
    .on("click", (event, d) => {
      d3.selectAll(".tab")
        .classed("chosen", e => e === d);
      updateButtons();
    })
updateButtons();
updateDropdowns(indicators[tabs[0]][0])

state = {
  region: null,
  scenario: null,
  scale: 'linear',
  years: null,
  yearsStr: null,
  filteredData: null,
}

const plotWidth = d3.select("#right-col").node().getBoundingClientRect().width,
    plotHeight = window.innerHeight * 0.8;

let plot = d3.select("#plot")
    .attr("width", plotWidth)
    .attr("height", plotHeight);

const margin = {top: 20, right: 80, bottom: 20, left: 50},
    width = plotWidth - margin.left - margin.right,
    height = plotHeight - margin.top - margin.bottom;

const dateParse = d3.timeParse("%Y");

const colors = ['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00', '#a65628','#f781bf','#999999']

var lineOpacity = 0.5,
    threshold = 50;

var xScale = d3.scaleTime()
    .range([margin.left, width - margin.right])
var yScale;
var line = d3.line()
    .curve(d3.curveMonotoneX);

var transition = 500;

var svg = plot.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var gXAxis = svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(" + margin.left + "," + (margin.top + height - margin.bottom) + ")");
var gYAxis = svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + (2 * margin.left) + "," + margin.top + ")")

var yLabel = gYAxis.append("g")
    .append("text")
    .attr("class", "y axis-title")

var dateFormat = d3.timeFormat("%d de %B");

var xAxis = d3.axisBottom()
            .tickFormat(d3.timeFormat("%Y"))
            .ticks(d3.timeYear.every(5))
            .tickSizeOuter(0);
var yAxis;

var label = svg.append("g")
    .attr("display", "none")

label.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("class", "curve-label")
    .attr("text-anchor", "middle")
    .attr("text-anchor", "start")

function getUniquesMenu(df, thisVariable) {

  var thisList = df.map(function(o) {
    return o[thisVariable]
  })

  // uniq() found here https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
  function uniq(a) {
      return a.sort().filter(function(item, pos, ary) {
          return !pos || item != ary[pos - 1];
      });
  }

  var uniqueList = uniq(thisList);

  return uniqueList;
}

function addOptions(id, values, attrs) {
  var element = d3.select("#"+id);
  var options = element.selectAll("option").data(values);

  options.enter().append("option")
    .attr("value", (d,i) => attrs[i])
    .html(d => d);

  options.attr("value", (d,i) => attrs[i])
    .html(d => d);

  options.exit().remove();

  return element;
}

var nameNoSpaces = function(name) {
  return name.toLowerCase().split(" ").join("");
}

var capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

Promise.all([
    d3.csv('data/adoptioncurves.csv'),
]).then(function(data) {
  let adoptionCurves = data[0];
  console.log(adoptionCurves);

  let regions = getUniquesMenu(adoptionCurves, 'Region'),
      vectors = getUniquesMenu(adoptionCurves, 'Sector'),
      scenarios = getUniquesMenu(adoptionCurves, 'Scenario'),
      years = adoptionCurves.columns.filter(d => !isNaN(+d));

  adoptionCurves.forEach(d => {
    d.values = years.map(y => {
      let obj = {};
      obj.date = dateParse(y);
      obj.number = +d[y];
      return obj;
    })
  })
  console.log(regions, vectors, scenarios, years)

  state.yearsStr = years;
  state.years = years.map(d => dateParse(d));
  xScale.domain(d3.extent(state.years, d => +d));
  xAxis.scale(xScale);

  function filterData(){
    state.filteredData = adoptionCurves.filter(d => {
      return ((d.Region === state.region) && (d.Scenario === state.scenario))
    })
  }

  let regionsOp = addOptions("regions", regions, regions);
  state.region = regionsOp.node().value;
  regionsOp.on("change", function(d){
    state.region = d3.select(this).node().value;
    filterData();
    updatePlot();
  });

  let scenariosOp = addOptions("scenarios", scenarios, scenarios);
  state.scenario = scenariosOp.node().value;
  scenariosOp.on("change", function(d){
    state.scenario = d3.select(this).node().value;
    filterData();
    updatePlot();
  });

  function updateAxes() {

    if (state.scale === "log"){
      let yMax = d3.max(state.filteredData, d => d3.max(state.years.map(y => d[y]))) + 1;
      yScale = d3.scaleLog()
          .range([height - margin.bottom, 0])
          .domain([1, yMax])
      let tickValues = d3.range(yMax.toString().length)
        .map(d => [1 * 10**d, 2 * 10**d, 5 * 10**d])
      tickValues = tickValues.flat().filter(d => d <= yMax);
      yAxis = d3.axisLeft()
          .scale(yScale)
          .tickValues(tickValues)
          .tickFormat(d3.format('i'))
      line.x((d, i) => xScale(state.years[i]))
        .y(d => yScale(d[state.years[i]] + 1));
    } else if (state.scale === "linear") {
      // let yMax = d3.max(state.filteredData, d => d3.max(d.values, v => v.number));
      let yMax = 1.0;
      yScale = d3.scaleLinear()
          .range([height - margin.bottom, 0])
          .domain([0, yMax]).nice()
      yAxis = d3.axisLeft()
          .scale(yScale)
      line.x((d, i) => xScale(d.date))
        .y((d, i) => yScale(d.number));
    }

    gXAxis.call(xAxis);
    gYAxis.call(yAxis);

    gYAxis.select(".y.axis-title")
      .attr("text-anchor", "end")
      // .style("font-size", (mobileScreen ? 8 : 12) + "px")
      .style("font-size", "12px")
      .attr("fill", "black")
      .attr("transform", "translate(18, 5) rotate(-90)")
      .text("Adoption Curves");
  };

  function updateCurves() {

    var path = g.selectAll("path").data(state.filteredData);

    path.enter().append("path")
      .transition()
      .duration(transition)
      .attr("fill", "none")
      .attr("stroke-width", curveWidth)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .style("mix-blend-mode", "multiply")
      .attr("opacity", curveOpacity)
      .attr("class", d => "curve "+nameNoSpaces(d.Sector))
      .attr("stroke",  curveColor)
      .attr("d", d => line(d.values));

    path.transition()
      .duration(transition)
      .attr("fill", "none")
      .attr("stroke-width", curveWidth)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .style("mix-blend-mode", "multiply")
      .attr("opacity", curveOpacity)
      .attr("class", d => "curve "+nameNoSpaces(d.Sector))
      .attr("stroke", curveColor)
      .attr("d", d => line(d.values));

    path.exit().remove();

    svg.call(hover, g.selectAll("curve"));

    function curveOpacity(d) {
      return 1.0;
      // let idx = state.selected.indexOf(d[state.microzona]);
      // return idx < 0 ? lineOpacity : 1.0;
    }

    function curveColor(d) {
      // return colors[i];
      let idx = vectors.indexOf(d.Sector);
      return idx < 0 ? "lightgray" : colors[idx];
    }

    function curveWidth(d) {
      return 1.0;
      // let idx = state.selected.indexOf(d[state.microzona]);
      // return idx < 0 ? 1.5 : 2.5;
    }

    function hover(svg, path) {

      if ("ontouchstart" in document) svg
          .style("-webkit-tap-highlight-color", "transparent")
          .on("touchmove", moved)
          .on("touchstart", entered)
          .on("touchend", left)
          // .on("touch", click);
      else svg
          .on("mousemove", moved)
          .on("mouseenter", entered)
          .on("mouseleave", left)
          // .on("click", click);

      function moved(event) {
        const xm = xScale.invert(event.offsetX - margin.left); // TODO: CONSTRAIN WITHIN RIGHT MARGIN
        const ym = yScale.invert(event.offsetY - margin.top);
        const i1 = d3.bisectLeft(state.years, xm, 1);
        const i0 = i1 - 1;
        const i = xm - state.years[i0] > state.years[i1] - xm ? i1 : i0;
        var s;
        if (state.scale === "log"){
          s = d3.least(state.filteredData, d => Math.abs(d.values[i].number - ym + 1));
        } else if (state.scale === "linear") {
          s = d3.least(state.filteredData, d => Math.abs(d.values[i].number - ym));
        }
        // const sIdx = state.selected.indexOf(s[state.microzona]);
        //
        function hoverColor(){
          return colors[i];
          // return sIdx < 0 ? colors[state.selected.length] : colors[sIdx];
        }

        d3.selectAll(".curve")
          .attr("opacity", curveOpacity)
          .attr("stroke", curveColor)
          .attr("stroke-width", curveWidth)

        d3.select(".curve."+nameNoSpaces(s.Region))
          .attr("opacity", 1.0)
          .attr("stroke", hoverColor)
          .attr("stroke-width", 2.5)

        // dot.attr("opacity", 0.0)

        // Circle showing value
        // if (sIdx >= 0) {

          // dot.attr("fill", hoverColor)
          //   .attr("opacity", 1.0)
          //   .attr("transform", function(d){
          //     if (state.escala == "escala-logaritmica"){
          //       return `translate(${xScale(state.dates[i])+margin.left},${yScale(s.values[i]+1)+margin.top})`;
          //     } else if (state.escala == "escala-lineal") {
          //       return `translate(${xScale(state.dates[i])+margin.left},${yScale(s.values[i])+margin.top})`;
          //     }
          //   });
          // dot.select("text").text(s.values[i]);

        // } else {

          //
          label.attr("fill", curveColor(s))
            .attr("opacity", 1.0)
            .attr("transform", function(d){
              if (state.scale === "log"){
                return `translate(${xScale(state.years[state.years.length-1])+margin.left+5},${yScale(s.values[s.values.length-1].number + 1)+margin.top+2})`;
              } else if (state.scale === "linear") {
                return `translate(${xScale(state.years[state.years.length-1])+margin.left+5},${yScale(s.values[s.values.length-1].number)+margin.top+2})`;
              }
            })
          label.select("text").text(s.Sector)

        // }
      }

      function entered() {
        path.style("mix-blend-mode", null).attr("stroke", "#ddd");
        // dot.attr("display", null);
        label.attr("display", null);
      }

      function left() {
        d3.selectAll(".curve")
            .attr("opacity", curveOpacity)
            .attr("stroke", curveColor)
            .attr("stroke-width", curveWidth)
        path.style("mix-blend-mode", "multiply").attr("stroke", null);
        // dot.attr("display", "none");
        label.attr("display", "none");
      }

      function click() {
        d3.event.preventDefault();
        const mouse = d3.mouse(this);
        const xm = xScale.invert(mouse[0]-margin.left); // TODO: CONSTRAIN WITHIN RIGHT MARGIN
        const ym = yScale.invert(mouse[1]-margin.top);
        const i1 = d3.bisectLeft(state.dates, xm, 1);
        const i0 = i1 - 1;
        const i = xm - state.dates[i0] > state.dates[i1] - xm ? i1 : i0;
        var s;
        if (state.escala == "escala-logaritmica"){
          s = d3.least(state.filteredData, d => Math.abs(d.values[i] - ym + 1));
        } else if (state.escala == "escala-lineal") {
          s = d3.least(state.filteredData, d => Math.abs(d.values[i] - ym));
        }
        const sIdx = state.selected.indexOf(s[state.microzona]);
        let nSelected = state.selected.length;
        if (sIdx < 0 && nSelected < colors.length - 1) {
          state.selected.push(s[state.microzona])
          updateLabels();
          updateSearchBox();
        }
      }
    }
  } // updateCurves

  function updateLabels() {

    var selectedBoxes = searched.selectAll(".searched-term").data(state.selected);

    selectedBoxes.enter().append("div")
      .attr("class", d => "searched-term "+nameNoSpaces(d))
      .style("color", (d, i) => colors[i])
      .style("background-color", function(d, i){
        let rgb = d3.rgb(colors[i])
        return `rgba(${rgb.r},${rgb.g},${rgb.b},0.05)`
      })
      .on("click", removeLabel)
      .html(d => d + '<span class="delete-term"><i class="fas fa-times-circle"></i></span>')

    selectedBoxes
      .attr("class", d => "searched-term "+nameNoSpaces(d))
      .style("color", (d, i) => colors[i])
      .style("background-color", function(d, i){
        let rgb = d3.rgb(colors[i])
        return `rgba(${rgb.r},${rgb.g},${rgb.b},0.05)`
      })
      .on("click", removeLabel)
      .html(d => d + '<span class="delete-term"><i class="fas fa-times-circle"></i></span>')

    selectedBoxes.exit().remove()

    var selectedText = g.selectAll(".selected-text").data(state.selected);

    selectedText.enter().append("text")
      .attr("class", "selected-text")
      .attr("font-family", "sans-serif")
      .attr("font-size", 12)
      .attr("text-anchor", "start")
      .attr("stroke", (d, i) => colors[i])
      .attr("transform", function(d){
        let curveData = d3.selectAll(".curve."+nameNoSpaces(d)).data()[0];
        let idxDate = state.dates.length - 1,
            idxData = curveData.values.length - 1;
        if (state.escala == "escala-logaritmica"){
          return `translate(${xScale(state.dates[idxDate])+5},${yScale(curveData.values[idxData] + 1)+2})`;
        } else if (state.escala == "escala-lineal") {
          return `translate(${xScale(state.dates[idxDate])+5},${yScale(curveData.values[idxData])+2})`;
        }
      })
      .text(d => d)

    selectedText.attr("stroke", (d, i) => colors[i])
      .attr("transform", function(d){
        let curveData = d3.selectAll(".curve."+nameNoSpaces(d)).data()[0];
        let idxDate = state.dates.length - 1,
            idxData = curveData.values.length - 1;
        if (state.escala == "escala-logaritmica"){
          return `translate(${xScale(state.dates[idxDate])+5},${yScale(curveData.values[idxData] + 1)+2})`;
        } else if (state.escala == "escala-lineal") {
          return `translate(${xScale(state.dates[idxDate])+5},${yScale(curveData.values[idxData])+2})`;
        }
      })
      .text(d => d)

    selectedText.exit().remove();

    function removeLabel(d) {
      state.selected = state.selected.filter(e => d != e);
      label.attr("opacity", 0.0);
      updateCurves();
      updateLabels();
      updateSearchBox();
    }
  } //updateLabels

  function updatePlot() {
    updateAxes();
    // updateSearchBox();
    updateCurves();
    // updateLabels();
  }

  filterData();
  updatePlot();

})
