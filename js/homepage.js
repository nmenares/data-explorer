let state = {
  region: null,
  scenario: null,
  vector: null,
  result: null,
  filteredData: null
}

let regions = ['albania', 'algeria', 'angola', 'argentina', 'armenia', 'australi', 'austria', 'azerbaijan', 'bahrain', 'bangladesh', 'belarus', 'belgium', 'benin', 'bolivia', 'bosniaherz', 'botswana', 'brazil', 'brunei', 'bulgaria', 'cambodia', 'cameroon', 'canada', 'chile', 'china', 'colombia', 'congo', 'congorep', 'costarica', 'coteivoire', 'croatia', 'cuba', 'curacao', 'cyprus', 'czech', 'denmark', 'dominicanr', 'ecuador', 'egypt', 'elsalvador', 'eqguinea', 'eritrea', 'estonia', 'ethiopia', 'finland', 'france', 'gabon', 'georgia', 'germany', 'ghana', 'gibraltar', 'greece', 'guatemala', 'guyana', 'haiti', 'honduras', 'hongkong', 'hungary', 'iceland', 'india', 'indonesia', 'iran', 'iraq', 'ireland', 'israel', 'italy', 'jamaica', 'japan', 'jordan', 'kazakhstan', 'kenya', 'korea', 'koreadpr', 'kosovo', 'kuwait', 'kyrgyzstan', 'lao', 'latvia', 'lebanon', 'libya', 'lithuania', 'luxembou', 'malaysia', 'malta', 'mauritius', 'mburkinafa', 'mchad', 'mexico', 'mgreenland', 'mmadagasca', 'mmali', 'mmauritani', 'moldova', 'mongolia', 'montenegro', 'morocco', 'mozambique', 'mrwanda', 'muganda', 'myanmar', 'namibia'];
// let scenarios = ["Default case", "Policy Led", "Carbon Pricing", "Max NCS", "Custom"];
let scenarios = ["pathway"]
let vectors = ["All", "Electricity", "Buildings", "Transportation", "Industry", "Agriculture",
               "F&W", "CO2 Removal"];
let results = {
  "Global": [
    {
      "name": "Climate",
      "children": ["Temperature", "PPM", "Rad Forcing", "Sea Level Rise"]
    },
    {
      "name": "Emissions",
      "children": ["Mitigated", "DAU21"]
    },
    {
      "name": "Economy",
      "children": ["PD Adoption"]
    },
    {
      "name": "Energy",
      "children": ["Energy Supply", "Energy Demand"]
    }
  ],
  "Other": [
    {
      "name": "Country data",
      "children": []
    },
    {
      "name": "V7 Sector Transitions",
      "children": ["Transportation", "AFOLU", "Regenerative Agriculture"]
    },
    {
      "name": "Macro-Econ Transition",
      "children": ["Energy Supply", "Energy Demand"]
    },
    {
      "name": "NDC Calculator",
      "children": ["Climate Mitigation Potential", "Emissions Pathway"]
    },
    {
      "name": "Sector Impact Opps",
      "children": []
    }
  ]
}

state.region = regions[0];
state.scenario = scenarios[0];
state.vector = vectors[0];

var nameNoSpaces = function(name) {
  return name.toLowerCase().split(" ").join("");
}

function addOptions(id, values) {
  var element = d3.select("#"+id);
  var options = element.selectAll("option").data(values);

  options.enter().append("a")
    .html(d => d);

  options.exit().remove();

  return element;
}

