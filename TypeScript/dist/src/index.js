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
// Generics
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
// this is generics
function identityTwo(val) {
    return val; // if i give number , it returns number, and so on...
}
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
// in arrow functions
const getMorwSearchProducts = (product) => {
    // do some database operations
    const myIndex1 = 3;
    return product[myIndex1];
};
// Narrowing
function provideId(id) {
    if (!id) {
        console.log("please provide ID");
        return;
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
