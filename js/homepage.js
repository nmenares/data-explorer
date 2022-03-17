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

function updateResultsMenu() {
  let resultsElements = state.region === "Global" ? results["Global"] : results["Other"];

  let resultsColumn = d3.select("#results");

  resultsColumn.selectAll(".results-title")
    .data(["Explore results"])
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
        d3.select(event.target).classed("selected", true)
      })

}

function updateDropdownLabel(id, label) {
  d3.select(id).select(".dropbtn").html(label);
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

let selectScenario = addOptions("scenarios-menu", scenarios)
d3.select("#dropdown-scenario")
  .on("click", function(d){
    document.getElementById("scenarios-menu").classList.toggle("show");
  });
updateDropdownLabel("#dropdown-scenario", state.scenario);
selectScenario.selectAll("a").on("click", (event, d) => {
  if (d !== state.scenario) {
    state.scenario = d;
    updateDropdownLabel("#dropdown-scenario", state.scenario);
    updateResultsMenu();
  }
});

let selectVector = addOptions("vectors-menu", vectors)
d3.select("#dropdown-vector")
  .on("click", function(d){
    document.getElementById("vectors-menu").classList.toggle("show");
  });
updateDropdownLabel("#dropdown-vector", state.vector);
selectVector.selectAll("a").on("click", (event, d) => {
  if (d !== state.vector) {
    state.vector = d;
    updateDropdownLabel("#dropdown-vector", state.vector);
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
  if (!event.target.matches('#dropbtn-scenario')) {
    var dropdown = document.getElementById("scenarios-menu");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
  if (!event.target.matches('#dropbtn-vector')) {
    var dropdown = document.getElementById("vectors-menu");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}
