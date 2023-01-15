/*
Example #1 - from Pho
----------------------
var emdict= {
  'pho@gmail.com':'WhatsApp',
  'bennyl@gmail.com': 'WhatsApp',
  'alex@gmail.com': 'WhatsApp',
  'matt@gmail.com': 'WhatsApp',
}
var emlist = ['bennyl@gmail.com','alex@gmail.com', 'WhatsApp','matt@gmail.com','pho@gmail.com'];

var emdictKeys = Object.keys(emdict);

for (var [k,v] of Object.entries(emdict)){
  console.log('k,v as variables :', k,v);
  console.log('\n------------\n');
  console.log( 'keys k:',k, 'values: ',emdict[k]);

}

console.log('\n------------\n');

console.log('keys of dictionary: ',emdictKeys);
console.log('list of emails: ', emlist);

console.log('\n------------\n');

console.log(emdictKeys.includes('pho@gmail.com'));
console.log(emlist.includes('pho@gmail.com'));

console.log('\n------------\n');
console.log(emlist.indexOf('pho@gmail.com'));
console.log('\n------------\n');


Example #2 - TRying to reproduce values
----------------------
*/
var allusers = [
    {__typename: 'Users', _id: '63b78aec08da5cc49e19dddd', email: 'pho@gmail.com', password: 'WhatsApp_Pho'},
    {__typename: 'Users', _id: '63b78b2a5da8e9626bb178ca', email: 'bennyl@gmail.com', password: 'WhatsApp_Benny'},
    {__typename: 'Users', _id: '63b78b33226ec6d7d58c005c', email: 'alex@gmail.com', password: 'WhatsApp_Alex'},
    {__typename: 'Users', _id: '63b78b386d2d630802a6dec3', email: 'matt@gmail.com', password: 'WhatsApp_Matt'}   
]

console.log(allusers)

console.log("------")
let obj1 = allusers.find(o => o.email === 'string 2');

console.log("Type of obj1", typeof(obj1))

if (typeof(obj1) === 'object') {
  if (obj1.length === 0) {
    console.log("string 2 was not found!")
    } else {
        console.log(obj1);
    }
} else {
    console.log("string 2 was not found!")
}

console.log("======")

let obj2 = allusers.find(o => o.email === 'pho@gmail.com');
console.log("Type of obj2", typeof(obj2))
console.log("Password for  'pho@gmail.com'  is:", obj2.password);

/*
Example #3    WORKS!!!
let arr = [
    { name:"string 1", value:"this 1", other: "that 1" },
    { name:"string 2", value:"this 2", other: "that 2" },
    { name:"string 3", value:"this 3", other: "that 3" },
    { name:"string 4", value:"this 4", other: "that 4" }
];

let obj = arr.find(o => o.name === 'string 2');

console.log(obj);
*/