function addStandardOptions(id, values, attrs=values.map(d => null)) {
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

function addButtons(id, values) {
  var element = d3.select("#"+id);
  var options = element.selectAll("button").data(values);

  options.enter().append("button")
    .attr("class", "btn-ei")
    .html(d => d);

  options.exit().remove();

  return element;
}

function updateResultsMenu() {
  let resultsElements = state.region === "Global" ? results["Global"] : results["Other"];

  let resultsColumn = d3.select("#results");

  resultsColumn.selectAll(".results-title")
    .data(["Outputs"])
    .join("div")
      .attr("class", "results-title")
      .html(d => d)

  let resultsItems = resultsColumn.selectAll(".results-item").data(resultsElements)
    .join("div")
      .attr("class", "results-item")

  resultsItems.selectAll(".results-item-main")
    .data(d => [d])
    .join("div")
      .attr("class", "results-item-main")
      .html((d, i) => d.name)
      .on("click", (event, d) => {
        secondaryItems.filter(item => item !== d).classed("show", false);
        d3.select("#secondary-items-" + nameNoSpaces(d.name)).classed("show", !d3.select("#secondary-items-" + nameNoSpaces(d.name)).classed("show"));
      })

  let secondaryItems = resultsItems.selectAll(".results-item-secondary")
    .data(d => [d])
    .join("div")
      .attr("id", d => "secondary-items-" + nameNoSpaces(d.name))
      .attr("class", "results-item-secondary")

  secondaryItems.selectAll(".secondary-item")
    .data(d => d.children)
    .join("div")
      .attr("class", "secondary-item")
      .html(d => d)
      .on("click", (event, d) => {
        secondaryItems.filter(item => item !== d).selectAll(".secondary-item").classed("selected", false);
        d3.select(event.target).classed("selected", true);
        d3.select("#chart svg").selectAll("g").remove();
        loadData('data/energy_demand_pathway.csv');
      })

}

function updateDropdownLabel(id, label) {
  d3.select(id).select(".dropbtn").html(label);
}

function updateSelectedButton(element, stateVar) {
  element.selectAll(".btn-ei").filter(d => d !== stateVar).classed("btn-ei-selected", false);
  element.selectAll(".btn-ei").filter(d => d === stateVar).classed("btn-ei-selected", true);
}

function hideCountryDivs() {
  d3.select(".select-vector").style("display", "none");
}

function showCountryDivs() {
  d3.select(".select-vector").style("display", "block");
}

let selectRegion = addOptions("regions-menu", regions)
d3.select("#dropdown-region")
  .on("click", function(d){
    document.getElementById("regions-menu").classList.toggle("show");
  });
updateDropdownLabel("#dropdown-region", state.region);
selectRegion.selectAll("a").on("click", (event, d) => {
  if (d !== state.region) {
    state.region = d;
    updateDropdownLabel("#dropdown-region", state.region);
    if (d === "Global") {
      hideCountryDivs();
    } else {
      showCountryDivs();
    }
    updateResultsMenu();
    filterData();
    updatePlot();
  }
});

let selectScenario = addButtons("buttons-scenario", scenarios)
updateSelectedButton(selectScenario, state.scenario);
selectScenario.selectAll(".btn-ei").on("click", (event, d) => {
  if (d !== state.scenario) {
    state.scenario = d;
    updateSelectedButton(selectScenario, state.scenario);
    updateResultsMenu();
  }
});

let selectVector = addButtons("buttons-vector", vectors)
updateSelectedButton(selectVector, state.vector);
selectVector.selectAll(".btn-ei").on("click", (event, d) => {
  if (d !== state.vector) {
    state.vector = d;
    updateSelectedButton(selectVector, state.vector);
    updateResultsMenu();
  }
});

updateResultsMenu();

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#dropbtn-region')) {
    var dropdown = document.getElementById("regions-menu");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

const plotWidth = d3.select("#chart").node().getBoundingClientRect().width - 40,
    plotHeight = window.innerHeight - d3.select(".header").node().getBoundingClientRect().height
                - d3.select(".filters").node().getBoundingClientRect().height
                - 2 * d3.select(".ei-border-bottom").node().getBoundingClientRect().height
                - 40;

let plot = d3.select("#chart")
    .attr("width", plotWidth)
    .attr("height", plotHeight);

let tooltipDiv = d3.select("body").append("div");

const margin = {top: 20, right: 20, bottom: 20, left: 30},
    width = plotWidth - margin.left - margin.right,
    height = plotHeight - margin.top - margin.bottom;

var svg = plot.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

const dateParse = d3.timeParse("%Y");

let chart;

function loadData(path, type='csv') {
  let loaded;
  if (type === 'csv') {
    loaded = d3.csv(path)
  } else {
    loaded = de.json(path)
  }
  Promise.all([loaded]).then(function(data){
    let energyDemandPathway = data[0];
    console.log(energyDemandPathway);

    state.filteredData = energyDemandPathway;

    let primaryMenus = ['Region', 'Scenario'],
        secondaryMenus = ['Sector', 'Product_category', 'Product_long', 'Flow_category', 'Flow_long'];

    let menuIds = {
      'Sector': 'sectors',
      'Product_category': 'productCategories',
      'Product_long': 'products',
      'Flow_category': 'flowCategories',
      'Flow_long': 'flows'
    }

    updatePlot = function() {
      chart.updateData(state.dataToPlot);
      chart.updatePlot();
    }

    function getMenuOptions() {
      let graphFilters = d3.select("#graph-filters");

      let graphMenus = graphFilters.selectAll(".graph-menu")
        .data(secondaryMenus);

      graphMenus.attr("class", "graph-menu");

      graphMenus.enter().append("div")
        .attr("class", "graph-menu");

      graphMenus.exit().remove();

      let graphMenuTitle = graphFilters.selectAll(".graph-menu").selectAll(".graph-menu-title")
        .data(d => [d])

      graphMenuTitle.attr("class", "graph-menu-title")
        .html(d => d);

      graphMenuTitle.enter().append("span")
        .attr("class", "graph-menu-title")
        .html(d => d);

      graphMenuTitle.exit().remove();

      let graphMenuDropdown = graphFilters.selectAll(".graph-menu").selectAll(".dropdown")
        .data(d => [d]);

      graphMenuDropdown.attr("class", "dropdown")
        .attr("id", d => d+'-dropdown');

      graphMenuDropdown.enter().append("div")
        .attr("class", "dropdown")
        .attr("id", d => d+'-dropdown');

      graphMenuDropdown.exit().remove();

      let graphMenuDropbtn = graphFilters.selectAll(".graph-menu").selectAll(".dropdown").selectAll(".dropbtn")
        .data(d => [d]);

      graphMenuDropbtn.attr("class", "dropbtn")
        .attr("id", d => d+'-dropbtn');

      graphMenuDropbtn.enter().append("div")
        .attr("class", "dropbtn")
        .attr("id", d => d+'-dropbtn');

      graphMenuDropbtn.exit().remove();

      let graphMenuDropcontent = graphFilters.selectAll(".graph-menu").selectAll(".dropdown").selectAll(".dropdown-content")
        .data(d => [d]);

      graphMenuDropcontent.attr("class", "dropdown-content")
        .attr("id", d => d+'-menu');

      graphMenuDropcontent.enter().append("div")
        .attr("class", "dropdown-content")
        .attr("id", d => d+'-menu');

      graphMenuDropcontent.exit().remove();

      secondaryMenus.forEach(s => {
        if (state[s] === 'All') {
          let uniqueItems = ['All', ...getUniquesMenu(state.filteredData, s)];

          let selectRegion = addOptions(s+"-menu", uniqueItems)
          d3.select("#"+s+"-dropdown")
            .on("click", function(d){
              document.getElementById(s+"-menu").classList.toggle("show");
            });
          updateDropdownLabel("#"+s+"-dropdown", state[s]);
          selectRegion.selectAll("a").on("click", (event, d) => {
            if (d !== state[s]) {
              state[s] = d;
              updateDropdownLabel("#"+s+"-dropdown", state[s]);
              filterData();
              getMenuOptions();
              updatePlot();
              document.getElementById(s+"-menu").classList.toggle("show");
            }
          });
        }
      });

      d3.select("#show-filters")
        .style("display", "block")
        .on("click", (event, d) => {
          let filter = d3.select(event.target);
          filter.classed("checked", !filter.classed("checked"));

          document.getElementById("graph-filters").classList.toggle("show");
        });
    }

    function resetOptions(){
      secondaryMenus.forEach(d => state[d] = 'All');
      getMenuOptions()
    }

    resetOptions();

    let regions = getUniquesMenu(energyDemandPathway, 'Region'),
        scenarios = getUniquesMenu(energyDemandPathway, 'Scenario'),
        years = energyDemandPathway.columns.filter(d => !isNaN(+d));

    energyDemandPathway.forEach(d => {
      years.forEach(y => {
        d[y] = +d[y]
      })
    })

    state.yearsStr = years;
    state.years = years.map(d => dateParse(d));

    filterData = function(){
      state.filteredData = energyDemandPathway.filter((d, i) => {
        let filtered = secondaryMenus.map(s => {
          return state[s] === 'All' ? true : d[s] === state[s];
        });
        return ((d.Region === state.region) && (d.Scenario === state.scenario) && filtered.reduce((a, b) => a && b, true))
      })
      state.dataToPlot = {};
      state.dataToPlot.lines = [];
      let uniqueGroupBy = getUniquesMenu(state.filteredData, state.groupBy);
      uniqueGroupBy.forEach(d => {
        let obj = {};
        obj.name = d;
        let thisGroup = state.filteredData.filter(s => s[state.groupBy] === d);
        obj.values = years.map(y => {
          let values = {};
          values.x = dateParse(y);
          values.y = thisGroup.reduce((a,b) => a + b[y], 0)
          return values;
        })
        state.dataToPlot.lines.push(obj)
      })
    }

    function updateGroupByMenu() {

      let graphFilters = d3.select("#graph-filters");

      let groupByMenus = graphFilters.selectAll(".groupby-menu")
        .data(['Group by']);

      groupByMenus.attr("class", "groupby-menu");

      groupByMenus.enter().append("div")
        .attr("class", "groupby-menu");

      groupByMenus.exit().remove();

      let groupByMenuTitle = graphFilters.selectAll(".groupby-menu").selectAll(".groupby-menu-title")
        .data(d => [d])

      groupByMenuTitle.attr("class", "groupby-menu-title")
        .html(d => d);

      groupByMenuTitle.enter().append("span")
        .attr("class", "groupby-menu-title")
        .html(d => d);

      groupByMenuTitle.exit().remove();

      let groupByMenuDropdown = graphFilters.selectAll(".groupby-menu").selectAll(".dropdown")
        .data(d => [d]);

      groupByMenuDropdown.attr("class", "dropdown")
        .attr("id", d => 'groupby-dropdown');

      groupByMenuDropdown.enter().append("div")
        .attr("class", "dropdown")
        .attr("id", d => 'groupby-dropdown');

      groupByMenuDropdown.exit().remove();

      let groupByMenuDropbtn = graphFilters.selectAll(".groupby-menu").selectAll(".dropdown").selectAll(".dropbtn")
        .data(d => [d]);

      groupByMenuDropbtn.attr("class", "dropbtn")
        .attr("id", d => 'groupby-dropbtn');

      groupByMenuDropbtn.enter().append("div")
        .attr("class", "dropbtn")
        .attr("id", d => 'groupby-dropbtn');

      groupByMenuDropbtn.exit().remove();

      let groupByMenuDropcontent = graphFilters.selectAll(".groupby-menu").selectAll(".dropdown").selectAll(".dropdown-content")
        .data(d => [d]);

      groupByMenuDropcontent.attr("class", "dropdown-content")
        .attr("id", d => 'groupby-menu');

      groupByMenuDropcontent.enter().append("div")
        .attr("class", "dropdown-content")
        .attr("id", d => 'groupby-menu');

      groupByMenuDropcontent.exit().remove();

      let groupByOptions = [];
      secondaryMenus.forEach(s => {
        if (state[s] === 'All') groupByOptions.push(s)
      })

      let groupByOps = addOptions("groupby-menu", groupByOptions)
      d3.select("#groupby-dropdown")
        .on("click", function(d){
          document.getElementById("groupby-menu").classList.toggle("show");
        });
      state.groupBy = groupByOptions[0];
      updateDropdownLabel("#groupby-dropdown", state.groupBy);
      groupByOps.selectAll("a").on("click", (event, d) => {
        if (d !== state.groupBy) {
          state.groupBy = d;
          updateDropdownLabel("#groupby-dropdown", state.groupBy);
          filterData();
          updatePlot();
        }
      });
    }
    updateGroupByMenu();
    filterData();

    chart = new LineChart(state.dataToPlot, svg, width, height, margin, 'linear', tooltipDiv);
    chart.updatePlot();

  })
}
