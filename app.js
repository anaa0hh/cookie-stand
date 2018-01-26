'use strict';
var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
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

  //First and Pike Location
var firstAndPike = {
  name: 'First and Pike',
  //creating key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  //method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(
        Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
      );
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent =
          hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      firstandpike.appendChild(liEl);
    }
  }
};
firstAndPike.render();




//SeaTac Airport Location
var seatacAirport = {
  name: 'SeaTac Airport',
  //creating key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  //method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(
        Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
      );
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var seatacAirport = document.getElementById('seatacairport');
    var seatacap = document.getElementById('seatacap');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    seatacap.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent =
            hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      seatacAirport.appendChild(liEl);
    }
  }
};
seatacAirport.render();





//Seattle Center Location
var seattleCenter = {
  name: 'Seattle Center',
  //creating key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  //method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(
        Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
      );
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var seattleCenter = document.getElementById('seattlecenter');
    var seacent = document.getElementById('seacent');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    seacent.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent =
              hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      seattleCenter.appendChild(liEl);
    }
  }
};
seattleCenter.render();



//Capitol Hill Location
var capitolHill = {
  name: 'Capitol Hill',
  //creating key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  //method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(
        Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
      );
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var capitolHill = document.getElementById('capitolhill');
    var caphill = document.getElementById('caphill');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    caphill.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent =
              hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      capitolHill.appendChild(liEl);
    }
  }
};
capitolHill.render();





//Capitol Hill Location
var alkiStore = {
  name: 'Alki',
  //creating key value pairs inside of my object they are called properties
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
        ) + this.minCustPerHour
      );
      console.log(this.randCustByHour[i]);
    }
  },
  //method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(
        Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
      );
      console.log(this.cookiesSoldByHour[j]);
    }
  },
  render: function() {
    var alkiStore = document.getElementById('alkistore');
    var alki = document.getElementById('alki');
    //calling the methods in the object literal
    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    alki.appendChild(h3El);
    for (var k = 0; k < hours.length; k++) {
      //stepping through the hours array
      var liEl = document.createElement('li');
      //creating li elements with text of the hours
      liEl.textContent =
                hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      alkiStore.appendChild(liEl);
    }
  }
};
alkiStore.render();