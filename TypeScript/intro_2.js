"use strict";
// ************** Lec - 6 ***********************
// Arrays and Union
Object.defineProperty(exports, "__esModule", { value: true });
// const superHeros: []= []   // return type is never here
var superHeros = [];
var heroPower = [];
var allusers = [];
superHeros.push("spiderman");
heroPower.push(2);
allusers.push({ name: "", isActive: true });
// union
var score = 33;
score = 44;
score = "55";
var aman = { name: "aman", id: 115 };
function getDBid(id) {
    console.log("DB id is: ".concat(id));
    if (typeof id === "string") {
        id = id.toLowerCase();
    }
    if (typeof id === "number") {
        id += 2;
    }
    console.log("New DB id is: ".concat(id));
}
getDBid(3);
getDBid("45AA");
// union in array
var data = [1, 2, 3, 4];
// still mix-match not allowed ("3" not allowed cause rest all are number)
// but if you do
var data2 = [1, 2, "3", 4]; // allowed
// very strict allocation in number
var pi = 3.14;
// pi=3.145 // gives error
// ********************** Lec -7 ********************
// Tuples , Enums , interface
// tuples
var T_user;
T_user = ["abc", 12, true]; // order matters 
// Enums
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 3] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
var aaaaa = {
    email: "test@test",
    userid: 3,
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, value) {
        return 10;
    }
};
var bbbb = {
    role: "admin",
    email: "test@test",
    userid: 3,
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, value) {
        return 10;
    }
};
