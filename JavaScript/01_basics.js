//  Chai aur Code




// console.log("Hello bhai")






// *************************** Lec 1 ***************************************

/*const accountId = 1445
let accountemail = "aman@mail.com"
var accountPassword = "12345"
accountCity = "chd"
let accountstate;

console.table([accountId,accountPassword,accountemail, accountCity, accountstate])

// Prefer not to use var because of issue scope and functional scope

*/








// **************************** Lec 2 *************************************

"use strict"; //treat all JS code as newer version

// alert (3+3) // we are usinf nodejs , not browser

/*let age = 18
let isslogged = false
let state = null

console.log(typeof age)
console.log(typeof null) //null
console.log(typeof undefined) //undefined
*/










// ***************************** Lec 3 ************************************

/*let score = "23"
let value = Number(score) 
console.log(typeof value)
console.log(value)

// "33" => 33
// "33ab" => NaN
// true => 1 ; false => 0

let islogged= true
let name = "Aman"
let stt= ""

let val1=Boolean(islogged)
let val2 = Boolean(name)
let val3 = Boolean(stt)

console.log(val1)
console.log(val2)
console.log(val3)*/

// 1 => true ; false => 0
// "" => false
// "aman" => true

// similarly with strings etc.












// ********************** Operations ************************************
//  lec 4

/*
let value=3
let negvalue= -value
console.log(negvalue)
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2/2);
//console.log(2**2);
//console.log(2%3);

let str1="aman"
let str2="preet"
let str3= str1+str2
console.log(str3)

console.log("1"+2);
console.log(1+"2");
console.log("1"+2 +2);
console.log(1+2 +"2");

console.log(+true) //1
console.log(+"")  //0

let gameCounter =100
++gameCounter;
gameCounter++;
console.log(gameCounter); 
*/










// ******************************** lec 5 ***********************************

// while compairing , make sure to check datatypes of the individual operands

/* 
console.log("2">1)

// strict check ===

console.log("2"===2) 
*/


// *************** DATATYPES SUMMARY ***************

//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. 
// Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable 

// TYPES :- 

//  PRIMITIVE (copy wale)
// 7 Types : String , Number , Boolean , null , undefined , Symbol , BigInt

/*
// ******* symbol and BigInt**********
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id=== anotherid)


const bigNumber =3444535244555546n
console.log(typeof bigNumber)
*/


//  REFERENCE (NON - PRIMITIVE)
// array , object , functions
/*
// array ko [] me
const MC =[goku , vegeta , ichigo , luffy , zoro , naruto , shikamaru ]

// object ko {} me 
let myobj={
    name : "naruto",
    attack: "talk-no-jutsu",
}

const myfunc=function(){
    console.log("haan bhai??!!");
}
*/









// ***************************** Lec 6 **************************

// stack (primitive : ' copy hogi ') and heap (non - primitive : ' reference wale ') memory

// strings
/*
const name = "aman"
const repoCount = 50

//console.log(name + repoCount + ' value'); // not recommanded

// use back tickes 

console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gname= new String('sandhu')
console.log(gname.__proto__);
console.log(gname.length);
console.log(gname.toUpperCase);
console.log(gname.charAt(3));
console.log(gname.indexOf('u'))
console.log(gname.indexOf('r')) //-1 aayega

const newstring = gname.substring(0,2) //2nd index value is not included
console.log(newstring)
const otherstring = gname.slice(-8,4)
console.log(otherstring)
const anotherstring = "   hermit    "
console.log(anotherstring.trim)

// similarly .replace  will replace old substring into desired one
console.log (gname.replace('n','m'))
console.log(gname)
console.log(gname.includes('sandhu')) //true dega m permanent replace nahi hua

const gname1= new String('sandhu-saab-dot-com')
console.log(gname1.split('-'))
*/








// ********************************** Lec 7 *********************************************

// NUMBERS 


/*
// we use toFixed(n) for decimal upto n places
const balance = new Number(1000)
console.log(balance.toFixed(2))

const otherbalance = 345.55554633
console.log(otherbalance.toPrecision(4)) //345.6
console.log(otherbalance.toPrecision(3)) //346
console.log(otherbalance.toPrecision(2)) //3.5e+2


// agar 0's jyada ho ek value me or read karna difficult ho , use .toLocalString()
const hundred= 10000000
console.log(hundred.toLocaleString()) // US standard
console.log(hundred.toLocaleString('en-IN')) // for indian values
*/




// MATHS

/*
console.log(Math)
console.log(Math.abs(-57)) // 57
console.log(Math.round(4.5)) // 5
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.9))  // 4

console.log(Math.min(4,90,34,1,378)) 
console.log(Math.max(4,90,34,1,378)) 

// random
console.log(Math.random()) // range 0-1
console.log((Math.random()*10)+1) // range 0-10 ()

const min =10 
const max = 20 
console.log(Math.floor(Math.random()*(max-min+1))+min)  // for range max-min (perfect numbers)
*/



// date

/*
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate);

let mycreateddate= new Date(2025,3,5)
console.log(mycreateddate)
console.log(mycreateddate.toLocaleString())

let mycreateddate2= new Date("01-08-25")
console.log(mycreateddate2.toLocaleString())
*/

// time

/*
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycreateddate.getTime())

let newdate = new Date()
console.log(newdate.getMonth()+1)

// `${newdate.getMonth()+1} and the blah blah blah`

console.log(newdate.toLocaleString('default',{weekday:"narrow"}))
*/

