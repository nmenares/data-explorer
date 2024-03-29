const state = {
  darkMode: true,
  region: regions[0],
  region_info: null,
  scenario: 'baseline',
  vector: vectors[0],
  result: vectors[0],
  filteredData: null,
  rawData: null,
  chart: 'line',
  groupBy: null,
  rawUniqueItems: {},
  filteredUniqueItems: {}
}

d3.select("#about-button")
  .on("click", function(d){
    document.getElementById("about-details").classList.toggle("show");
  });
d3.select("#close")
  .on("click", function(d){
    document.getElementById("about-details").classList.toggle("show");
  });
d3.select(".toggle-slider")
  .on("click", function(d){
    state.darkMode = !state.darkMode;
    updatePlot();
  })
d3.select("#download")
  .on("click", function(d){
    saveSvgAsPng(document.getElementById("chart-svg"), "epic-data-explorer-plot.png");
  });

const CIAFields = {
  'Economy': ["Real GDP per capita", "Real GDP growth rate", "Inflation rate (consumer prices)", "Unemployment rate"],
  'Energy': ["Electricity access", "Carbon dioxide emissions", "Energy consumption per capita"],
  'Environment': ["Revenue from forest resources", "Revenue from coal"]
};

const graphTypes = ['line', 'area', 'treemap'];

const graphs = d3.select('#chart-types').selectAll("div")
  .data(graphTypes);

graphs.enter().append("div")
  .attr("class", (d) => {
    const baseClass = "chart-icon col-2";
    if (state.chart === d) {
       return baseClass + " selected";
    }
    return baseClass;
  })
  .html(d => `<img src="img/chart-icons/${d}.svg" /><span class="icon-name">${d.split("_").join(' ')}</span>`)
  .on("click", (event, d) => {
    if (state.chart !== d) {
      state.chart = d;
      d3.select("#chart svg").selectAll("g").remove();
      loadData('./data/'+state.result.folder+'/'+state.region.name+'.csv');
      d3.selectAll(".chart-icon")
          .classed("selected", false);
      const target = d3.select(event.target.parentNode);
      target.classed("selected", true);
    }
  });

function getCIA(url) {
  Promise.all([d3.json(url)]).then(function(data){
    state.region_info = data[0];
    updateRegionInfo();
  })
}

getCIA(state.region.url)

function getHtml(indicator) {

  const text = indicator[Object.keys(indicator)[0]].text || indicator.text;

  if (!text) return getNoInfoHtml();

  const i = text.indexOf(' ');

  const number = Object.keys(indicator)[0] === 'total emissions' ? d3.format(".3s")(+text.slice(0, i).replace(/,/g, '')): text.slice(0, i);
  const est = text.slice(i + 1);

  return `<span class="cia-number">${number}</span><span class="cia-est">${est}</span>`

}

function getNoInfoHtml() {
  return `<span class="cia-number">N/A</span>`
}

