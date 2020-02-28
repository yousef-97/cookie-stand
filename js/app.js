'use strict';

var workHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
var allLocation = [];

//to call header of table
header();

//constructor function
function Locationsales(nameLocation, minCus, maxCus, avgCo) {
    this.nameLocation = nameLocation;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgCo = avgCo;
    this.numOfcookies = []; ///dose not need a parameter or arguments because its empty it will fill after calling the cookiesPerHour
    this.cookiesShouldPrepare = []; //dose not need an arguments because its empty it will fill after calling the cookiesPerHour
    allLocation.push(this);
    this.cookiesPerHour();
    this.data();
}


//
Locationsales.prototype.cookiesPerHour = function() {
    var total = 0;
    for (var i = 0; i < workHours.length; i++) { //.......... I added 1 in length to print the TOTAL
        this.numOfcookies.push(Math.round(getRandomCus(this.minCus, this.maxCus) * this.avgCo)); //......... the number of cookeies.
        // console.log(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);
        this.cookiesShouldPrepare.push(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`); //......... cookies per hour
        total += this.numOfcookies[i];
        if (i === workHours.length - 1) { this.cookiesShouldPrepare.push(`the total is ${total}`), this.numOfcookies.push(total); } //........length-1 to push the total befor the loop close &for the TOTAL number of cookies in the day
    }

};


//method the data of cookeies
Locationsales.prototype.data = function() {
    var hi = document.getElementById('table'); //to add the elements inside the table that i made it in header function
    var theData = document.createElement('tr');
    hi.appendChild(theData);
    var e = document.createElement('td');
    theData.appendChild(e);
    e.textContent = this.nameLocation;
    for (var z = 0; z < workHours.length; z++) {
        var tdE = document.createElement('td'); // LOL its work when i put it 'th' but td will destroy every thing
        theData.appendChild(tdE);
        tdE.textContent = this.numOfcookies[z]; // store the number of cookeis/H in the table
        if (z === workHours.length - 1) { //.....................this if steatment to add the total coulmn
            tdE = document.createElement('td');
            theData.appendChild(tdE);
            tdE.textContent = this.numOfcookies[workHours.length];
        }
    }
    // console.log(this.numOfcookies);

};





//for calling every things
new Locationsales('seattle', 23, 65, 6.3);

new Locationsales('tokyo', 3, 24, 1.2);

new Locationsales('dubai', 11, 38, 3.7);

new Locationsales('paris', 20, 38, 2.3);

new Locationsales('lima', 2, 16, 4.6);
// new Locationsales('jordan',22,40,5);
// console.log(new Locationsales('seattle',23,65,6.3));



//cookeis for each location NOT THE TABLE
// Locationsales.prototype.salesMoves = function(){

//   var cont = document.getElementById('cont');
//   var h2E = document.createElement('h2');//creating h2 to put it in article
//   var ulE = document.createElement('ul');//creating unorder list to put it in article

//   document.body.appendChild(cont);
//   cont.appendChild(h2E);
//   h2E.textContent = this.nameLocation;
//   cont.appendChild(ulE);


//   for(var j=0 ;j<this.numOfcookies.length;j++){
//     var liE = document.createElement('li');
//     liE.textContent =this.cookiesShouldPrepare[j];
//     ulE.appendChild(liE);
//   }
// };




//function header of the TABLE
function header() {
    var sales = document.getElementById('cont');
    var theHeader = document.createElement('table');
    var trE = document.createElement('tr');
    sales.appendChild(theHeader);
    theHeader.appendChild(trE);
    var atrr = document.createAttribute('id');
    atrr.value = 'table';
    theHeader.setAttributeNode(atrr);
    for (var x = 0; x < workHours.length + 1; x++) {

        var thE = document.createElement('th');
        trE.appendChild(thE);
        if (x === 0) { thE.textContent = ''; } else { thE.textContent = workHours[x - 1]; } //(x-1)because the spase whilex=0 BTW i add 1 to the length (loop structuer)
    }
    thE = document.createElement('th');
    trE.appendChild(thE);
    thE.textContent = 'TOTAL';
}
//footer function
function footer() {
    var theFooter = document.getElementById('table');
    var trE = document.createElement('tr');
    theFooter.appendChild(trE);
    var tdE = document.createElement('td');
    trE.appendChild(tdE);
    tdE.textContent = 'TOTAL';

    for (var j = 0; j < workHours.length + 1; j++) {
        var t = 0;
        tdE = document.createElement('td');
        trE.appendChild(tdE);
        for (var c = 0; c < allLocation.length; c++) {
            t += allLocation[c].numOfcookies[j];

        }
        tdE.textContent = t;
        // console.log(t);
    }
}


for (var i = 0; i < allLocation.lengt; i++) {
    allLocation[i];
}

footer();


//helper function
function getRandomCus(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var addLocation = document.getElementById('form');
addLocation.addEventListener('submit', function(event) {
    var gg = document.getElementById('table');
    gg.deleteRow(allLocation.length + 1);
    event.preventDefault();
    console.log(event.target);
    var theNewLocation = event.target.location.value;
    var theMin = event.target.mincustomer.value;
    var theMax = event.target.maxcustomer.value;
    var theAvg = event.target.avgcookies.value;
    new Locationsales(theNewLocation, theMin, theMax, theAvg);
    // console.log(allLocation);
    footer();
});