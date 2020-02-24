'use strict';

var workHours = ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

// var seattle = {
//   nameLocation : 'seattle',
//   minCus : 23 ,
//   maxCus : 65,
//   avgCo : 6.3,
//   numOfcookies : [],
//   cookiesShouldPrepare:[],
// cookiesPerHour : function(){
//   var total = 0;
//   for(var i =0 ;i<workHours.length+1;i++){//.......... I added 1 in length to print the TOTAL
//     this.numOfcookies.push(Math.round(getRandomCus(this.minCus, this.maxCus)*this.avgCo));//......... the number of cookeies.
//     //   console.log(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);
//     this.cookiesShouldPrepare.push(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);//......... cookies per hour
//     total +=this.numOfcookies[i];
//     if (i === workHours.length-1){this.cookiesShouldPrepare.push(`the total is ${total}`);}//........for the TOTAL number of cookies in the day
//   }
//   // console.log(`Total : ${total} cookies`);
//   function getRandomCus(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
// },
//   renderSeattle : function(){
//     this.cookiesPerHour();
//     var theListArticle = document.createElement('article');//creating article.
//     var h2E = document.createElement('h2');//creating h2 to put it in article
//     var ulE = document.createElement('ul');//creating unorder list to put it in article

//     document.body.appendChild(theListArticle);
//     theListArticle.appendChild(h2E);
//     h2E.textContent = seattle.nameLocation;
//     theListArticle.appendChild(ulE);


//     for(var j=0 ;j<seattle.numOfcookies.length;j++){
//       var liE = document.createElement('li');
//       liE.textContent =seattle.cookiesShouldPrepare[j];
//       ulE.appendChild(liE);
//     }

//   }

// };
// // console.log(seattle.cookiesPerHour());
// seattle.renderSeattle();





// var tokyo = {
//   nameLocation : 'tokyo',
//   minCus : 3 ,
//   maxCus : 24,
//   avgCo : 1.2,
//   numOfcookies : [],
//   cookiesShouldPrepare:[],
//   cookiesPerHour : function(){
//     var total = 0;
//     for(var i =0 ;i<workHours.length+1;i++){//.......... I added 1 in length to print the TOTAL
//       this.numOfcookies.push(Math.round(getRandomCus(this.minCus, this.maxCus)*this.avgCo));//......... the number of cookeies.
//       //   console.log(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);
//       this.cookiesShouldPrepare.push(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);//......... cookies per hour
//       total +=this.numOfcookies[i];
//       if (i === workHours.length-1){this.cookiesShouldPrepare.push(`the total is ${total}`);}//........for the TOTAL number of cookies in the day
//     }
//     // console.log(`Total : ${total} cookies`);
//     function getRandomCus(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min)) + min;
//     }
//   },
//   rendertokyo : function(){
//     this.cookiesPerHour();
//     var theListArticle = document.createElement('article');//creating article.
//     var h2E = document.createElement('h2');//creating h2 to put it in article
//     var ulE = document.createElement('ul');//creating unorder list to put it in article

//     document.body.appendChild(theListArticle);
//     theListArticle.appendChild(h2E);
//     h2E.textContent = tokyo.nameLocation;
//     theListArticle.appendChild(ulE);


//     for(var j=0 ;j<tokyo.numOfcookies.length;j++){
//       var liE = document.createElement('li');
//       liE.textContent =tokyo.cookiesShouldPrepare[j];
//       ulE.appendChild(liE);
//     }

//   }

// };
//   // console.log(tokyo.cookiesPerHour());
// tokyo.rendertokyo();



// var dubai = {
//   nameLocation : 'dubai',
//   minCus : 11 ,
//   maxCus : 38,
//   avgCo : 3.7,
//   numOfcookies : [],
//   cookiesShouldPrepare:[],
//   cookiesPerHour : function(){
//     var total = 0;
//     for(var i =0 ;i<workHours.length+1;i++){//.......... I added 1 in length to print the TOTAL
//       this.numOfcookies.push(Math.round(getRandomCus(this.minCus, this.maxCus)*this.avgCo));//......... the number of cookeies.
//       //   console.log(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);
//       this.cookiesShouldPrepare.push(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);//......... cookies per hour
//       total +=this.numOfcookies[i];
//       if (i === workHours.length-1){this.cookiesShouldPrepare.push(`the total is ${total}`);}//........for the TOTAL number of cookies in the day
//     }
//     // console.log(`Total : ${total} cookies`);
//     function getRandomCus(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min)) + min;
//     }
//   },
//   renderdubai : function(){
//     this.cookiesPerHour();
//     var theListArticle = document.createElement('article');//creating article.
//     var h2E = document.createElement('h2');//creating h2 to put it in article
//     var ulE = document.createElement('ul');//creating unorder list to put it in article

