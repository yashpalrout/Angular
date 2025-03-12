import { reject, resolve } from "promise";

//normal function
const add = function(a : number, b : number): number {
    return a+b;
};

//arrow function
const addArrow = (a: number, b: number) : number =>{
    return a+b;
}

console.log(add(10,-30));
console.log(addArrow(20,10));

//Arrow function with implicit Return 
const multiply = (a: number, b: number ): number => a*b;
console.log(multiply(10,7));

//Arrow function without paramaters or with single Parameter
const af1 = (): void => console.log("arrow function with no argument");
const af2 = (num : number) : number => num * num ;
console.log(af1());
console.log(af2(10));

//Arrow function in array method
const numbers : number[] = [1,2,3,4,5];
const doubled: number[] = numbers.map(num => num * 2);
const evens: number[] = numbers.filter(num => num%2 ==0);
console.log(doubled);
console.log(evens);

//Arrow function and this context

class Person{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    getNameTraditional(): string{
        return this.name;
    }
    getNameArrow = () =>{
        return this.name;
    };
}
const john = new Person("John");
console.log(john.getNameTraditional());
console.log(john.getNameArrow());

//using arrow function in Promises
function fecthData(url: string): Promise<string> {
    return new Promise(function(reject, response){
        setTimeout(function(){
            resolve(`Data form ${url}`);
        }, 1000);
    });
}

const fetchDataArrow = (url: string): Promise<string> =>{
    return new Promise((resolve, reject) =>{
        setTimeout((): string =>{return `Data from $url`;},2000);
    });
}