// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Begin Table Function
function buildTable(data) {
    // clear table data
    tbody.html("");

    // loop through data
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        // Loop through data rows
        Object.values(datarow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
    
}