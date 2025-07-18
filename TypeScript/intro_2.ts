// ************** Lec - 6 ***********************
// Arrays and Union

// const superHeros: []= []   // return type is never here

const superHeros: string[]=[]
const heroPower: number[]=[]

// similar
// const heroPower: Array<number> =[]

type User ={
    name : string;
    isActive : boolean;
}

const allusers : User[] =[]

superHeros.push("spiderman")
heroPower.push(2)

allusers.push({name:"",isActive:true})


// union

let score: number | string = 33
score = 44
score = "55"

type User1 ={
    name : string;
    id: number;
}

type Admin ={
    username : string;
    id: number;
}

let aman : User1 | Admin = {name: "aman", id: 115}

function getDBid(id: number | string){
    console.log(`DB id is: ${id}`)
    if (typeof id === "string"){
        id=id.toLowerCase()
    }
    if (typeof id === "number"){
        id+=2
    }
    console.log(`New DB id is: ${id}`)
}

getDBid(3)
getDBid("45AA")

// union in array
const data: string[] | number[] = [1,2,3,4] 
// still mix-match not allowed ("3" not allowed cause rest all are number)

// but if you do
const data2: (string | number)[] = [1,2,"3",4] // allowed



// very strict allocation in number
let pi:3.14=3.14;
// pi=3.145 // gives error



// ********************** Lec -7 ********************
// Tuples , Enums , interface

// tuples
let T_user: [string,number,boolean] 
T_user=["abc",12,true] // order matters 

// Enums

enum SeatChoice{
    AISLE, // 0 (by default), we can put = any number we want and then +1 will follow for next 
    MIDDLE, // 1 
    WINDOW, // 2
    FOURTH
}

const hcSeat = SeatChoice.AISLE


// Interface 

// interfaces are just like a class (a lose form of class) 


interface User3 {
    email: string,
    userid: number,
    googleid?: string,
    //startTrail: ()=> string
    startTrail(): string,   // good way 
    getCoupon(Couponname:string, value: number):number;
}

interface User3{
    gitToken?: string
}

const aaaaa:User3= {
    email: "test@test",
    userid: 3,
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name:"aman",value: 10)=>{
        return 10;
    }
}


// Interface   vs    Type

// we can write interface again with same name, if we forgot to add something and want to add later

// extends 

interface Admin2 extends User3{
    role: "admin" | "ta" | "learner"
}

const bbbb :Admin2= {
    role:"admin",
    email: "test@test",
    userid: 3,
    startTrail: () => {
        return "trail started";
    },
    getCoupon: (name:"aman",value: 10)=>{
        return 10;
    }
}

export {}