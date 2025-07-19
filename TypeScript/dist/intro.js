"use strict";
// FreeCodeCamp - hitesh sir
Object.defineProperty(exports, "__esModule", { value: true });
// Playground site for typescript
// Tyoescript is just a dev tool,a wrapper around JS to make your life easier. 
const user = { name: "aman", age: 10 };
console.log("aman");
//console.log(user.email); // humne email banai hi nahi , isliye pehle hi red ine aa gayi
//"  tsc intro.ts  " karke js file ban jati hai
// *********** LEC 2 ****************
let greetings = "Hello Aman";
//greetings = 6    //this is type safety 
console.log(greetings);
// you can see the red lines in greetings & user to aviod it temporarily  "    use export{}   " at last
// number
let userId = 3344455.5;
// boolean 
let isloggedIn = true;
// ************** Lec 3 ***********
// any : situation where Typescript cannot find out that what value is going to come later on in future, it puts that as "any".
// in these scenario , use : string/number/etc you want
let hero;
function getHero() {
    return "thor";
}
hero = getHero();
function addTwo(num) {
    return num + 2;
}
function addThree(num) {
    //return "hello"
    return num + 3; // now its happy
}
addTwo(5);
addThree(5);
function signupUser(name, email, isSubscribed) { }
// parameter ke aage = dalke default value likh skte hai
signupUser("user 1", "user1@mail", false);
// this is 1st theory , but case like this (union type)
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
// in this case we cant add : string or boolean after small brackets.
// the never type represents value which are never observed. in a return type, this means that the fn throws an exception or terminates execution of the program.
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
// ****************** Lec 4 *****************************
// Objects
// whenever using object use it with functions (usally while working )
//function createUser({name:string, isPaid: boolean}){}
//createUser({name: "aman", isPaid: true})
function createCourse() {
    return { name: "aman", Price: 100 }; // :{} -> return type
} // {} -> defination
// what if you want to add new parameter? writing it straigth away cause error , so make new varaiabke and add
let newUser = { name: "aman", isPaid: true, email: "user2@mail.com" };
function createuser(user) { }
let myUser = {
    _id: "1234",
    name: "aman",
    email: "a@mail.com",
    isActive: true
};
console.log(myUser);
myUser.email = "abc@mail.com";
console.log(myUser);
