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


export {}