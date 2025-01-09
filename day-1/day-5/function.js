//function without parameter
//function demo(){
  //  console.log("function is executing....");
//}
//demo();

//function with parameter and arguments
//5,6
//8,9
//3,4

 //function sum(a,b){
   // console.log(a+b);
 //}
 //sum(2,3)

//function expression
//let x = function(){
  //  console.log("annonyms is not executing but executing with variable")
//}
//console.log(x);
//x();

//IIFE(Immediate invoked function expression)
//(
  //  function(){
    //    console.log("IIFE")
  //  }
// )();
 
//let x =_=>console.log("arrow function");
//x();

// let x =_=>console.log("arrow function");
// x();
// let y = (a,b) => {
//     console.log(a+ b)
// }
// y(2,3);

// let z =_=> console.log("hello")
// z();

//Implict returns and explict returns
// to return expression we use this return function
function test1(a,b){
    console.log("hello print before returns")
    return a+b;
    console.log("hi")
}
console.log(test1(5,5));// important


let x = (a,b)=>{return a*b};
console.log(x(100,200));

let y = (a,b)=>a+b;
console.log(x(500,200));