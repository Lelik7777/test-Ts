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
//for primitives
let string: string | null | boolean | { a: string };
string = 'hello';
string = false;
string = null;
string = {a: 'hello'};
// error TS2322: Type '6' is not assignable to type 'string | boolean | null'.
//string=6;

//for functions
const transformFun = (value: string | number) => {
    if (typeof value === 'string') {
        return `String is ${value}`;
    }
    if (typeof value === 'number') {
        return value ** 2;
    }
}
console.log(transformFun('hello'));
console.log(transformFun(4));


//type aliases

type NumberOrBoolean = number | boolean;
let myValue: NumberOrBoolean;
myValue = 44;
myValue = false;

//type crossing  &  - union different types
type A = {
    propA: string;
}
type B = {
    propB: number;
}

type C = A & B;
const myObj: C = {
    propA: 'hello',
    propB: 4,
}

//literal types - check on literals
type OnOff = 0 | 1;
const checkDeviceState = (signal: OnOff): string => {
    // if (signal === 1) return 'Device is enable';
    // else return 'device is not enable';
    return (signal === 1) ? 'device is enable' : 'device is not enable';
}
console.log(checkDeviceState(0));
console.log(checkDeviceState(1));
//error TS2345: Argument of type '4' is not assignable to parameter of type '0 | 1'.
//console.log(checkDeviceState(4));

//enums  - are used instead  magic numbers
//enums can get numbers or strings
//enum by default
enum DeviceStates {
    ENABlED,
    DISABLED,
    BROKEN
}

//example destructuring  of enum
const {ENABlED, DISABLED, BROKEN} = DeviceStates;
console.log(DeviceStates.ENABlED);
console.log(DeviceStates.DISABLED);
console.log(DeviceStates.BROKEN);

//castom enums
enum CustomEnum {
    NAME = 'bob',
    AGE = 44,
    HOME = 0,
    HOME2,
    HOME3
}

const {AGE, NAME, HOME, HOME2, HOME3} = CustomEnum;
console.log(AGE, NAME, HOME, HOME2, HOME3);

//interfaces

interface IUserNew {
    login: string;
    password: string;
}

interface IAdminRights {
    editArticles: boolean;
    deleteArticles: boolean;
    banUsers: boolean;
}

interface IHuman {
    homo: boolean,
}

// interface IAdmin is extensible by interface IUserNew and interface IHuman  - extend multiple interfaces
interface IAdmin extends IUserNew, IHuman {
    permissions: IAdminRights;
}

const admin: IAdmin = {
    login: 'login',
    password: '123',
    permissions: {
        editArticles: true,
        deleteArticles: true,
        banUsers: true,
    },
    homo: true,
}

//interfaced in types intersection
interface IAged {
    age: number;
}

interface INamed {
    name: string;
}

type PersonNew = IAged & INamed;
const personNew: PersonNew = {
    name: 'bob',
    age: 22,
}

//interfaces can have readonly properties
interface IUserSecret {
    name: string;
    readonly secret: string;

}

const userSecret: IUserSecret = {
    name: 'alex',
    secret: 'cannot be changed',
}
userSecret.name = 'tom';
// error TS2540: Cannot assign to 'secret' because it is a read-only property.
//userSecret.secret='change'

//interface: optional properties
interface IUserOptional {
    name: string;
    age?: number;
}

const userOptional: IUserOptional = {
    name: 'tom',
}

//interfaces: index signatures(array)
interface INumericArray {
    [index: number]: number;
}

const numericArr: INumericArray = [1, 3, 4];
//index.ts:257:38 - error TS2322: Type 'string' is not assignable to type 'number'.
//const numericArr2:INumericArray=['a','b']

//index signatures(object)
interface IDictionary {
    [key: string]: string;

    pages: string;
}

const dictionary: IDictionary = {
    'table': 'стол',
    'people': 'люди',
    pages: '1',
}


//type assertion
//angle brackets syntax

// <div id='my-div>content</div>
//     <script scr='./app.js></script>
//app.ts
//const myDiv = <HTMLElement>document.getElementById('my-div');
//or may write so
//const myDiv =document.getElementById('my-div') as HTMLElement;

// non null assertion syntax -if we are sure it is not null or undefined then use !
//const myDiv =document.getElementById('my-div')!;