//     document.body.appendChild(theListArticle);
//     theListArticle.appendChild(h2E);
//     h2E.textContent = dubai.nameLocation;
//     theListArticle.appendChild(ulE);


//     for(var j=0 ;j<dubai.numOfcookies.length;j++){
//       var liE = document.createElement('li');
//       liE.textContent =dubai.cookiesShouldPrepare[j];
//       ulE.appendChild(liE);
//     }

//   }

// };
//   // console.log(dubai.cookiesPerHour());
// dubai.renderdubai();



// var paris = {
//   nameLocation : 'paris',
//   minCus : 23 ,
//   maxCus : 65,
//   avgCo : 6.3,
//   numOfcookies : [],
//   cookiesShouldPrepare:[],
//   cookiesPerHour : function(){
//     var total = 0;
//     for(var i =0 ;i<workHours.length+1;i++){//.......... I added 1 in length to print the TOTAL
//       this.numOfcookies.push(Math.round(getRandomCus(this.minCus, this.maxCus)*this.avgCo));//......... the number of cookeies.
//       //   console.log(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);
//       this.cookiesShouldPrepare.push(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);//......... cookies per hour
//       total +=this.numOfcookies[i];
//       if (i === workHours.length-1){this.cookiesShouldPrepare.push(`the total is ${total}`);}//........for the TOTAL number of cookies in the day
//     }
//     // console.log(`Total : ${total} cookies`);
//     function getRandomCus(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min)) + min;
//     }
//   },
//   renderparis : function(){
//     this.cookiesPerHour();
//     var theListArticle = document.createElement('article');//creating article.
//     var h2E = document.createElement('h2');//creating h2 to put it in article
//     var ulE = document.createElement('ul');//creating unorder list to put it in article

//     document.body.appendChild(theListArticle);
//     theListArticle.appendChild(h2E);
//     h2E.textContent = paris.nameLocation;
//     theListArticle.appendChild(ulE);


//     for(var j=0 ;j<paris.numOfcookies.length;j++){
//       var liE = document.createElement('li');
//       liE.textContent =paris.cookiesShouldPrepare[j];
//       ulE.appendChild(liE);
//     }

//   }

// };
//   // console.log(paris.cookiesPerHour());
// paris.renderparis();


// var lima = {
//   nameLocation : 'lima',
//   minCus : 23 ,
//   maxCus : 65,
//   avgCo : 6.3,
//   numOfcookies : [],
//   cookiesShouldPrepare:[],
//   cookiesPerHour : function(){
//     var total = 0;
//     for(var i =0 ;i<workHours.length+1;i++){//.......... I added 1 in length to print the TOTAL
//       this.numOfcookies.push(Math.round(getRandomCus(this.minCus, this.maxCus)*this.avgCo));//......... the number of cookeies.
//       //   console.log(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);
//       this.cookiesShouldPrepare.push(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);//......... cookies per hour
//       total +=this.numOfcookies[i];
//       if (i === workHours.length-1){this.cookiesShouldPrepare.push(`the total is ${total}`);}//........for the TOTAL number of cookies in the day
//     }
//     // console.log(`Total : ${total} cookies`);
//     function getRandomCus(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min)) + min;
//     }
//   },
//   renderlima : function(){
//     this.cookiesPerHour();
//     var theListArticle = document.createElement('article');//creating article.
//     var h2E = document.createElement('h2');//creating h2 to put it in article
//     var ulE = document.createElement('ul');//creating unorder list to put it in article

//     document.body.appendChild(theListArticle);
//     theListArticle.appendChild(h2E);
//     h2E.textContent = lima.nameLocation;
//     theListArticle.appendChild(ulE);


//     for(var j=0 ;j<lima.numOfcookies.length;j++){
//       var liE = document.createElement('li');
//       liE.textContent =lima.cookiesShouldPrepare[j];
//       ulE.appendChild(liE);
//     }

//   }

// };
//   // console.log(lima.cookiesPerHour());
// lima.renderlima();

header();//to call header of table
function Locationsales(nameLocation,minCus,maxCus,avgCo){
  this.nameLocation = nameLocation;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCo = avgCo;
  this.numOfcookies=[]; ///dose not need a parameter or arguments because its empty it will fill after calling the cookiesPerHour
  this.cookiesShouldPrepare = []; //dose not need an arguments because its empty it will fill after calling the cookiesPerHour
  this.totaly = [];
}

