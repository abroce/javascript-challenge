var tableData = data;
var tbody = d3.select("tbody");

function handleSubmit() {
  d3.event.preventDefault();

  var inputValue = d3.select("#datetime").property("value");
  var inputCity = d3.select("#cities").property("value").toLowerCase();
  var inputState = d3.select("#states").property("value").toLowerCase();
  var inputCountry = d3.select("#countries").property("value").toLowerCase();
  var inputShape = d3.select("#shapes").property("value").toLowerCase();

  tbody.html("")

    if (inputValue){
      var filteredDate = tableData.filter(data => data.datetime === inputValue)
    }
    else {
      var filteredDate = tableData.filter(data => data.datetime)
    };
    // then filter check for city
    if (inputCity){
      var filteredCity = filteredDate.filter(data => data.city === inputCity)
    }
    else {
      var filteredCity = filteredDate .filter(data => data.datetime)
    };
    // then filter check for state
    if (inputState){
      var filteredState = filteredCity.filter(data => data.state === inputState)
    }
    else {
      var filteredState = filteredCity.filter(data => data.state)

    };
    // then filter check for country
    if (inputCountry){
        var filteredCountry = filteredState.filter(data => data.country === inputCountry)
    }
    else {
      var filteredCountry = filteredState.filter(data => data.country)
    };
    // then filter check for shape
    if (inputShape){
        var filteredShape = filteredCountry.filter(data => data.shape === inputShape)
    }
    else {
      var filteredShape = filteredCountry.filter(data => data.shape)
    };


  filteredShape.forEach((ufoSighting) => {
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      })
  });
      


  d3.select("#datetime").node().value = "";
  d3.select("#cities").node().value = "";
  d3.select("#states").node().value = "";
  d3.select("#countries").node().value = "";
  d3.select("#shapes").node().value = "";
};
    
d3.select("#filter-btn").on("click", handleSubmit);
d3.select("form").on("submit", handleSubmit);