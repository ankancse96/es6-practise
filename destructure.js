const person = {name:'ankan',age:10,salary:15,friend:['rudro','rodoy','saikot']};
const {name,salary,age}=person;
console.log(salary,age);

//for array
const friend = ['rana','boni','tiger','cat','rony'];
const[first,next,...rest]= friend;
console.log(first,next,rest);