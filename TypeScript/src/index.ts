// class User {
//     email: string;
//     name: string;
//      constructor(email: string, name: string) {
//         this.email=email;
//         this.name=name;
//      }
// }

// const hitesh = new User("a@a.com","hitesh")

/*
class User{

    private _courseeCount =1
    constructor(
        public email: string, 
        public name: string
        ){
    }
    get getAppleEmail():string{
        return `apple ${this.email}`
    }

    get courseCount(): number{
        return this._courseeCount
    }

    // setters dont return void... 
    set courseCount(courseNum){
        if (courseNum<=1){
            throw new Error("invalid")
        }
        this._courseeCount= courseNum;  
    }
}

const hitesh = new User("a@a.com","hitesh")
*/


interface TakePhoto{
    cameraMode: string
    filter: string
    burst: number

}

interface Story{
    createStory(): void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto , Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log("story")
    }
}

// abstract class : in abstract class , no new object can be created from this class
// its the responsibiltty of extended class to create object from this class.

// Generics

const score: Array<number> =[]
const names: Array<string> =[]

function identityOne(val:any ): any{
    return val
}
                                                           // this is generics
function identityTwo<Type>(val:Type):Type{                 // if i give string , it returns string
    return val                                             // if i give number , it returns number, and so on...
}

function getSearchProducts<T>(products: T[]):T{
    // do some database operations
    const myIndex = 3;
    return products[myIndex]
}


// in arrow functions

const getMorwSearchProducts =<T,>(product:T[]): T=>{    //in github , developoers intentionally put , in <T ,> to let everyone know that its Generic 
    // do some database operations
    const myIndex1 = 3
    return product[myIndex1]
}


// Narrowing

function provideId(id :string | null ){
    if (!id){
        console.log("please provide ID")
        return
    }

}

interface User{
    username: string
    useremail: string
}

interface Admin{
    name: string
    email: string
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if ("isAdmin" in account){
        return account.isAdmin
    }
}