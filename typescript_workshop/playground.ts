// Types

// Javascript spec is es specification

// Primitives

// Primitives have object counterparts, except for null, undefined

// Numeric

const nr: number = 3; // double, float on 64 bits
const bigNr: bigint = BigInt("34232433333333333434234234234"); // int on 128 bits
console.log(nr.toString());

// Strings

const aStr: string = "some_str";
// Here JS does a process named boxSizing
// Automatic transformation from a primitive to its object counterpart
console.log(aStr.length);

// Boolean

const aFlag: boolean = true; // in terms of memory they consume a word, 4 bytes

const planet = {};

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(''));

console.log(Boolean(planet.size));

// Symbol

const aSymbol = Symbol('123');
const bSymbol = Symbol('123');
console.log(aSymbol === bSymbol);


// undefined, null

const undefinedVar = undefined;

// Commonly used for defensive checking.

// Undefined marks the absence of a property / object/ anything else that has not yet been declared.
// Null marks emptyness 

let increment = null;


// Non primitives
// Type Object

// Arrays -> Objects
// Functions -> Objects
// Every other customly defined type.

// PascalCase for classes, enums, everything that is a custom type, 
// camelCase for functions, methods, properties/attributes
// we won't have snake_case
// we won't have kebab-case
// kebab-case is for filenames only (not possible to use it typescript)

enum Size {
    LARGE = 'large',
    MEDIUM = 'medium',
    SMALL = 'small'
}

console.log(Size);


// class Planet {
//     private size: Size = Size.LARGE;
//     private radius: number = 34560;

//     public getCircumference() {
//         return this.radius * Math.PI * 2;
//     }
// }

// const newPlanet = new Planet();
// console.log(newPlanet);


// /////

// function Planet() {
//     this.size = 'large';
//     this.radius = 34560;
// }

// Planet.prototype.getCircumference = function() {
//     return this.radius * Math.PI * 2;
// }

// const newPlanet = new Planet();
// console.log(newPlanet);


// ES6 - JavaScript Specification for es2015
// es2016, es2017...., es2022 (June)
// esNext - every year new JavaScript specification for the language
// es comes from ECMAScript


// Object prototype inheritance

// Planet object will size and radius properties on the instance
// [[Prototype]] - will store getCircumference
// Planet.[[Prototype]] inherits from Object.[[Prototype]]


// String.prototype
// Number.prototype
// Boolean.prototype
// Function.prototype
// Array.prototype 

// All of these inherit Object.[[Prototype]]

interface IPlanetoid {
    size: Size;
    getCircumference: Function;
    radius: number;
}

class Planetoid implements IPlanetoid {
    private size: Size = Size.SMALL;
    private radius: number = 312312;
    public getCircumference() {
        return this.radius * Math.PI * 2;
    }
}

class Planet extends Planetoid {
    private size: Size = Size.LARGE;
    public getOrbit() {
        console.log("new orbit");
    }
}

const newerPlanet = new Planet();

console.log(newerPlanet);

class Sun {
    size: Size = Size.LARGE;
    temperature: number = 1000000000;
}

// Defining types

// Interface defined types
// Class defined types

// type operator defined types
type planetType = Size.LARGE | Size.MEDIUM;


// Literal type
// Intersection Type 
type size = "large" | "medium" | "small"; // Planet | Sun

// Union Type
type union = Planet & Sun;

const someSize: size = "medium";