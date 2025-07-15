//  Chai aur Code



// arrays

/*
const myArr = [0,1,2,4,,true , "aman"] 

console.log(myArr[3])
console.log(myArr)

// array-copy operation creates SHALLOW COPY 
// SHALLOW COPY of an object is a copy whose properties share the same referencec.
// DEEP COPY don't share the same reference.

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2)

// arrays methods

myArr2.push(6)
myArr2.push(8)
console.log(myArr2) // [1,2,3,4,5,6,8]
myArr2.pop()
console.log(myArr2) // [1,2,3,4,5,6]

myArr2.shift() 
console.log(myArr2) // [2,3,4,5,6]

myArr2.unshift(19)
console.log(myArr2) // [19,2,3,4,5,6]


console.log(myArr2.includes(9)) // false
console.log(myArr2.indexOf(1))  // -1 (not found)

const newArray = myArr2.join() // string kardega join ke baad
console.log(myArr2)  
console.log(newArray)
console.log( typeof newArray) // strings


// slice , splice

console.log(" A (original array) " , myArr2)

const myn1 = myArr2.slice(1,3)
console.log(myn1 , "output slicing ")

console.log("B (original array) " , myArr2)

const myn2= myArr2.splice(1,3)
console.log(myn2 , "output splicing")

console.log("C (original array) " , myArr2)
*/

// arrays 2

/*
const marvel_heros =["thor" , "tron man " , "spider man"]
const dc_heros = ["superman ", "batman", "flash"]

marvel_heros.push(dc_heros)
console.log(marvel_heros) // array me array aayegi

const all_heros = marvel_heros.concat(dc_heros) // do arrays ko jodega 
console.log(all_heros)  // not used often


// using spread
const allnew_heros = [...marvel_heros, ...dc_heros] //used ofter
console.log(allnew_heros)

const another_array = [1,2,3,4,[5,6,7,[8,9 ]]] // if this senerio came , use 
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("aman"))
console.log(Array.from("aman")) // array bna dega

console.log(Array.from({name: "aman"})) // object ko empty [] dega unless key ya fir value nhi btaoge

let score1 = 100
let score2 = 300
let score3 = 200
comnsole.log(Array.of(score1,score2,score3)) // from ki jagah of use kiya
*/





// ********************* Objects *******************************************

// singleton

// jab hum  literals ki tarah declare karte hai tab singleton nahi banega
// construcor se karoge to singleton bnaega

// object literals
//Object.create()

/*
const mysym = Symbol("key")
const mysym2 = Symbol("key2")

const Jsuser = {
    name : "aman",
    Age : 19,
    mysym2: "mykey2",
    [mysym]:"mykey1",  // to use symbol as symbol add [] to it in object. otherwise it will take it as string.
    "full name": "aman preet singh", 
    email: "aman@mail.com"
}

console.log(Jsuser.Age) // jyadatar . se karte hai but kahi cases me [] use karna padta hai
console.log(Jsuser["name"])
console.log("full name")
console.log(Jsuser.mysym)
console.log( typeof Jsuser[mysym]) // if we use . here output will be undefined , else output will be string.
console.log(Jsuser.mysym2)
console.log( typeof Jsuser.mysym2)

// freeze : agar lock karna ho. taaki koi or change na kar paaye
Jsuser.email="sandhu@mail.com"
//Object.freeze(Jsuser)
Jsuser.email="hermit@mail.com"

console.log(Jsuser["email"])

Jsuser.greeting = function(){
    console.log(`hello, ${this.name}`);
}

console.log(Jsuser.greeting()) //.greeting() output  hello, aman \n underfined , .greeting output [Function (anonymous)]
*/