function updateRegionInfo() {
  d3.select("#region-name").html(state.region.short_name);

  const ciaDivs = d3.select(".cia-indicators").selectAll(".cia-indicator")
    .data(Object.keys(CIAFields));

  ciaDivs.enter().append("div")
    .attr("class", "cia-indicator");

  d3.select(".cia-indicators").selectAll(".cia-indicator").selectAll(".indicator-col").remove();

  const indicatorName = d3.select(".cia-indicators").selectAll(".cia-indicator").selectAll(".indicator-name")
    .data(d => [d]);

  indicatorName.enter().append("div")
    .attr("class", "indicator-name")
    .html(d => d)
    .on("click", (event, d) => {
      const target = d3.select(event.target);
      const sibling = d3.select(event.target.parentNode).select(".indicator-details");
      const thisChecked = target.classed("checked");

      if (thisChecked === true) {
        target.classed("checked", false);
        sibling.classed("show", false);
      } else {
        d3.selectAll(".indicator-name")
          .classed("checked", c => c === d);
        d3.selectAll(".indicator-details")
          .classed("show", c => c === d); 

        d3.select(".cia-indicators")
          .selectAll(".cia-indicator")
          .selectAll(".indicator-details")
          .selectAll(".indicator-col")
          .selectAll(".indicator-value")
          .each((d,i,node) => {
            const thisNode = d3.select(node[0]);
            if (thisNode.select(".cia-number").node() !== null) {
              const width = thisNode.select(".cia-number").node().getBoundingClientRect().width;
              thisNode.select(".cia-est")
                .style("left", width + "px");
            }
          });
      }
    });

  const indicatorDetails = d3.select(".cia-indicators").selectAll(".cia-indicator").selectAll(".indicator-details")
    .data(d => [d]);

  indicatorDetails.enter().append("div")
    .attr("class", "indicator-details row");

  const indicatorCol = d3.select(".cia-indicators").selectAll(".cia-indicator").selectAll(".indicator-details").selectAll(".indicator-col")
    .data(d => CIAFields[d].map(f => [d, f]));

  indicatorCol.enter().append("div")
    .attr("class", 'indicator-col col-6');

  const indicatorValues = d3.select(".cia-indicators").selectAll(".cia-indicator").selectAll(".indicator-details").selectAll(".indicator-col").selectAll(".indicator-value")
    .data(d => [d]);

  indicatorValues.enter().append("div")
    .attr("class", 'indicator-value row')
    .html(d => state.region_info[d[0]][d[1]] ? getHtml(state.region_info[d[0]][d[1]]) : getNoInfoHtml())
    .each((d,i,node) => {
      const thisNode = d3.select(node[0]);
      if (thisNode.select(".cia-number").node() !== null) {
        const width = thisNode.select(".cia-number").node().getBoundingClientRect().width;
        thisNode.select(".cia-est")
          .style("left", width + "px");
      }
    });

  const indicatorValuesNames = d3.select(".cia-indicators").selectAll(".cia-indicator").selectAll(".indicator-details").selectAll(".indicator-col").selectAll(".indicator-value-name")
    .data(d => [d]);

  indicatorValuesNames.enter().append("div")
    .attr("class", 'indicator-value-name row')
    .html(d => `<span class="cia-indicator-name">${d[1]}</span>`);
}

function addOptions(id, rawValues) {
  const element = d3.select("#"+id);

  const buttonsDiv = element.selectAll("div").data([["Select all", "Deselect all"]]);

  buttonsDiv.enter().append("div")
    .attr("class", "buttons-container");

  const buttons = element.selectAll("div").selectAll("span").data(d => d);

  buttons.enter().append("span")
    .html(d => d);

  const options = element.selectAll("a").data(rawValues);

  options.enter().append("a");

  const optionsCheckboxes = element.selectAll("a").selectAll("input").data(d => [d]);

  // Checkboxes
  optionsCheckboxes.enter().append("input")
    .attr("type", "checkbox")
    .attr("id", d => nameNoSpaces(d.name))
    .property("checked", d => d.selected);

  // Labels
  const optionsLabels = element.selectAll("a").selectAll("label").data(d => [d.name]);

  optionsLabels.enter().append("label")
    .attr("for", d => nameNoSpaces(d))
    .html(d => d);

  return element;
}

function addStandardOptions(id, values, attrs=values.map(d => null)) {
  const element = d3.select("#"+id);
  const options = element.selectAll("option").data(values);

  options.enter().append("a")
    .attr("value", (d,i) => attrs[i])
    .html(d => capitalize(d));

  return element;
}

function updateDropdownLabel(id, label) {
  d3.select(id).select(".dropbtn").html(label);
}

const selectRegion = d3.select("#regions-menu");
const searchBox = d3.select("#search-box");
const searchReset = d3.select("#reset-search");

const toggleRegionMenu = () => {
  document.getElementById("regions-menu").classList.toggle("show");
  document.getElementById("regions-search").classList.toggle("show");
};

const resetSearchBox = () => {
  searchBox.property("value", '')
  .attr("placeholder", "Search...");
  searchReset.classed("show", false);
  updateRegions(regions);
};

const updateRegions = (regionsData) => {
  selectRegion.selectAll("a").remove();
  const optionsRegion = selectRegion.selectAll("a").data(regionsData);

  optionsRegion.enter().append("a")
    .html(d => d.short_name)
    .on("click", (event, d) => {
      if (d.name !== state.region.name) {
        state.region = d;
        getCIA(d.url);
        updateDropdownLabel("#dropdown-region", state.region.short_name);
        toggleRegionMenu();
        resetSearchBox();
        d3.select("#chart svg").selectAll("g").remove();
        loadData('./data/'+state.result.folder+'/'+state.region.name+'.csv');
      }
    });
};

updateRegions(regions);

d3.select("#dropbtn-region")
  .on("click", function(d){
    toggleRegionMenu();
    searchBox.attr("placeholder", "Search...");
    chart.hideRule();
    chart.tooltip.hide();
  });
