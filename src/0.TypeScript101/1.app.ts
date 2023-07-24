// the extension name of typescript is ts or tsx.

// Type script do two main thing - 1. Define a strict type and 2. use the same type throughtout coding. even if we dont define it.

let varibale = 'test'; // as we did not say the variable to be of string type but ts automatically makes it string type and will be using this varibale for only strings.

// varible = 54 ; // we can't change the type to another like here we are try to make it number

// to predefine a variable type than to make it adjust automatically based on first assign value -- use ":"

let ageWithNumber : number;

// ageWithNumber = 'abc'; // it will give error

ageWithNumber = 12;

// and to deine while declarating it

let predefineValue  : number = 22;


// other tyes are - string, boolean, string | number  (in this case we can only use string or number , other types are not allowed, as we call this structure as union types)

//to define array

let names  = ["john", "jane", "tom"] ; // this array only consists string.

// names.push(3) ; // pushing number 3 will give error

names.push("rubika");

let defineArrayType :string [] ; // it means it is an array which will contains only strings.

defineArrayType = ['abc','def'];

// Union Array types

let testStringOrNumberArray : (string | number) [] ;

// TO DEFINE OBJECTS

let users = {
    username:"john",
    age:22,
    isAdmin :false
};

users.username = "abc" ; // no problem
// users.age = "eighteen" ; here we have problem coz we define it as a number
users.age = 23;

// users.phone = 12324; // this shows errors as we didn't define phone property at top.

let userObj : {
    username:string
    age:number
    isAdmin :boolean
}

userObj = {
    username:'john',
    age:23,
    isAdmin:true, // if we hide this the we see an error as we have to declare all the variable that we have define none the less and not any more.
    // phone:123 //if we assing more property than decalre we have an error
}

// no to define a property that is not required

let userObj2 : {
    username:string
    age:number
    isAdmin :boolean
    phone? : string
}

// ? this means conditionally as we have option weather to include phone or exclude it

// ANY type 

let test3 :any;
test3 = 'test';
test3 = 12;

// but it does n't defines the principle of using type script

// in array

let testAnyArray : any [];

// Function

let sayHi = () => {
    console.log("hi");
}

// sayHi = "hi";  we can redeclare a function as variable

// to return something in function

let funcReturnString = ( ) : string => {
    // but if we define a specific type then we must return.
    return "test abc";
}

// to take arguments
let multiple = (num : number) : number => {
    return num*2;
}

let multiple2 = (num : number)=> {
    return num*2;
}

// type script understands in multiple2 function that we are returning number

 // to don't return anything use void

 let multiple3 = (num : number) :void => {
    //if we use return keyword it will throw an error
 }

 let sum = ( num1 : number, num2:number, another? : number) => {
    return num1 + num2;
 }

//  if you call sum then you must have to give 2 number in params , what if we want second param to be optional use ?.

let func = (user:{username:string,age:number, phone?:string}) => {

}

// in above function it will looks ugly and confusing so to avoid that we use type aliases

type UserType = {
    username:string;
    age:number;
    phone?:number
}

let betterFunc = (user:UserType) => {
    console.log(user.username);
}

// type aliases of function 
type myFuncti  = ( a:number , b :string) => void  

let write : myFuncti = (num,str) => {
    console.log(num + ' time' + str);
}

// how to give options in type 

type userType2 = {
    username:string;
    age:number;
    phone?:string;
    theme : 'dark' | 'light'; // only two options
}

const userWithTHem : userType2 = {
    username:"john",
    age:42,
    theme:'dark',
}

// INTERFACES -- just like types but with advance version

// try to define every type variable  use -- I<variablename> and we don't user "="" like in alias to define a variable

interface IUser {
    username:string;
    email:string;
    age:number;
}

// so we have some users and some of them are our clients and some are our employees -- we can create multiple interfaces with the IUser interface

interface IEmployee extends IUser {
    employeeId: number
}

const emp : IEmployee = {
    username:"tome",
    email:"av",
    age:12,
    employeeId:12
}

const user : IUser = {
    username:"tome",
    email:"av",
    age:12,
}

// when to use interface vs types 
// if we need to extend any type just use interface , if don't need just use type

// GENERICS

interface IAuthor {
    id:number,
    username:string
}

interface ICategory {
    id:number,
    title:string,
}

// imagine our post have multiple category and multiple authors and we want to fetch this post using it's users or categories
interface IPost {
    id:number;
    title:string;
    desc: string;
    extra : IAuthor[] | ICategory[];
}

interface IPostBetter<T>{
    id:number;
    title:string;
    desc: string;
    extra: T[]; // we use here anything that we pass , in the <T>
}

// eg

const testMe : IPostBetter<String> = {
    id:1,
    title:"pst",
    desc:"tas",
    extra:['str','str2']
}

// to add limitation

interface IPostEvenBetter <T extends object >{
    id:number;
    title:string;
    desc: string;
    extra:T[]
}

const testMe2 : IPostEvenBetter <{id:number,username :string}> = {
    id:1,
    title:"pst",
    desc:"tas",
    extra:[{id:1,username:'jone '}],
}

// OR
const testMe3 : IPostEvenBetter <IAuthor> = {
    id:1,
    title:"pst",
    desc:"tas",
    extra:[{id:1,username:'jone '}],
}

const testMe4 : IPostEvenBetter <ICategory> = { // we can pass any object here
    id:1,
    title:"pst",
    desc:"tas",
    extra:[{id:1,title:'jone '}],
}