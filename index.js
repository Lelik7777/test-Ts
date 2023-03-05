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
// error TS2540: Cannot assign to 'secret' because it is a read-only property.
//userSecret.secret='change'
