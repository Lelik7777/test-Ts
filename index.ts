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


//classes

class Person {
    name: string;
    age: number | null;

    constructor(name = 'anonymous', age: number | null = null) {
        this.name = name;
        this.age = age;
    }

    sayHi(): void {
        console.log(`hi, ${this.name}`);
    }
}

const person = new Person();
//person.name = 'tom'
//person.age = 23;
console.log(person);
person.sayHi();

const person2 = new Person('bob', 44);
console.log(person2);

//classes and interfaces
//interface dictates which fields and methods must be mandatory for the class in which the interface is implemented
//also we can add another fields and methods in class  yet
interface IPersonForClass {
    name: string;
    age: number | null;
    sayHi: () => void;
}

class Person2 implements IPersonForClass {
    name: string;
    age: number | null;
    human: boolean;

    constructor(name = 'tommy', age = null, human = true) {
        this.name = name;
        this.age = age;
        this.human = human;
    }

    sayHi() {
        console.log(`hi, ${this.name}`);
    }

// strangely it works!!!!!!
    sayHiArrow = (): void => {
        console.log(`hi,${this.name}`);
    }
}

const person3 = new Person2();
console.log(person3);
person3.sayHiArrow();//hi,tommy

//abstract classes
abstract class AbstractGreeting {
    abstract sayHi(): void;
}

class MyGreeting extends AbstractGreeting {
    sayHi() {
        console.log('hi');
    }
}

//Property 'sayHi' in type 'MyGreeting2' is not assignable to the same property in base type 'AbstractGreeting'.   Type '(msg: any) => void' is not assignable to type '() => void'.
// class MyGreeting2 extends AbstractGreeting{
//     sayHi(msg) {
//         console.log(msg);
//     }
// }

//class members visibility : public, protected(available in the child classes),private(only in current class)
//in child classes can override protected to public
//all these visibility modifiers exist only in ts and in js do not work

//generics

function identity<T>(value: T): T {
    return value;
}

//generic interface
//example of polymorphism
interface IMyStorage<T> {
    value: T[];
    getValue: () => T[];
}

const numericStorage: IMyStorage<number> = {
    value: [],
    getValue() {
        return this.value;
    }
}
const booleanStorage: IMyStorage<boolean> = {
    value: [],
    getValue() {
        return this.value;
    }
}

//generic class
class IdentifyClass<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getIdentify(): T {
        return this.value;
    }
}

const numericIdentify: IdentifyClass<number> = new IdentifyClass(5);
const stringIdentify: IdentifyClass<string> = new IdentifyClass('hello');

//type manipulations

//keyof  is used to extract the key type from an object type
type Rectangle = {
    width: number;
    height: number;
    type: string;
}
const myRectangle: Rectangle = {
    width: 10,
    height: 10,
    type: 'box',
}
const getValueFromRectProp = (prop: keyof Rectangle, rectangle: Rectangle) => rectangle[prop];
console.log(getValueFromRectProp('width', myRectangle));
console.log(getValueFromRectProp('type', myRectangle));

//typeof
function abc() {
    return {
        a: 10,
        b: 'hello',
    }
}

type ABC = ReturnType<typeof abc>
const abc2: typeof abc = () => {
    return {
        a: 2,
        b: 'world',
    }
}

//indexed access types - using some types as index of array
type PersonAny = {
    name: string;
    age: number;
}
type Age = PersonAny['age'];
const ageAny: Age = 34;

//conditional types
interface Animal {
    live(): void;
}

interface Dog extends Animal {
    woof(): void;
}

type Type1 = Dog extends Animal ? number : string;
const value: Type1 = 33;

//mapped types
type StrNum = {
    [key: string]: number | string;
}
const obj22: StrNum = {
    hello: 'hello',
    test: 123,
    //Type 'boolean' is not assignable to type 'string | number'.
    // isTrue:false,
}

//mapped types with literals
type Direction = 'up' | 'down' | 'left' | 'right';

type DirectionObj = {
    [key in Direction]: boolean;
}
const directionUsed: DirectionObj = {
    left: true,
    right: false,
    up: true,
    down: false,
}

//utility types

//partial <type> - optional properties - analog ? - we may not use character ? when declare properties
interface IHome {
    life: boolean;
    head: boolean;
}

const human1: Partial<IHome> = {}
//required <type> antagonist partial
const human2: Required<IHome> = {
    life: true,
    head: true,
}

//readonly <type> we can not change values of object
const human3: Readonly<IHome> = {
    life: true,
    head: true,
}
//TS2540: Cannot assign to 'life' because it is a read-only property.
//human3.life=false;

//record <keys,type> first argument ==type of keys and second argument === type of values
interface IPointData {
    a: number;
    b: number;
}

type PointNames = 'firstPoint' | 'secondPoint';
const point1: { [key in PointNames]: IPointData } = {
    firstPoint: {
        a: 1,
        b: 2,
    },
    secondPoint: {
        a: 3,
        b: 4,
    }
}
//the same only using Record: type for keys and type for values
const point: Record<PointNames, IPointData> = {
    firstPoint: {
        a: 1,
        b: 2,
    },
    secondPoint: {
        a: 3,
        b: 4,
    }
}

//pick <type,keys> - take from the type only what we need
interface ITodo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<ITodo, 'title' | 'completed'>;
const todo: TodoPreview = {
    title: 'world',
    completed: true,
}

//omit <type,keys> antagonist  of pick
const todo2: Omit<ITodo, 'title'> = {
    completed: true,
    description: 'programming language',
}

//exclude <type,exceptions> similar to omit
type DirectionsNew = 'up' | 'down' | 'left' | 'right';
type DirectionsWithoutLateral = Exclude<DirectionsNew, 'left' | 'right'>;
const direct1: DirectionsWithoutLateral = 'up';
//TS2322: Type '"left"' is not assignable to type 'DirectionsWithoutLateral'.
//const direct2:DirectionsWithoutLateral='left';

//extract <type,union> antagonist of exclude
type LateralDirections = Extract<DirectionsNew, 'right' | 'left'>
const direct3: LateralDirections = 'left';
//TS2322: Type '"up"' is not assignable to type 'LateralDirections'.
//const direct:LateralDirections='up';

//nonnullable<type>
type SomeType = string | null | undefined;
//in this type exclude null and undefined and remain only string
type WithoutNullable = NonNullable<SomeType>;
const valueSome: WithoutNullable = 'hello';
//error TS2322: Type 'null' is not assignable to type 'string'.
//const valueSome2:WithoutNullable=null;

//parameters <type>
const sumNew = (a: number, b: number): number => a + b;
// get tuple with two elements contains numbers
type SumParameters = Parameters<typeof sumNew>
const aa: SumParameters = [3, 4];

//constructor parameters <type>

//returntype <type>
const transformToObj = (a: number, b: number): { a: number, b: number } => {
    return {a, b};
}
type Transformed = ReturnType<typeof transformToObj>;
const objTrans: Transformed = {
    a: 5,
    b: 4,
}

//instancetype<type>
class MyClass {
    name: string;
    job: string;
    age: number;

    constructor(name: string, job: string, age: number) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
}

type MyClassAgain = InstanceType<typeof MyClass>
const objFromMyClass: MyClassAgain = {
    name: 'bob',
    job: 'programmer',
    age: 23,
}