'use strict';
var hours = ['6am','7am','8am','9am','10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm'
];


//create a constructor function
function MakeLocation(name, minCustomer, maxCustomer, averageSales) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageSales = averageSales;
  this.averageCustomerPerHour =[];
  this.hourlySales = []; //this empty array is to be filled with our sales
  this.totalCookies = 0;

  this.customersPerHour();
  this.salesByHour();

}

MakeLocation.prototype.customersPerHour = function() {
  for(var i =0; i < hours.length; i++) {
    var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer+1))+ this.minCustomer;
    this.averageCustomerPerHour.push(customers);
    console.log(customers);
  }
};

MakeLocation.prototype.salesByHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var sales = Math.ceil(this.averageCustomerPerHour[i] * this.averageSales);
    this.hourlySales.push(sales);
    console.log(sales);
  }

  var totalSales = 0;
  for(var j = 0; j < this.hourlySales.length; j++) {
    totalSales = this.hourlySales[j] + totalSales;
  }
  this.hourlySales.push(totalSales);
  return this.hourlySales;
};

var firstAndPike = new MakeLocation('First and Pike', 23, 65, 6.3);
var seaTac = new MakeLocation('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new MakeLocation('Seattle Center', 11, 38, 3.7);
var capHill = new MakeLocation('Capitol Hill', 20, 38, 2.3);
var alki = new MakeLocation('Alki', 2, 16, 4.6);

var locations = [firstAndPike, seaTac, seaCenter, capHill, alki];

for(var i = 0; i < locations.length; i++) {
  locations[i].salesByHour();
}

//this creates the header row
function createHeader() {
  var thead = document.getElementById('thead');
  var headValues = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total']; //i use this as a global array so that you can use it as the conditional in your for loop counter Ex. i < headValues.length
  var newHead;

  for (var i = 0; i < headValues.length; i++) {
    newHead = document.createElement('td'); //td is predefined as table data
    newHead.textContent = headValues[i];
    thead.appendChild(newHead);
  }
}
createHeader();
//the header row ends here


var table = document.getElementById('shell');
var data = [];

for (var i = 0; i < locations.length; i++) {
  var dataList = '<td>' + locations[i].name + '</td>';
  for (var n = 0; n < 15; n++) {
    dataList = dataList + '<td>' + locations[i].hourlySales[n] + '</td>';
  }
  data.push(dataList);
}

//placing all the data collected in the data array into the DOM
var newRow;

for (var j = 0; j < data.length; j++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = data[j];
  table.appendChild(newRow);
}

function createFooter() {
  var tfoot = document.getElementById('tfoot');
  var footValues = ['<td>' + 'Totals' + '</td>'];


  var grandTotal = [];
  for (var k = 0; k < locations.length; k++) {
    grandTotal = 0;
    for (var l = 0; l < 15; l++) {
      grandTotal.push(locations[k].hourlySales[l] + grandTotal);
    }
  }
  // assembling the grand total for the table
  var grandDataList = [];
  for (var i = 0; i < 15; i++) {
    grandDataList = grandDataList + '<td>' + grandTotal[i] + '</td>';
  }
  footValues.push(grandDataList);

  //loops the headValues in the array above and puts them in the DOM table head
  var newFoot = document.createElement('tr');
  newFoot.innerHTML = footValues.join('');
  tfoot.appendChild(newFoot);
}

createFooter();
