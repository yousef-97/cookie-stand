'use strict';


var seattle = {
  nameLocation : 'seattle',
  workHours : ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  minCus : 23 ,
  maxCus : 65,
  avgCo : 6.3,
  numOfcookies : [],
  cookiesShouldPrepare:[],
  cookiesPerHour : function(){
    var total = 0;
    for(var i =0 ;i<this.workHours.length+1;i++){//.......... I added 1 in length to print the TOTAL
      this.numOfcookies.push(Math.round(getRandomCus(this.minCus, this.maxCus)*this.avgCo));//......... the number of cookeies.
      //   console.log(`at ${this.workHours[i]} : ${this.numOfcookies[i]} cookies`);
      this.cookiesShouldPrepare.push(`at ${this.workHours[i]} : ${this.numOfcookies[i]} cookies`);//......... cookies per hour
      total +=this.numOfcookies[i];
      if (i === this.workHours.length-1){this.cookiesShouldPrepare.push(`the total is ${total}`);}//........for the TOTAL number of cookies in the day
    }
    // console.log(`Total : ${total} cookies`);
    function getRandomCus(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
  renderSeattle : function(){
    this.cookiesPerHour();
    var theListArticle = document.createElement('article');//creating article.
    var h2E = document.createElement('h2');//creating h2 to put it in article
    var ulE = document.createElement('ul');//creating unorder list to put it in article

    document.body.appendChild(theListArticle);
    theListArticle.appendChild(h2E);
    h2E.textContent = seattle.nameLocation;
    theListArticle.appendChild(ulE);


    for(var j=0 ;j<seattle.numOfcookies.length;j++){
      var liE = document.createElement('li');
      liE.textContent =seattle.cookiesShouldPrepare[j];
      ulE.appendChild(liE);
    }

  }

};
// console.log(seattle.cookiesPerHour());
seattle.renderSeattle();





var tokyo = {
  nameLocation : 'tokyo',
  workHours : ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  minCus : 3 ,
  maxCus : 24,
  avgCo : 1.2,
  numOfcookies : [],
  cookiesShouldPrepare:[],
  cookiesPerHour : function(){
    var total = 0;
    for(var i =0 ;i<this.workHours.length+1;i++){//.......... I added 1 in length to print the TOTAL
      this.numOfcookies.push(Math.round(getRandomCus(this.minCus, this.maxCus)*this.avgCo));//......... the number of cookeies.
      //   console.log(`at ${this.workHours[i]} : ${this.numOfcookies[i]} cookies`);
      this.cookiesShouldPrepare.push(`at ${this.workHours[i]} : ${this.numOfcookies[i]} cookies`);//......... cookies per hour
      total +=this.numOfcookies[i];
      if (i === this.workHours.length-1){this.cookiesShouldPrepare.push(`the total is ${total}`);}//........for the TOTAL number of cookies in the day
    }
    // console.log(`Total : ${total} cookies`);
    function getRandomCus(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
  rendertokyo : function(){
    this.cookiesPerHour();
    var theListArticle = document.createElement('article');//creating article.
    var h2E = document.createElement('h2');//creating h2 to put it in article
    var ulE = document.createElement('ul');//creating unorder list to put it in article

    document.body.appendChild(theListArticle);
    theListArticle.appendChild(h2E);
    h2E.textContent = tokyo.nameLocation;
    theListArticle.appendChild(ulE);


    for(var j=0 ;j<tokyo.numOfcookies.length;j++){
      var liE = document.createElement('li');
      liE.textContent =tokyo.cookiesShouldPrepare[j];
      ulE.appendChild(liE);
    }

  }

};
  // console.log(tokyo.cookiesPerHour());
tokyo.rendertokyo();



var dubai = {
  nameLocation : 'dubai',
  workHours : ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  minCus : 11 ,
  maxCus : 38,
  avgCo : 3.7,
  numOfcookies : [],
  cookiesShouldPrepare:[],
  cookiesPerHour : function(){
    var total = 0;
    for(var i =0 ;i<this.workHours.length+1;i++){//.......... I added 1 in length to print the TOTAL
      this.numOfcookies.push(Math.round(getRandomCus(this.minCus, this.maxCus)*this.avgCo));//......... the number of cookeies.
      //   console.log(`at ${this.workHours[i]} : ${this.numOfcookies[i]} cookies`);
      this.cookiesShouldPrepare.push(`at ${this.workHours[i]} : ${this.numOfcookies[i]} cookies`);//......... cookies per hour
      total +=this.numOfcookies[i];
      if (i === this.workHours.length-1){this.cookiesShouldPrepare.push(`the total is ${total}`);}//........for the TOTAL number of cookies in the day
    }
    // console.log(`Total : ${total} cookies`);
    function getRandomCus(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
  renderdubai : function(){
    this.cookiesPerHour();
    var theListArticle = document.createElement('article');//creating article.
    var h2E = document.createElement('h2');//creating h2 to put it in article
    var ulE = document.createElement('ul');//creating unorder list to put it in article

    document.body.appendChild(theListArticle);
    theListArticle.appendChild(h2E);
    h2E.textContent = dubai.nameLocation;
    theListArticle.appendChild(ulE);


    for(var j=0 ;j<dubai.numOfcookies.length;j++){
      var liE = document.createElement('li');
      liE.textContent =dubai.cookiesShouldPrepare[j];
      ulE.appendChild(liE);
    }

  }

};
  // console.log(dubai.cookiesPerHour());
dubai.renderdubai();



var paris = {
  nameLocation : 'paris',
  workHours : ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  minCus : 23 ,
  maxCus : 65,
  avgCo : 6.3,
  numOfcookies : [],
  cookiesShouldPrepare:[],
  cookiesPerHour : function(){
    var total = 0;
    for(var i =0 ;i<this.workHours.length+1;i++){//.......... I added 1 in length to print the TOTAL
      this.numOfcookies.push(Math.round(getRandomCus(this.minCus, this.maxCus)*this.avgCo));//......... the number of cookeies.
      //   console.log(`at ${this.workHours[i]} : ${this.numOfcookies[i]} cookies`);
      this.cookiesShouldPrepare.push(`at ${this.workHours[i]} : ${this.numOfcookies[i]} cookies`);//......... cookies per hour
      total +=this.numOfcookies[i];
      if (i === this.workHours.length-1){this.cookiesShouldPrepare.push(`the total is ${total}`);}//........for the TOTAL number of cookies in the day
    }
    // console.log(`Total : ${total} cookies`);
    function getRandomCus(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
  renderparis : function(){
    this.cookiesPerHour();
    var theListArticle = document.createElement('article');//creating article.
    var h2E = document.createElement('h2');//creating h2 to put it in article
    var ulE = document.createElement('ul');//creating unorder list to put it in article

    document.body.appendChild(theListArticle);
    theListArticle.appendChild(h2E);
    h2E.textContent = paris.nameLocation;
    theListArticle.appendChild(ulE);


    for(var j=0 ;j<paris.numOfcookies.length;j++){
      var liE = document.createElement('li');
      liE.textContent =paris.cookiesShouldPrepare[j];
      ulE.appendChild(liE);
    }

  }

};
  // console.log(paris.cookiesPerHour());
paris.renderparis();


var lima = {
  nameLocation : 'lima',
  workHours : ['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  minCus : 23 ,
  maxCus : 65,
  avgCo : 6.3,
  numOfcookies : [],
  cookiesShouldPrepare:[],
  cookiesPerHour : function(){
    var total = 0;
    for(var i =0 ;i<this.workHours.length+1;i++){//.......... I added 1 in length to print the TOTAL
      this.numOfcookies.push(Math.round(getRandomCus(this.minCus, this.maxCus)*this.avgCo));//......... the number of cookeies.
      //   console.log(`at ${this.workHours[i]} : ${this.numOfcookies[i]} cookies`);
      this.cookiesShouldPrepare.push(`at ${this.workHours[i]} : ${this.numOfcookies[i]} cookies`);//......... cookies per hour
      total +=this.numOfcookies[i];
      if (i === this.workHours.length-1){this.cookiesShouldPrepare.push(`the total is ${total}`);}//........for the TOTAL number of cookies in the day
    }
    // console.log(`Total : ${total} cookies`);
    function getRandomCus(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
  renderlima : function(){
    this.cookiesPerHour();
    var theListArticle = document.createElement('article');//creating article.
    var h2E = document.createElement('h2');//creating h2 to put it in article
    var ulE = document.createElement('ul');//creating unorder list to put it in article

    document.body.appendChild(theListArticle);
    theListArticle.appendChild(h2E);
    h2E.textContent = lima.nameLocation;
    theListArticle.appendChild(ulE);


    for(var j=0 ;j<lima.numOfcookies.length;j++){
      var liE = document.createElement('li');
      liE.textContent =lima.cookiesShouldPrepare[j];
      ulE.appendChild(liE);
    }

  }

};
  // console.log(lima.cookiesPerHour());
lima.renderlima();

























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

