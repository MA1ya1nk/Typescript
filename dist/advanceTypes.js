"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type assertion
let response = "42";
let numericLength = response.length; // by this we forecfully tell ts that response is string it usually happen when we fetch data from api
let bookString = '{"name":"The Great Gatsby"}';
let bookObject = JSON.parse(bookString); // we forcefully tell ts that the parsed object is of type Book
// any and unknown
let data;
data = true;
data = "chai";
data = 25;
data.toUpperCase(); // no error because it is any type
let val;
val = true;
val = "chai";
val = 25;
// val.toUpperCase() // Error: Object is of type 'unknown'. we cant access any property or method directly on unknown type without checking its type first
if (typeof val === 'string') {
    val.toUpperCase(); // no error after type narrowing
}
// try catch
try {
}
catch (error) {
    console.log(error.message); // we have to use any type here because error can be of any type
    // but if .message is not present in error object it will give runtime error
    // so we again do type narrowing
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message); // no error because we have narrowed the type to Error
    }
}
function redirect(role) {
    if (role === "admin") {
        console.log("Redirect to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirect to user dashboard");
        return;
    }
    role; // at this point role is of never type because all possible values are exhausted
    // but if you add another role like "guest" in Role type then it will give error here because role can be "guest" at this point
}
//# sourceMappingURL=advanceTypes.js.map