Locationsales.prototype.cookiesPerHour = function(){
  var total = 0;
  for(var i =0 ;i<workHours.length;i++){//.......... I added 1 in length to print the TOTAL
    this.numOfcookies.push(Math.round(getRandomCus(this.minCus, this.maxCus)*this.avgCo));//......... the number of cookeies.
    // console.log(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);
    this.cookiesShouldPrepare.push(`at ${workHours[i]} : ${this.numOfcookies[i]} cookies`);//......... cookies per hour
    total +=this.numOfcookies[i];
    if (i === workHours.length-1){this.cookiesShouldPrepare.push(`the total is ${total}`),this.numOfcookies.push(total);}//........for the TOTAL number of cookies in the day
  }
  this.totaly.push(total);
  // console.log(`Total : ${total} cookies`);
};
console.log(new Locationsales('shadasda',12,32,2).cookiesPerHour.total);
//method the data of sales
Locationsales.prototype.data= function (){
  var hi = document.getElementById('table');//to add the elements inside the table that i made it in header function
  var theData = document.createElement('tr');
  hi.appendChild(theData);
  theData.textContent = this.nameLocation;
  for (var z = 0;z<workHours.length;z++){
    var tdE = document.createElement('th');// LOL its work when i put it 'th' but td will destroy every thing
    theData.appendChild(tdE);
    tdE.textContent=this.numOfcookies[z];// store the number of cookeis/H in the table
    if(z===workHours.length-1){//.....................this if steatment to add the total coulmn
      tdE = document.createElement('th');
      theData.appendChild(tdE);
      tdE.textContent=this.numOfcookies[workHours.length];}
  }

};


Locationsales.prototype.salesMoves = function(){
  this.cookiesPerHour();
  this.data();
  // var theListArticle = document.createElement('article');//creating article when i need but i think its gonna destroy every thing
  var cont = document.getElementById('cont');
  var h2E = document.createElement('h2');//creating h2 to put it in article
  var ulE = document.createElement('ul');//creating unorder list to put it in article

  document.body.appendChild(cont);
  cont.appendChild(h2E);
  h2E.textContent = this.nameLocation;
  cont.appendChild(ulE);


  for(var j=0 ;j<this.numOfcookies.length;j++){
    var liE = document.createElement('li');
    liE.textContent =this.cookiesShouldPrepare[j];
    ulE.appendChild(liE);
  }

};
//for calling every things
var seattle = new Locationsales('seattle',23,65,6.3);
// seattle.salesMoves();
var tokyo = new Locationsales('tokyo',3,24,1.2);
// tokyo.salesMoves();
var dubai = new Locationsales('dubai',11,38,3.7);
// dubai.salesMoves();
var paris = new Locationsales('paris',20,38,2.3);
// paris.salesMoves();
var lima = new Locationsales('lima',2,16,4.6);
// lima.salesMoves();


// console.log(seattle.numOfcookies[0]);
var allLocation = [seattle.salesMoves(),tokyo.salesMoves(),dubai.salesMoves(),paris.salesMoves(),lima.salesMoves()];//more eazy calling
// allLocation;

//function header of the TABLE
function header(){
  var theHeader = document.createElement('table');
  var trE = document.createElement('tr');
  document.body.appendChild(theHeader);
  theHeader.appendChild(trE);
  var atrr = document.createAttribute('id');
  atrr.value= 'table';
  theHeader.setAttributeNode(atrr);
  // var thE = document.createElement('th');
  // trE.appendChild(thE);
  // thE.textContent= '                  ';
  for (var x= 0;x<workHours.length+1;x++){

    var thE = document.createElement('th');
    // thE = document.createElement('td');
    trE.appendChild(thE);
    if (x===0){thE.textContent= '       ';}
    else{thE.textContent= workHours[x-1];}//(x-1)because the spase whilex=0 BTW i add 1 to the length (loop structuer)
  }
  thE = document.createElement('th');
  trE.appendChild(thE);
  thE.textContent='TOTAL';
}
//my problem
function footer(){
  var theFooter = document.getElementById('table');
  var trE = document.createElement('tr');
  theFooter.appendChild(trE);
  var tdE = document.createElement('td');
  trE.appendChild(tdE);
  trE.textContent = 'TOTAL';
  for(var j = 0;j<workHours.length;j++){
    tdE = document.createElement('td');
    trE.appendChild(tdE);
    var theTotal = 0;
    for( var c = 0;c<allLocation.length;c++){
      theTotal+=Locationsales[c].totaly[c];
      console.log(theTotal);
    }
    trE.textContent = theTotal;
  }
}
footer();



//helper function
function getRandomCus(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}








// function seattleLocation(){
//   var theListArticle = document.createElement('article');//creating article.
//   var h2E = document.createElement('h2');//creating h2 to put it in article
//   var ulE = document.createElement('ul');//creating unorder list to put it in article

//   document.body.appendChild(theListArticle);
//   theListArticle.appendChild(h2E);
//   h2E.textContent = seattle.nameLocation;
//   theListArticle.appendChild(ulE);


//   for(var j=0 ;j<seattle.numOfcookies.length;j++){
//     var liE = document.createElement('li');
//     liE.textContent =seattle.cookiesShouldPrepare[j];
//     ulE.appendChild(liE);
//   }
// }