///const tinderUser = new Object() // singleton object 
/*
const tindrUser ={} // non singleton object 

tindrUser.id = "231002"
tindrUser.name = "jatin "
tindrUser.mail= "j@mail.com"

const regularUser ={
    email: "jatin@mail.com",
    fullname:{
        username:{
            firstname : "jatin",
            lastname : "prashar"

        }
    }
}

console.log(regularUser.fullname?.firstname); // ? will check if it exist or not (used in case of APIs)

const obj1 ={ 1: "a", 2:"b"}
const obj2 = {3: "c" , 4: "d"}

//const obj3 = {obj1,obj2} // object me object

const obj3 = Object.assign(obj1 , obj2)
const ob3 = Object.assign({},obj1,obj2) // its an optional parameter but dena achha hota hai
// because its give guaranteed result
// here {} is target and rest obj are source 

// but again we will use spread here
const object3 = {...obj1,...obj2}

// jab bhi database se values aayegi , array of object aayega

const users=[{
    id:1,
    email: "h@mail.com"
},
{
    id:1,
    email: "h@mail.com"
},
{
    id:1,
    email: "h@mail.com"
},
{
    id:1,
    email: "h@mail.com"
}]

///users.map(); //for loops

console.log(Object.keys(tindrUser)); // type array return hoga 
console.log(Object.values(tindrUser));
console.log(Object.entries(tindrUser));

// haveownproperty
console.log(tindrUser.hasOwnProperty('email')); // false coz mail hai not email

// maan lo humko tindruser me mail jyada use karna hai
// then we have to console.log tindruser.mail everytime
// so we use here destructure

const {mail: m} = tindrUser
console.log(m)
*/
/*
//JSON

{
    "Student":"aman preet singh",
    "sid": "23103115",
    "batch-branch": "2027 CSE"
}*/

// functions 
/*
function Add2num(num1 , num2){
    console.log(num1+num2);
}

function Add2num2(num1 , num2){
    let result = (num1+num2);
    return result 
    // return ke baad kuch execute nhi hoga

}
Add2num(3,1)
Add2num(3,"1")
// checking nhi hoti 

const result = Add2num(3,7)
console.log("Result :" ,result) // result underfined hoga becoz humne return nhi karaya
const result2 = Add2num2(3,7)
console.log("Result :" ,result2)


function justlogggedin(username){
    return `${username} just logged in`
}

console.log(justlogggedin()) // agar empty diya to undefined aayega na ki null

function calculateCartPrice(...num5){ // yaha ... spread nhi rest operator hai
    return num5
}
console.log(calculateCartPrice(200,3000,4000,5)) // array me chali jayegi ... ki wajah se
// if we write val1 , val2 , ...num5 as argument toh val1=200 , val2=300 , num5 =[4000,5] hoti

//  object ko function me kaise pass kare ???
const user ={
    username : "hermit ",
    price : 1000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

// similarly , array ko function me kaise pass kare ???

const newarray = [20,3,40,45,78]

function returnarray2ndvalue(getarray){
    return getarray[1]
}
console.log(returnarray2ndvalue(newarray))
*/

// agar hum function call ko pehle declare (normal funtion ) karenge to kuch nhi hoga 
// ( but agar function ko kisi variable me dala ) aur fir declare kara pehle us se fir 
// error aayega. note: function hamesha baad me karo





// this and arrow functions 

// immediately invoked function expression (IIFE)
//  jo immediately call ho jaye , 
// reason (in interviews ) : global scope se polllution se problem hoti hai , uske global scope ke problem ko hatane ke liye humne ye use kiya 


// javascript execution context

/* 
javascript ek single threaded hai,

EC's:
1) global EC
2) function EC
3) eval EC

2 phases me run hota hai 
1) memory creation phase : main kaam memory allocate hoti hai
2) execution phase : 

*/

// control flow

// nullish coalescing operator (??) : null undefined

// for loops 
// while , do while loops 

// array specific loops





