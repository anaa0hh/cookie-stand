'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var storeContainer = [];
var netTotal = [];

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
  // console.log(storeContainer);
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
// const bodyMax = 0;
function createBody() {
  var table = document.getElementById('shell');
  var data = [];

  for (var j = 0; j < locations.length; j++) { // current row
    var dataList = '<td>' + locations[j].name + '</td>';
    for (var n = 0; n < 15; n++) { // current cell

      dataList = dataList + '<td>' + locations[j].hourlySales[n] + '</td>';
    }
    // dataLis
    data.push(dataList);
  }

  //placing all the data collected in the data array into the DOM
  var newRow;

  for (var k = 0; k < data.length; k++) { //had to change coutner name to k
    newRow = document.createElement('tr');
    newRow.innerHTML = data[k];
    table.appendChild(newRow);
  }
}
createBody();
//////////////////////////// end of building the body ///////////////////////////////



//////////////////////footer starts here ///////////////////////////////

// var grandTotal =[];

function createFooter() {
  var tfoot = document.getElementById('tfoot');
  tfoot.innerHTML = '';
  var row = document.createElement('tr');
  row.setAttribute('id', 'footerRow');
  tfoot.appendChild(row);
  var anything = document.getElementById('footerRow');
  var thEl = document.createElement('th');
  thEl.innerHTML=('Total Per Hour');
  anything.appendChild(thEl);

  let footerMax=0;

  for(var i = 0; i < hours.length; i++){ // current column
    let columnTotal=0; // when starting a new column, reset total

    for(var j = 0; j < storeContainer.length; j++){ // current cell
      let currentStore = storeContainer[j];
      columnTotal += currentStore.hourlySales[i];
      // console.log(currentStore.hourlySales[i]);
    }
    var div = document.createElement('td'); // create element to put total in
    div.textContent=(columnTotal); // store column total in html
    row.appendChild(div); // place html with column total
    footerMax+=columnTotal;
  }
  var totalCell = document.createElement('td'); // create element to put totalCell in
  totalCell.textContent=(footerMax); // store totalCell in html
  row.appendChild(totalCell); // placing html element that has  totalCell



  // // replace old footer not append
  // var tfoot = document.getElementById('tfoot');
}
createFooter();
////////////////////////////////////////////////////////////

var storeForm = document.getElementById('store-form');
storeForm.addEventListener("submit", handleStoreAdd);

function handleStoreAdd(event) {
  event.preventDefault(); //gotta have it to prevent page reload on a submit event
  var newStoreName = event.target.storename.value;
  var newMinCust = event.target.mincust.value;
  var newMaxCust = event.target.maxcust.value;
  var newAvgCook = event.target.avgcook.value;

  //telling the user to fill in the form properly. So if the form is empty somewhere they get the alert//
  if(!newStoreName|| !newMinCust || !newMaxCust || !newAvgCook) {
    return alert('Do you want the data or not!? Enter something.');
  }

  var newLocation = new MakeLocation (newStoreName, newMinCust, newMaxCust, newAvgCook);

  var table = document.getElementById('shell');
  var row = '<td>' + newLocation.name + '</td>';
  for (var n = 0; n < 15; n++) { // current cell
    row = row + '<td>' + newLocation.hourlySales[n] + '</td>';
  }

  var newRow = document.createElement('tr');
  newRow.innerHTML = row;
  table.appendChild(newRow);
  // dataLis
  console.log(storeContainer);
  createFooter();

  //////////////////////////////////////////////////////////
  
  //target the name in the form
  // var newStoreName = event.target.storename.value;
  // var newStoreMinCust = parseInt(event.target.mincust.value);
  // var newStoreMaxCust = parseInt(event.target.maxcust.value);
  // var newStoreAvgCook = parseInt(event.target.avgcook.value);

  // console.log(newStoreName , newStoreMinCust, newStoreMaxCust, newStoreAvgCook);

  // new MakeLocation(newStoreName, newStoreMinCust, newStoreMaxCust, newStoreAvgCook);
// 
  // event.target.storename.value = null;
  // event.target.mincust.value = null;
  // event.target.maxcust.value = null;
  // event.target.avgcook.value = null;

}



// var grandTotal = [];
// for (var b = 0; b < locations.length; b++) {
//   grandTotal = 0;
//   for (var x = 0; x < 15; x++) {
//     grandTotal.push(locations[b].hourlySales[x] + grandTotal);
//   }
// }
// //assembling the grand total for the table
// var grandDataList = [];
// for (var y = 0; y < this.footerRow.length; y++) {
//   grandDataList = grandDataList + '<td>' + grandTotal[y] + '</td>';
// }
// this.hours.push(grandTotal);

// console.log(grandDataList);



//the first for loop should loop through the length of the hours array
//////while its doing that we want it to declare the container variable but also on each iteration of THIS for loop it resets back to zero in preparation for the next column
//the inner for loop is going to iterate through a different global array. for this to work we need a global variable declared at the top of the program that holds that array of objects created by the constructor function.
//////in this for loop we want to declare a new variable (with let, i dont know why)

