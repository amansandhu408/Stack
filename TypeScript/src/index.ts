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