updateDropdownLabel("#dropdown-region", state.region.short_name);

searchBox
  .on("click", (event) => {
    event.preventDefault();
    searchBox.attr("placeholder", "");
  })
  .on("keyup",  (event) => {
    event.preventDefault();
    const searchLabel = searchBox.property("value");

    if (searchLabel.length > 0) {
      searchReset.classed("show", true);
      const regionsData = regions.filter((d) => {
        return d.short_name.toLowerCase().includes(searchLabel.toLowerCase());
      });
      updateRegions(regionsData);
    } else {
      searchReset.classed("show", false);
      updateRegions(regions);
    }
  });

searchReset.on("click", resetSearchBox);
    
const selectVector = d3.select("#vector-content");

const options = selectVector.selectAll("option").data(vectors);

options.enter().append("a")
  .html(d => capitalize(d.name));

d3.select("#dropdown-vector")
  .on("click", function(d){
    document.getElementById("vector-content").classList.toggle("show");
  });
d3.select("#dropbtn-vector").html(capitalize(state.result.name));
selectVector.selectAll("a").on("click", (event, d) => {
  if (state.result !== d) {
    state.result = d;
    d3.select("#dropbtn-vector").html(capitalize(state.result.name));
    chart.hideRule();
    chart.tooltip.hide();
    d3.select("#chart svg").selectAll("g").remove();
    loadData('./data/'+state.result.folder+'/'+state.region.name+'.csv');
  }
})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  // Region dropdown menu
  // if (!event.target.matches('#dropbtn-region') && !event.path.includes(document.getElementById('regions-search'))) {
  //   var dropdown = document.getElementById("regions-menu");
  //   var box = document.getElementById("regions-search");
  //   if (dropdown.classList.contains('show')) {
  //     dropdown.classList.remove('show');
  //     box.classList.remove('show');
  //   }
  // }

  if (!event.target.matches('#dropbtn-vector')) {
    var dropdown = document.getElementById("vector-content");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }

  if (!event.target.matches('#dropbtn-scenario')) {
    var dropdown = document.getElementById("scenario-content");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }

  // Graph options dropdown menus
  // if (!event.path.includes(document.getElementById("filters-col")) && document.getElementById("show-filters").classList.contains("checked")) {
  //   let filter = d3.select("#show-filters");
  //   filter.classed("checked", !filter.classed("checked"));

  //   document.getElementById("graph-filters").classList.toggle("show");
  // }

  // About popup
  // if (!event.target.matches('#about-button') && !event.path.includes(document.getElementById('about-details'))) {
  //   var dropdown = document.getElementById("about-details");
  //   if (dropdown.classList.contains('show')) {
  //     dropdown.classList.remove('show');
  //   }
  // }
}

const plotWidth = d3.select("#chart").node().getBoundingClientRect().width,
    plotHeight = window.innerHeight - d3.select(".header").node().getBoundingClientRect().height
                - d3.select(".filters").node().getBoundingClientRect().height
                - 2 * d3.select(".ei-border-bottom").node().getBoundingClientRect().height
                - d3.select("#chart-options").node().getBoundingClientRect().height
                - 60;

const plot = d3.select("#chart")
    .attr("width", plotWidth)
    .attr("height", plotHeight);

const tooltipDiv = d3.select("body").append("div");
const popupDiv = d3.select("body").append("div");
const timeSliderDiv = d3.select("#time-slider");

const margin = {top: 20, right: 30, bottom: 20, left: 30},
    width = plotWidth - margin.left - margin.right,
    height = plotHeight - margin.top - margin.bottom;

const svg = plot.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("id", "chart-svg")
    .style("background-color", "#1c2137");

const dateParse = d3.timeParse("%Y");

let chart;

if (window.innerWidth >= 1040) loadData('./data/'+state.result.folder+'/'+state.region.name+'.csv');

