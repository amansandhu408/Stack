"use strict";
// class User {
//     email: string;
//     name: string;
//      constructor(email: string, name: string) {
//         this.email=email;
//         this.name=name;
//      }
// }
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("story");
    }
}


// abstract class : in abstract class , no new object can be created from this class
// its the responsibiltty of extended class to create object from this class.
