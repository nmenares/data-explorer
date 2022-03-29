let state = {
  region: null,
  scenario: null,
  vector: null,
  result: null
}

let regions = ["Global", "Other"];
let scenarios = ["Default case", "Policy Led", "Carbon Pricing", "Max NCS", "Custom"];
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

const margin = {top: 20, right: 20, bottom: 20, left: 30},
    width = plotWidth - margin.left - margin.right,
    height = plotHeight - margin.top - margin.bottom;

var svg = plot.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

const dateParse = d3.timeParse("%Y");

function loadData(path, type='csv') {
  let loaded;
  if (type === 'csv') {
    loaded = d3.csv(path)
  } else {
    loaded = de.json(path)
  }
  Promise.all([loaded]).then(function(data){
    console.log(data);

    const adoptionCurves = data[0];

    let filteredData = adoptionCurves.filter(d => d.Region === "World " & d.Scenario === 'baseline');
    console.log(filteredData)

    let sectors = getUniquesMenu(filteredData, 'Sector'),
        years = adoptionCurves.columns.filter(d => !isNaN(+d));

    let processedData = {};

    processedData.lines = [];

    filteredData.forEach(d => {
      obj = {}
      obj.Sector = d.Sector;
      obj.Scenario = d.Scenario;
      obj.Region = d.Region;
      obj.values = years.map(y => {
        let objValues = {};
        objValues.x = dateParse(y);
        objValues.y = +d[y];
        return objValues;
      })
      processedData.lines.push(obj)
    })

    console.log(processedData)

    let chart = new LineChart(processedData, svg, width, height, margin);
  })
}
