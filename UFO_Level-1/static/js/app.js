var tableData = data;

tbody = d3.select("tbody");

tableData.forEach(ufodata => {
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
  var date_input = d3.select("#datetime");
  var input_value = date_input.property("value");
  console.log(input_value);
  tbody.html("");

  var filteredData = tableData.filter(data => data.datetime === input_value);
  console.log(filteredData);
  if (filteredData.length >= 1) {
    filteredData.forEach(filtered_data => {
      var row = tbody.append("tr");
      Object.entries(filtered_data).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  } else {
    tbody.append("h5").text("Data not found. Please retry with another date!");
  }
});