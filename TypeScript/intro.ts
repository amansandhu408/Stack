// FreeCodeCamp - hitesh sir

// Playground site for typescript




// Tyoescript is just a dev tool,a wrapper around JS to make your life easier. 

const user = {name: "aman" , age: 10}

console.log("aman");
//console.log(user.email); // humne email banai hi nahi , isliye pehle hi red ine aa gayi

//"  tsc intro.ts  " karke js file ban jati hai


// *********** LEC 2 ****************

let greetings: string = "Hello Aman";

//greetings = 6    //this is type safety 
console.log(greetings);

// you can see the red lines in greetings & user to aviod it temporarily  "    use export{}   " at last


// number
let userId: number = 3344455.5;

// boolean 
let isloggedIn: boolean = true;



// ************** Lec 3 ***********

// any : situation where Typescript cannot find out that what value is going to come later on in future, it puts that as "any".

// in these scenario , use : string/number/etc you want

let hero: string;
function getHero(){
    return "thor";
}
hero = getHero()



function addTwo(num: number){
    return num+2
}



function addThree(num: number):number{ //agar humne : number nahi diya hota to hello wala error nahi show hota.
    //return "hello"
    return num +3 // now its happy
}


addTwo(5)
addThree(5)
function signupUser(name:string,email:string,isSubscribed:boolean){}
// parameter ke aage = dalke default value likh skte hai
signupUser("user 1","user1@mail",false);

// this is 1st theory , but case like this (union type)

function getValue(myVal:number){
    if (myVal > 5){
        return true
    }
    return "200 OK"
}
// in this case we cant add : string or boolean after small brackets.
// the never type represents value which are never observed. in a return type, this means that the fn throws an exception or terminates execution of the program.
function consoleError(errmsg:string):void{
    console.log(errmsg)
}
function handleError(errmsg: string):never{
    throw new Error(errmsg);
    
}


// ****************** Lec 4 *****************************

// Objects

// whenever using object use it with functions (usally while working )
function createUser({name:string, isPaid: boolean}){}
createUser({name: "aman", isPaid: true})

function createCourse():{name:string, Price: number}{     // () -> function where parameter pass
    return {name: "aman", Price:100}                      // :{} -> return type
}                                                         // {} -> defination

// what if you want to add new parameter? writing it straigth away cause error , so make new varaiabke and add
let newUser ={name: "aman", isPaid: true, email:"user2@mail.com"}
createUser(newUser)







// *************** Lec-5 **********************
// Type Aliases , readonly & optional 

type User={
    readonly _id : string;   // readonly used
    name : string;
    email : string;
    isActive: boolean;
    credcard ?: number;  // optional used 
}

function createuser(user: User){}

let myUser: User ={
    _id: "1234",
    name: "aman",
    email: "a@mail.com",
    isActive: true
}

console.log(myUser)

myUser.email="abc@mail.com"

console.log(myUser)
// let say we are using MongoDB to save this user into database, so you want that nobody should actually be able 
// to touch _id which is common thing in MongoDB. at the time of creation MongoDB will create that and you don't want 
// anyone to manipulate it. so use "    readonly   "

// and when you want to something from user which is optional, like creditcard details,etc. use "   ?   " before : number/string/boolean

 

export {}