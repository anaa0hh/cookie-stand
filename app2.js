'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


/////////////////this is the "constructor function" portion of the program ///////////
function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.hourlySales = [];
}

MakeLocation.prototype.customerPerHour = function () {
  var customer = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);
  return customer;
};

MakeLocation.prototype.salesPerHour = function () {
  for (var i = 0; i < 14; i++) {
    var sales = this.customerPerHour() * this.avgCookieSoldPerHour;
    this.hourlySales.push(Math.ceil(sales));
  }
  var totalSales = 0;
  for (var j = 0; j < this.hourlySales.length; j++) {
    totalSales = this.hourlySales[j] + totalSales;
  }
  this.hourlySales.push(totalSales);
  return this.hourlySales;
};


// this.salesPerHour();
/////////////////this is the END of the "constructor function" portion of the program ///////////

// call constructors
var firstAndPike = new MakeLocation('First and Pike', 23, 65, 6.3);
var seaTac = new MakeLocation('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new MakeLocation('Seattle Center', 11, 38, 3.7);
var capHill = new MakeLocation('Capitol Hill', 20, 38, 2.3);
var alki = new MakeLocation('Alki', 2, 16, 4.6);

var locations = [firstAndPike, seaTac, seaCenter, capHill, alki];

for (var k = 0; k < locations.length; k++) {
  locations[k].salesByHour();
}

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

var table = document.getElementById('shell');
var data = [];

for (var m = 0; m < locations.length; m++) {
  var dataList = '<td>' + locations[m].name + '</td>';
  for (var n = 0; n < 15; n++) {
    dataList = dataList + '<td>' + locations[m].hourlySales[n] + '</td>';
  }
  data.push(dataList);
}

//placing all the data collected in the data array into the DOM
var newRow;

for (var z = 0; z < data.length; z++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = data[z];
  table.appendChild(newRow);
}

function createFooter() {
  var tfoot = document.getElementById('tfoot');
  var footValues = ['<td>' + 'Totals' + '</td>'];


  var grandTotal = [];
  for (var b = 0; b < locations.length; b++) {
    grandTotal = 0;
    for (var x = 0; x < 15; x++) {
      grandTotal.push(locations[b].hourlySales[x] + grandTotal);
    }
  }
  //assembling the grand total for the table
  var grandDataList = [];
  for (var y = 0; y < this.hourlySales.length; y++) {
    grandDataList = grandDataList + '<td>' + grandTotal[y] + '</td>';
  }
  footValues.push(grandDataList);

  //loops the headValues in the array above and puts them in the DOM table head
  var newFoot = document.createElement('tr');
  newFoot.innerHTML = footValues.join('');
  tfoot.appendChild(newFoot);
}

createFooter();









// MakeLocation.prototype.newCells = function () {
//   var table = document.getElementById('shell');
//   var trow = document.createElement('tr');
//   table.appendChild(trow);
//   console.log('this is the new cell maker function');

//   for (var j = 0; j < hours.length; j++) {
//     var tdEl = document.createElement('td');
//     tdEl.textContent = (this.hourlySales[j]);
//     trow.appendChild(tdEl);
//   }
// };



// //////this is a back up //////////

// var data = [];
// for (var j = 0; j < locations.length; j++) {
//   var locationName = '<td>' + locations[j].name + '</td>';

//   //var 
//   //you arent building new cells PER iteration. var something = document.getElementById
//    for (var k = 0; k < 15; k++) { //think we wont need this nested for
//      locationName = locationName + '<td>' + locations[j].hourlySales[k] + '</td>';
//    }
//   data.push(locationName);
// }

// //new rows
// var newRow;
// for (var i = 0; i < data.length; i++) {
//   newRow = document.createElement('tr');
//   newRow.textContent = data[i];
//   table.appendChild(newRow);
// }