// for of
/*const arr =[11,22,33,44,55]

for (const i of arr) {
    console.log(i);
}

// maps 
const map = new Map()
map.set('IN',"india")
map.set('USA',"United States of America")
map.set('UK',"United Kingdoms")

console.log(map)

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,":-",value)
}

// forof loops object pe nhi chalte
// uske liye forin loops use karo

const myobj ={
    'game1':'NFS',
    'game2':'GTA'
}

for (const key in myobj) {
    console.log(key); // game1 \n game2 hi aayega
}

for (const key in myobj) {
    console.log(myobj[key]); // NFS \n GTA aayega
}

// agar hum forin loops arrays me direct use karenge keys leke to array ki key 0 1 2 3 4 
// aise values aayenge , agar hum arr[keys] likhnge to hi actual value aayegi
// maps are not iterable in forin loops

//foreach
arr.forEach(function (item){
    console.log(item)
}) // callback function hai therefore name nhi hoga function ka...

// using arrow function
arr.forEach((item , index , array)=>{
    console.log(item, index , array) 
    // foreach ke pass item ke sath sath index or array bhi hota hai i.e why its usefull
})


// otherwise function bna ke uska reference dedo bss
function printme(item){
    console.log(item)
}
arr.forEach(printme) // agar () ye lgaya to error aayega
*/



// DOM Manipulation

// console pe jaake
// document.getElementById()
// document.getElementById().className
// document.getElementById().id
//  document.getElementById().getAttribute('id')  attribute dena zarurui
// setAttribute bhi hoga 

// element banane ke liye
//script me jaake const div=document.createElement('div')

// Events
// addEventListener()

// XMLHttpRequest 
// HTML me script tag me jaake
/*const requestURL='https://youtube.com'
const xhr = new XMLHttpRequest();
xhr.open('GET',requestURL)
xhr.send(); // call karne ke liye
console.log(xhr.readyState) // but ye 1 ke baad track nahi karegi
console.log(xhr.onreadystatechange) // baad ke liye*/

// JSON.parse() // Json me convert karne ke liye


/*
// Promise
// promise creation 
const promiseone = new Promise(function(resolve, reject){
    // do an async task
    setTimeout( () => {
        console.log("Async task is complete")
    }, 1000);
})
// promise consumption
promiseone.then(function(){
    console.log("Promise consumed")
})

// error aaya toh .catch(function())
// .finally(function()) ye x time pe hoga hi hoga, ki ab promise finally end hogi

// async await
async function consumePromiseFive() {
    const response = await promiseone // agar reject hua to error aayega
    // or 
    try{
        const response = await promiseone
    } catch(error){
        console.log(error) // thoda acha syntax hai error handling la
    }
}

// fetch
fetch('https://youtube.com')
.then((response)=>{
    return response.json()
}).then((data)=> console.log(data))
.catch((error)=> console.log(error)) 
*/


// OOPs

/* JavaScript and classes
JavaScript is primarily a PROTOTYPE-BASED LANGUAGE , and its classes are primarily 
SYNTACTIC SUGAR OVER EXISTING PROTOTYPE -BASED INHERITANCE MECHANISMS.
*/


//------------------------------------------------------------------------------------------------------------------------------------------

// SHERIYAN CODING SCHOOL

// agar humko purane array use karke new array banana hai aur usme same no of elements hone chahiye? 
// then use map.

/*const names=["aman", "armaan","aadi"];
let newarr = names.map(function(value){
    return value;
})*/

// agar humko purane array use karke new array banana hai aur usme same ya kamm no of elements ho.
// then use filter

/*const names=["aman", "armaan","aadi"];
let newarr = names.filter(function(value){
    if (value.startsWith('aa')){
        return value;
    }
})*/

// destructuring
// maan lo koi object hai uske ander field ke ander ek koi field hai. { User (object) -> Address -> Zipcode (address ke ander)}

// don't write user.address.zipcode  , write 
// let {zipcode} = user.address
// console.log(zipcode)

// spread (...) & rest
/*
// remember 
const names =["john","aman","sam"];
//const copyname =names; //refer hoga naa ki copy
const copyname =[...names];*/