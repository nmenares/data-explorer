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

state.region = regions[0];
state.scenario = scenarios[0];
state.vector = vectors[0];

function addOptions(id, values) {
  var element = d3.select("#"+id);
  var options = element.selectAll("option").data(values);

  options.enter().append("a")
    .html(d => d);

  options.exit().remove();

  return element;
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
  }
});

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
