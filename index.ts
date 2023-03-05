//explicit type indication
const sum = (a: number, b: number): number => a + b;
console.log(sum(4, Number('0')));

//implicit type indication
const newDate = new Date();
//TS2339: Property 'toLowerCase' does not exist on type 'Date'.
//newDate.toLowerCase()

//primitive types
let a: number;
a = 1;
//error TS2322: Type 'string' is not assignable to type 'number'.
//a='string';

//object types

//variant 1
const user: { name: string; age: number; isAdmin: boolean } = {
    name: 'bob',
    age: 44,
    isAdmin: false,
}
//variant 2 better then variant 1
//alias for type
type User = {
    name: string;
    age: number;
    isAdmin: boolean
}
const user2: User = {
    name: 'tom',
    age: 33,
    isAdmin: true,
}

//variant 3 by interface
//NB! interface start with letter I
interface IUser {
    name: string;
    age: number;
    isAdmin: boolean;
}

const user3: IUser = {
    name: 'nick',
    age: 46,
    isAdmin: false,
};
console.log(user3);

//arrays
//variant 1
const array1: number[] = [34, 4, 2, 1];
//variant 2
const array2: Array<number> = [4, 5, 6];

const nestedArr: Array<Array<number> | Array<string>> = [[3, 4, 5], ['a', 'g']];

//tuples  |ˈtjuːp(ə)l| === кортеж
// it`s like array readonly
const numericTuple = [1, 4] as const;
//error TS2339: Property 'push' does not exist on type 'readonly [1, 4]'.
//numericTuple.push(3);

//functions

const printMsg = (msg: string): void => console.log(msg);
//return undefined
//void - means that function doesn`t return the value of
console.log(printMsg('hello'));

const printMsg2 = function (msg: string): void {
    console.log(msg);
}

//optional parameters
function printMsg3(msg: string, additionalMsg?: string) {
    console.log(`${msg}${additionalMsg ?? ''}`);
}

printMsg3('hello');

//using interface for function
interface ISumFun {
    (a: number, b: number): number;
}

let sum1: ISumFun;
sum1 = (a, b) => a + b;

// Type '(a: number, b: string) => string' is not assignable to type 'ISumFun'.   Types of parameters 'b' and 'b' are incompatible.     Type 'number' is not assignable to type 'string'.
//sum1=(a,b:string)=>a+b;


//union types