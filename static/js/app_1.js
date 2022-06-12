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
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
    
}

// Function to create filter
function handleClick() {

    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // if date is enterted, 
    // filter default data to show only the date entered
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @Note: if no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
} 

// Listen for a click
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the website loads
buildTable(tableData);