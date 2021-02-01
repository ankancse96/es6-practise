// function doubleIt (num){
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

// const doubleIt = function doubleIt(num){
//     return num*2;
// }
// const result = doubleIt(5);
// console.log(result);
 const doubleIt = num => num*2 ;
 const addIt = (num1,num2) => num1 + num2 ;
 const giveVale = () => 5;
 const doMath = (x,y) => {
     const add = x + y;
     const diff = x-y ;
     const math = add * diff ;
     return math; 
 }
 const result = doubleIt(5);
 console.log(result);
 const result1 = addIt(20,10);
 console.log(result1);
 const result2 = giveVale();
 console.log(result2);
 const result3 = doMath (7,5);
 console.log(result3);