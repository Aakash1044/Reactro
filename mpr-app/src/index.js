var numbers =[3,44,23,4,8,2];
//map
// var newnumbers = [];
// numbers.forEach(function(n){
//   newnumbers.push(n);
// });
// console.log(newnumbers);
//to------
// const newnumbers = numbers.map(function(n){
//   return n;
// });
// console.log(newnumbers);
//to arrow function
// const newnumbers = numbers.map( n=> n);
// console.log(newnumbers);

//filter
// var newnumbers = [];
// numbers.forEach(function(n){
//   if (n<10){
//     newnumbers.push(n)
//   }
// });
// console.log(newnumbers);
//to-----
// const newnumbers = numbers.filter(function(n){
//   return n<10;
// });
// console.log(newnumbers);
//to arrow function
// const newnumbers = numbers.filter( n => n<10);
// console.log(newnumbers);

//Reduce
// var newnumbers = 0;
// numbers.forEach(function(currentnumber){
//   return newnumbers = newnumbers + currentnumber;
// });
// console.log(newnumbers);
//to----
// const newnumbers = numbers.reduce(function(num,currentnumber){
//   console.log("num = " + num);
//   console.log("currentnumber = " + currentnumber);
//   return num + currentnumber;
// });
// console.log(newnumbers);
//to arrow function 
// const newnumbers = numbers.reduce( (num,currentnumber) => num + currentnumber);
// console.log(newnumbers);

//find
// const newnumbers = numbers.find(function(n){
//   return n>10;
// });
// console.log(newnumbers);

//findIndex
// const newnumbers = numbers.findIndex(function(n){
//   return n>10;
// });
// console.log(newnumbers);

//challenge through emoji pedia
// import emojipedia from "../src/emojipedia";

// const newarr = emojipedia.map(function(news){
//   return news.meaning.substring(0,100);
// });

// console.log(newarr);
