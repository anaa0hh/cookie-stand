'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var storeContainer = [];


////////////////////////////////// constructor function /////////////////////////////////
function MakeLocation(name, minCustomer, maxCustomer, averageSales) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.averageSales = averageSales;
  this.averageCustomerPerHour =[];
  this.hourlySales = [];
  this.totalCookies = 0;

  this.customersPerHour();
  this.salesByHour();
  storeContainer.push(this);
  console.log(storeContainer);
}

MakeLocation.prototype.customersPerHour = function() {
  for(var i =0; i < hours.length; i++) {
    var customers = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer+1))+ this.minCustomer;
    this.averageCustomerPerHour.push(customers);
    // console.log(customers);
  }
};

MakeLocation.prototype.salesByHour = function() {
  for (var i = 0; i < hours.length; i++) {
    var sales = Math.ceil(this.averageCustomerPerHour[i] * this.averageSales);
    this.hourlySales.push(sales);

  }

  ////////////////////////////////// this making the  /////////////////////////////////
  var totalSales = 0;

  for(var j = 0; j < this.hourlySales.length; j++) {
    totalSales = this.hourlySales[j] + totalSales;
  }
  this.hourlySales.push(totalSales);
  return this.hourlySales;
};
////////////////////////////////// end of constructor function /////////////////////////////////



////////////////////////////// object instances //////////////////////////////

var firstAndPike = new MakeLocation('First and Pike', 23, 65, 6.3);
var seaTac = new MakeLocation('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new MakeLocation('Seattle Center', 11, 38, 3.7);
var capHill = new MakeLocation('Capitol Hill', 20, 38, 2.3);
var alki = new MakeLocation('Alki', 2, 16, 4.6);

var locations = [firstAndPike, seaTac, seaCenter, capHill, alki]; //this might be an issue. especially when dynamically making new stores. but maybe not


//////////// this for loop is just floting around. what does it do?////////////////

// for(var i = 0; i < locations.length; i++) {
//   locations[i].salesByHour();
// }

/////////////////////////////// this creates the header row /////////////////////////
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



/////////////////////////////// this is building the body ////////////////////////////////

var table = document.getElementById('shell');
var data = [];

for (var j = 0; j < locations.length; j++) {
  var dataList = '<td>' + locations[j].name + '</td>';
  for (var n = 0; n < 15; n++) {
    dataList = dataList + '<td>' + locations[j].hourlySales[n] + '</td>';
  }
  data.push(dataList);
}

//placing all the data collected in the data array into the DOM
var newRow;

for (var k = 0; k < data.length; k++) { //had to change coutner name to k
  newRow = document.createElement('tr');
  newRow.innerHTML = data[k];
  table.appendChild(newRow);
}

//////////////////////////// end of building the body ///////////////////////////////



//////////////////////footer starts here ///////////////////////////////

function createFooter() {
  var tfoot = document.getElementById('tfoot');
  var row = document.createElement('tr');
  row.setAttribute('id', 'footerRow');
  tfoot.appendChild(row);
  var anything = document.getElementById('footerRow');
  var thEl = document.createElement('th');
  thEl.innerHTML=('Total Per Hour');
  anything.appendChild(thEl);


  for(var i = 0; i < hours.length; i++){
    let columnTotal=0;

    for(var j = 0; j < storeContainer.length; j++){
      let currentStore = storeContainer[j];
      columnTotal += currentStore.hourlySales[i];
      console.log(currentStore.hourlySales[i]);
    }
    var div = document.createElement('td');
    div.textContent=(columnTotal);
    row.appendChild(div);
  }
}

createFooter();

// function createFooter() {
//   var tfoot = document.getElementById('tfoot');
//   var footValues = ['<td>' + 'Totals' + '</td>'];// whats this doing


//   // var grandTotal = [];



//the first for loop should loop through the length of the hours array
//////while its doing that we want it to declare the container variable but also on each iteration of THIS for loop it resets back to zero in preparation for the next column
//the inner for loop is going to iterate through a different global array. for this to work we need a global variable declared at the top of the program that holds that array of objects created by the constructor function.
//////in this for loop we want to declare a new variable (with let, i dont know why)

// createFooter();

//start by creating tab
