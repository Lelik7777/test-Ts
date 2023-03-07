var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//explicit type indication
var sum = function (a, b) { return a + b; };
console.log(sum(4, Number('0')));
//implicit type indication
var newDate = new Date();
//TS2339: Property 'toLowerCase' does not exist on type 'Date'.
//newDate.toLowerCase()
//primitive types
var a;
a = 1;
//error TS2322: Type 'string' is not assignable to type 'number'.
//a='string';
//object types
//variant 1
var user = {
    name: 'bob',
    age: 44,
    isAdmin: false
};
var user2 = {
    name: 'tom',
    age: 33,
    isAdmin: true
};
var user3 = {
    name: 'nick',
    age: 46,
    isAdmin: false
};
console.log(user3);
//arrays
//variant 1
var array1 = [34, 4, 2, 1];
//variant 2
var array2 = [4, 5, 6];
var nestedArr = [[3, 4, 5], ['a', 'g']];
//tuples  |ˈtjuːp(ə)l| === кортеж
// it`s like array readonly
var numericTuple = [1, 4];
//error TS2339: Property 'push' does not exist on type 'readonly [1, 4]'.
//numericTuple.push(3);
//functions
var printMsg = function (msg) { return console.log(msg); };
//return undefined
//void - means that function doesn`t return the value of
console.log(printMsg('hello'));
var printMsg2 = function (msg) {
    console.log(msg);
};
//optional parameters
function printMsg3(msg, additionalMsg) {
    console.log("".concat(msg).concat(additionalMsg !== null && additionalMsg !== void 0 ? additionalMsg : ''));
}
printMsg3('hello');
var sum1;
sum1 = function (a, b) { return a + b; };
// Type '(a: number, b: string) => string' is not assignable to type 'ISumFun'.   Types of parameters 'b' and 'b' are incompatible.     Type 'number' is not assignable to type 'string'.
//sum1=(a,b:string)=>a+b;
//union types
//for primitives
var string;
string = 'hello';
string = false;
string = null;
string = { a: 'hello' };
// error TS2322: Type '6' is not assignable to type 'string | boolean | null'.
//string=6;
//for functions
var transformFun = function (value) {
    if (typeof value === 'string') {
        return "String is ".concat(value);
    }
    if (typeof value === 'number') {
        return Math.pow(value, 2);
    }
};
console.log(transformFun('hello'));
console.log(transformFun(4));
var myValue;
myValue = 44;
myValue = false;
var myObj = {
    propA: 'hello',
    propB: 4
};
var checkDeviceState = function (signal) {
    // if (signal === 1) return 'Device is enable';
    // else return 'device is not enable';
    return (signal === 1) ? 'device is enable' : 'device is not enable';
};
console.log(checkDeviceState(0));
console.log(checkDeviceState(1));
//error TS2345: Argument of type '4' is not assignable to parameter of type '0 | 1'.
//console.log(checkDeviceState(4));
//enums  - are used instead  magic numbers
//enums can get numbers or strings
//enum by default
var DeviceStates;
(function (DeviceStates) {
    DeviceStates[DeviceStates["ENABlED"] = 0] = "ENABlED";
    DeviceStates[DeviceStates["DISABLED"] = 1] = "DISABLED";
    DeviceStates[DeviceStates["BROKEN"] = 2] = "BROKEN";
})(DeviceStates || (DeviceStates = {}));
//example destructuring  of enum
var ENABlED = DeviceStates.ENABlED, DISABLED = DeviceStates.DISABLED, BROKEN = DeviceStates.BROKEN;
console.log(DeviceStates.ENABlED);
console.log(DeviceStates.DISABLED);
console.log(DeviceStates.BROKEN);
//castom enums
var CustomEnum;
(function (CustomEnum) {
    CustomEnum["NAME"] = "bob";
    CustomEnum[CustomEnum["AGE"] = 44] = "AGE";
    CustomEnum[CustomEnum["HOME"] = 0] = "HOME";
    CustomEnum[CustomEnum["HOME2"] = 1] = "HOME2";
    CustomEnum[CustomEnum["HOME3"] = 2] = "HOME3";
})(CustomEnum || (CustomEnum = {}));
var AGE = CustomEnum.AGE, NAME = CustomEnum.NAME, HOME = CustomEnum.HOME, HOME2 = CustomEnum.HOME2, HOME3 = CustomEnum.HOME3;
console.log(AGE, NAME, HOME, HOME2, HOME3);
var admin = {
    login: 'login',
    password: '123',
    permissions: {
        editArticles: true,
        deleteArticles: true,
        banUsers: true
    },
    homo: true
};
var personNew = {
    name: 'bob',
    age: 22
};
var userSecret = {
    name: 'alex',
    secret: 'cannot be changed'
};
userSecret.name = 'tom';
var userOptional = {
    name: 'tom'
};
var numericArr = [1, 3, 4];
var dictionary = {
    'table': 'стол',
    'people': 'люди',
    pages: '1'
};
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (name === void 0) { name = 'anonymous'; }
        if (age === void 0) { age = null; }
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHi = function () {
        console.log("hi, ".concat(this.name));
    };
    return Person;
}());
var person = new Person();
//person.name = 'tom'
//person.age = 23;
console.log(person);
person.sayHi();
var person2 = new Person('bob', 44);
console.log(person2);
var Person2 = /** @class */ (function () {
    function Person2(name, age, human) {
        if (name === void 0) { name = 'tommy'; }
        if (age === void 0) { age = null; }
        if (human === void 0) { human = true; }
        var _this = this;
        // strangely it works!!!!!!
        this.sayHiArrow = function () {
            console.log("hi,".concat(_this.name));
        };
        this.name = name;
        this.age = age;
        this.human = human;
    }
    Person2.prototype.sayHi = function () {
        console.log("hi, ".concat(this.name));
    };
    return Person2;
}());
var person3 = new Person2();
console.log(person3);
person3.sayHiArrow(); //hi,tommy
//abstract classes
var AbstractGreeting = /** @class */ (function () {
    function AbstractGreeting() {
    }
    return AbstractGreeting;
}());
var MyGreeting = /** @class */ (function (_super) {
    __extends(MyGreeting, _super);
    function MyGreeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyGreeting.prototype.sayHi = function () {
        console.log('hi');
    };
    return MyGreeting;
}(AbstractGreeting));
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
function identity(value) {
    return value;
}
var numericStorage = {
    value: [],
    getValue: function () {
        return this.value;
    }
};
var booleanStorage = {
    value: [],
    getValue: function () {
        return this.value;
    }
};
//generic class
var IdentifyClass = /** @class */ (function () {
    function IdentifyClass(value) {
        this.value = value;
    }
    IdentifyClass.prototype.getIdentify = function () {
        return this.value;
    };
    return IdentifyClass;
}());
var numericIdentify = new IdentifyClass(5);
var stringIdentify = new IdentifyClass('hello');
var myRectangle = {
    width: 10,
    height: 10,
    type: 'box'
};
var getValueFromRectProp = function (prop, rectangle) { return rectangle[prop]; };
console.log(getValueFromRectProp('width', myRectangle));
console.log(getValueFromRectProp('type', myRectangle));
//typeof
function abc() {
    return {
        a: 10,
        b: 'hello'
    };
}
var abc2 = function () {
    return {
        a: 2,
        b: 'world'
    };
};
var ageAny = 34;
var value = 33;
var obj22 = {
    hello: 'hello',
    test: 123
};
var directionUsed = {
    left: true,
    right: false,
    up: true,
    down: false
};
var human1 = {};
//required <type> antagonist partial
var human2 = {
    life: true,
    head: true
};
//readonly <type> we can not change values of object
var human3 = {
    life: true,
    head: true
};
var point1 = {
    firstPoint: {
        a: 1,
        b: 2
    },
    secondPoint: {
        a: 3,
        b: 4
    }
};
//the same only using Record: type for keys and type for values
var point = {
    firstPoint: {
        a: 1,
        b: 2
    },
    secondPoint: {
        a: 3,
        b: 4
    }
};
var todo = {
    title: 'world',
    completed: true
};
//omit <type,keys> antagonist  of pick
var todo2 = {
    completed: true,
    description: 'programming language'
};
var direct1 = 'up';
var direct3 = 'left';
var valueSome = 'hello';
//error TS2322: Type 'null' is not assignable to type 'string'.
//const valueSome2:WithoutNullable=null;
//parameters <type>
var sumNew = function (a, b) { return a + b; };
var aa = [3, 4];
//constructor parameters <type>
//returntype <type>
var transformToObj = function (a, b) {
    return { a: a, b: b };
};
var objTrans = {
    a: 5,
    b: 4
};
//instancetype<type>
var MyClass = /** @class */ (function () {
    function MyClass(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    return MyClass;
}());
var objFromMyClass = {
    name: 'bob',
    job: 'programmer',
    age: 23
};