function loadData(path, type='csv') {
  let loaded;
  if (type === 'csv') {
    loaded = d3.csv(path);
  } else {
    loaded = d3.json(path);
  }
  Promise.all([loaded]).then(function(data){
    const energyDemandPathway = data[0];
    // console.log(energyDemandPathway);

    const scenarios = getUniquesMenu(energyDemandPathway, 'scenario');
    state.scenario = scenarios.includes("pathway") ? "pathway" : scenarios[0];

    const selectScenario = addStandardOptions("scenario-content", scenarios);
    d3.select("#dropdown-scenario")
      .on("click", function(d){
        document.getElementById("scenario-content").classList.toggle("show");
      });
    d3.select("#dropbtn-scenario").html(capitalize(state.scenario));
    selectScenario.selectAll("a").on("click", (event, d) => {
      if (d !== state.scenario) {
        state.scenario = d;
        chart.hideRule();
        chart.tooltip.hide();
        d3.select("#dropbtn-scenario").html(capitalize(state.scenario));
        filterData();
        getMenuOptions();
        updatePlot();
      }
    });

    state.filteredData = energyDemandPathway;
    state.rawData = energyDemandPathway;

    const secondaryMenus = state.result.columns;
    state.rawUniqueItems = {};
    state.filteredUniqueItems = {};

    secondaryMenus.forEach(sm => {
      const s = sm.name;
      state.filteredUniqueItems[s] = getUniquesMenu(state.filteredData, s);
      state.rawUniqueItems[s] = getUniquesMenu(state.rawData, s).map(d => {
        const obj = {};
        obj.name = d;
        obj.selected = state.filteredUniqueItems[sm.name].includes(d);
        return obj;
      });
    })

    const updatePlot = () => {
      d3.select("body").classed("light", !state.darkMode);
      d3.selectAll(".header").classed("light", !state.darkMode);
      d3.selectAll(".select-label").classed("light", !state.darkMode);
      d3.selectAll(".btn-ei").classed("light", !state.darkMode);
      d3.selectAll(".dropbtn").classed("light", !state.darkMode);
      d3.selectAll(".dropdown-content").classed("light", !state.darkMode);
      d3.select("#search-box").classed("light", !state.darkMode);
      d3.select("#graph-filters").classed("light", !state.darkMode);
      d3.select("#about-details").classed("light", !state.darkMode);
      d3.selectAll(".graph-menu-detail").classed("light", !state.darkMode);
      d3.selectAll(".groupby-menu-detail").classed("light", !state.darkMode);
      d3.selectAll(".icon-col").classed("light", !state.darkMode);
      d3.selectAll(".ei-border-bottom").classed("light", !state.darkMode);
      d3.selectAll(".chart-icon").classed("light", !state.darkMode);
      d3.selectAll(".ei-tooltip").classed("light", !state.darkMode);
      d3.selectAll(".buttons-container").classed("light", !state.darkMode);
      d3.selectAll(".parameter-value").classed("light", !state.darkMode);
      d3.selectAll("#toggle").classed("light", !state.darkMode);
      d3.selectAll("#download").classed("light", !state.darkMode);
      svg.style("background-color", state.darkMode === true ? "#1c2137" : "white");
      chart.updateData(state.dataToPlot);
      chart.updateDarkMode(state.darkMode);
      chart.updatePlot();
    }

    function getMenuOptions() {
      const graphFilters = d3.select("#graph-filters");

      const graphMenus = graphFilters.selectAll(".graph-menu")
        .data(secondaryMenus);

      graphMenus.enter().append("div")
        .attr("class", "graph-menu");

      const graphMenusInfo = graphFilters.selectAll(".graph-menu").selectAll(".graph-menu-info")
        .data(d => [d]);

      graphMenusInfo.enter().append("div")
        .attr("class", "graph-menu-info");

      const graphMenuTitle = graphFilters.selectAll(".graph-menu").selectAll(".graph-menu-info").selectAll(".graph-menu-title")
        .data(d => [d])

      graphMenuTitle.enter().append("span")
        .attr("class", "graph-menu-title")
        .html(d => d.longName);

      const graphMenuDetail = graphFilters.selectAll(".graph-menu").selectAll(".graph-menu-info").selectAll(".graph-menu-detail")
        .data(d => [d])

      graphMenuDetail.enter().append("span")
        .attr("class", "graph-menu-detail")
        .classed("light", !state.darkMode)
        .html(d => `<p>${d.description} For more details, you can read the about section.</p>`);

      const graphMenuDropdown = graphFilters.selectAll(".graph-menu").selectAll(".dropdown")
        .data(d => [d.name]);

      graphMenuDropdown.enter().append("div")
        .attr("class", "dropdown")
        .attr("id", d => d+'-dropdown');

      const graphMenuDropbtn = graphFilters.selectAll(".graph-menu").selectAll(".dropdown").selectAll(".dropbtn")
        .data(d => [d]);

      graphMenuDropbtn.enter().append("div")
        .attr("class", "dropbtn")
        .classed("light", !state.darkMode)
        .attr("id", d => d+'-dropbtn');

      const graphMenuDropcontent = graphFilters.selectAll(".graph-menu").selectAll(".dropdown").selectAll(".dropdown-content")
        .data(d => [d]);

      graphMenuDropcontent.enter().append("div")
        .attr("class", "dropdown-content")
        .classed("light", !state.darkMode)
        .attr("id", d => d+'-menu');

      state.filteredUniqueItems = {};
      secondaryMenus.forEach(sm => {
        const s = sm.name;
        state.filteredUniqueItems[s] = getUniquesMenu(state.filteredData, s);

        const selectOption = addOptions(s+"-menu", state.rawUniqueItems[sm.name]);
        d3.select("#"+s+"-dropbtn")
          .on("click", function(event, d){
            d3.selectAll(".dropdown-content").filter(e => e !== d).classed("show", false);
            document.getElementById(s+"-menu").classList.toggle("show");
          });
        updateDropdownLabel("#"+s+"-dropdown", `${state.rawUniqueItems[s].filter(d => d.selected === true).length} selected`);
        selectOption.selectAll("span").on("click", (event, d) => {
          if (d === 'Select all') {
            state.rawUniqueItems[s].forEach(ui => ui.selected = true);
          } else if (d === 'Deselect all') {
            state.rawUniqueItems[s].forEach(ui => ui.selected = false);
          }
          chart.hideRule();
          chart.tooltip.hide();
          updateGroupByMenu();
          filterData();
          getMenuOptions();
          updatePlot();
        })
        selectOption.selectAll("a").selectAll("input").on("change", (event, d) => {
          state.rawUniqueItems[s].filter(item => item.name === d.name)[0].selected = !d.selected;
          chart.hideRule();
          chart.tooltip.hide();
          updateGroupByMenu();
          filterData();
          getMenuOptions();
          updatePlot();
          d3.select(event.target).node().parentNode.parentNode.classList.add("show");
        });
      });

      d3.select("#show-filters")
        .style("display", "block")
        .on("click", (event, d) => {
          chart.hideRule();
          chart.tooltip.hide();

          const filter = d3.select(event.target);
          filter.classed("checked", !filter.classed("checked"));

          document.getElementById("graph-filters").classList.toggle("show");
        });
    }

    function resetOptions(){
      secondaryMenus.forEach(d => {
        const menuOptions = getUniquesMenu(state.rawData, d.name);
        if (state.chart === 'area' && d.name === 'flow_category') {
          state[d.name] = menuOptions.includes('Final consumption') ? ['Final consumption'] : menuOptions;
        } else {
          state[d.name] = menuOptions;
        }
      });
      getMenuOptions()
    }

    resetOptions();

    const years = energyDemandPathway.columns.filter(d => !isNaN(+d));

    energyDemandPathway.forEach(d => {
      years.forEach(y => {
        d[y] = +d[y]
      })
    })

    state.yearsStr = years;
    state.years = years.map(d => dateParse(d));

    const filterData = () => {
      state.filteredData = energyDemandPathway.filter((d, i) => {
        const filtered = secondaryMenus.map(s => state.rawUniqueItems[s.name].filter(item => item.name === d[s.name])[0].selected);
        return ((d.scenario === state.scenario) && filtered.reduce((a, b) => a && b, true))
      })
      state.dataToPlot = {};
      state.dataToPlot.lines = [];
      const uniqueGroupBy = getUniquesMenu(state.filteredData, state.groupBy.name);

      // LINE PLOT
      uniqueGroupBy.forEach(d => {
        const obj = {};
        obj.name = d;
        const thisGroup = state.filteredData.filter(s => s[state.groupBy.name] === d);
        obj.values = years.map(y => {
          const values = {};
          values.x = dateParse(y);
          values.y = thisGroup.reduce((a,b) => a + b[y], 0)
          return values;
        })
        state.dataToPlot.lines.push(obj)
      })

      // STACKED AREA
      if (state.chart === 'area') {
        const series = d3.stack()
           .keys(uniqueGroupBy)
           .value((year, key) => state.dataToPlot.lines.filter(l => l.name === key)[0].values.filter(v => v.x - year === 0)[0].y)
           .order(d3.stackOrderDescending)
           .offset(null) // d3.stackOffsetExpand for normalized
           (years.map(y => dateParse(y)));

        state.dataToPlot.lines = uniqueGroupBy.map((d,i) => {
          const obj = {}
          obj.name = d;
          obj.values = series[i].map(s => {
            const val = {};
            val.y0 = s[0];
            val.y1 = s[1];
            val.x = s.data;
            return val;
          })
          return obj;
        })
      }
    }


    function updateGroupByMenu() {

      const graphFilters = d3.select("#graph-filters");

      const groupByMenus = graphFilters.selectAll(".groupby-menu")
        .data([{'name': 'Group by', 'description': "The group by filter is offered to enable visualizations that 'bundle up' output into categories defined by any one of the previous filters."}]);

      groupByMenus.enter().append("div")
        .attr("class", "groupby-menu");

      const groupByMenuInfo = graphFilters.selectAll(".groupby-menu").selectAll(".groupby-menu-info")
        .data(d => [d])

      groupByMenuInfo.enter().append("div")
        .attr("class", "groupby-menu-info");

      const groupByMenuTitle = graphFilters.selectAll(".groupby-menu").selectAll(".groupby-menu-info").selectAll(".groupby-menu-title")
        .data(d => [d])

      groupByMenuTitle.enter().append("span")
        .attr("class", "groupby-menu-title")
        .html(d => d.name);

      const groupByMenuDetail = graphFilters.selectAll(".groupby-menu").selectAll(".groupby-menu-info").selectAll(".groupby-menu-detail")
        .data(d => [d])

      groupByMenuDetail.enter().append("span")
        .attr("class", "groupby-menu-detail")
        .classed("light", !state.darkMode)
        .html(d => `<p>${d.description}</p>`);

      const groupByMenuDropdown = graphFilters.selectAll(".groupby-menu").selectAll(".dropdown")
        .data(d => [d]);

      groupByMenuDropdown.enter().append("div")
        .attr("class", "dropdown")
        .attr("id", d => 'groupby-dropdown');

      const groupByMenuDropbtn = graphFilters.selectAll(".groupby-menu").selectAll(".dropdown").selectAll(".dropbtn")
        .data(d => [d]);

      groupByMenuDropbtn.enter().append("div")
        .attr("class", "dropbtn")
        .classed("light", !state.darkMode)
        .attr("id", d => 'groupby-dropbtn');

      const groupByMenuDropcontent = graphFilters.selectAll(".groupby-menu").selectAll(".dropdown").selectAll(".dropdown-content")
        .data(d => [d]);

      groupByMenuDropcontent.enter().append("div")
        .attr("class", "dropdown-content")
        .classed("light", !state.darkMode)
        .attr("id", d => 'groupby-menu');

      const groupByOptions = secondaryMenus;
      // secondaryMenus.forEach(s => {
      //   if (state[s.name] === 'All') groupByOptions.push(s)
      // })

      if (groupByOptions.length === 0) {
        d3.select(".groupby-menu")
          .style("display", "none");
      } else {
        d3.select(".groupby-menu")
          .style("display", "block");

        const groupByOps = d3.select("#groupby-menu");
        const options = groupByOps.selectAll("a").data(groupByOptions);

        options.enter().append("a")
          .html(d => d.longName);

        d3.select("#groupby-dropdown")
          .on("click", function(d){
            document.getElementById("groupby-menu").classList.toggle("show");
          });
        if (state.groupBy === null) state.groupBy = groupByOptions[0];
        updateDropdownLabel("#groupby-dropdown", state.groupBy.longName);
        groupByOps.selectAll("a").on("click", (event, d) => {
          if (d !== state.groupBy) {
            state.groupBy = d;
            updateDropdownLabel("#groupby-dropdown", state.groupBy.longName);
            filterData();
            updatePlot();
          }
        });

        graphFilters.selectAll(".groupby-menu").raise();
      }
    }
    updateGroupByMenu();
    filterData();

    const yAxisUnit = state.result.name + " (" + state.result.units[0].label + ")";

    const margin = state.chart == 'treemap' ? {top: 0, right: 0, bottom: 0, left: 0} : {top: 20, right: 30, bottom: 20, left: 30},
        width = plotWidth - margin.left - margin.right,
        height = plotHeight - margin.top - margin.bottom;

    svg.attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

    chart = new Chart(state.dataToPlot,
                      svg,
                      width,
                      height,
                      margin,
                      'linear',
                      popupDiv,
                      tooltipDiv,
                      timeSliderDiv,
                      yAxisUnit,
                      darkMode=state.darkMode,
                      type=state.chart);
    chart.updatePlot();

    tooltipDiv.classed("light", !state.darkMode);
  })
}
