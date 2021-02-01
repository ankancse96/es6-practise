const ages = [10,15,12,18];
const ages2 = [20,25,22,28];
const ages3 = [30,35,32,38];
//const allAges = ages.concat(ages2).concat([50]).concat(ages3);
const allAges = [...ages, ...ages2, ...ages3]
console.log(allAges);

const neta = 500;
const doctor = 700;
const engineer = 450;
const maximum = Math.max(neta,doctor,engineer);
console.log(maximum);

const takaPoisa = [500,700,450];
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);
