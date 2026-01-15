"use strict";
/*
type narrowing
Type narrowing is how TypeScript reduces a broad type (usually a union)
into a more specific type using runtime checks, so you can safely access properties and methods.

unknown is also a type and it is similar to any just provide a value to this variable before using it so it is safer than any
*/
Object.defineProperty(exports, "__esModule", { value: true });
//  ways to do type narrowing
// typeof
function getChai(kind) {
    if (typeof kind === 'string') {
        return `Here is your ${kind} chai`;
    }
    return `chai order number: ${kind}`; // requirement of this separate type is so that is suggest respective methods to both types
}
// equality narrowing
function chai(size) {
    if (size === "small")
        return "small chai...";
    if (size === "medium") // exhausted check for each type
        return "medium chai...";
    return `${size}ml chai...  `;
}
function area(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
    }
}
// instance narrowing
class User {
    login() { }
}
class Admin {
    access() { }
}
function check(u) {
    if (u instanceof User) {
        u.login();
    }
    else {
        u.access();
    }
}
function followingChaiOrderProperty(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function brew(order) {
    if ("spiceLevel" in order) { // another way of narrowing using 'in' keyword
        return `brewing masala chai with spice level ${order.spiceLevel}`;
    }
}
/*
Type narrowing is the result, while a type guard is a technique used to achieve type narrowing.

A type guard is a check or function that tells TypeScript how to narrow a type.
Type guards can be:
typeof
instanceof
in

*/ 
//# sourceMappingURL=typeNarrowing.js.map