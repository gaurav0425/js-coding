//singleton 

//object literals

// const mysymbol = Symbol("key1");

// const user = {
//     name:"gaurav",
//     "full name" : "Gaurav nayal",
//     [mysymbol]:"mykey1",
//     // mysymbol : "mykey1",
//     age: 22,
//     location:"GZB",
//     email:"gaurav@gmail.com",
//     isLoggedIn:false,
//     lastloginDays : ["Monday","tuesday"]
// };

// console.log(user.name);
// console.log(user["email"]);
// console.log(user.email);
// console.log(user["full name"]);
// console.log(user.mysymbol);
// console.log(typeof user.mysymbol);
// console.log(user[mysymbol]);
// console.log(typeof user[mysymbol]);

// user.email = "PKMKB@indiapapa";
// console.log(user.email);

//value freeaze ho jati change ni ho sakti
// Object.freeze(user);
// user.age = 25;
// console.log(user.age);

// user.greeting = function(){
//     console.log("hello bete");
// }
// user.greetingtwo = function(){
//     console.log(`Hello user, ${this.name}`);
// }

// console.log(user.greeting());
// console.log(user.greetingtwo());




//********************* object part 2 ************************


// const tinderuser = new Object();  Singleton obj
// const tinderuser = {}  

// tinderuser.id = 123;
// tinderuser.name = "nick";
// tinderuser.isLoggedIn = false;

// console.log(tinderuser);


// const regularuser = {
//     email : "nick@gmail.com",
//     fullname : {
//     userfullname : {
//         firstname : "nick",
//         lastname : "jonas"
//     }
// }
// }

// console.log(regularuser.fullname.userfullname.firstname);


// const obj1 = {1:"a",2:"b"};
// const obj2 = {3:"a",4:"d"};

//Combine 2 obj using assign
// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

//using spread operator to combine
// const obj3 = {...obj1,...obj2};
// console.log(obj3);



//Array of objects
// const users = [
//     {
//         id:1,
//         email:"gaurav@gmail.com"
//     },
//     {
//         id:2,
//         email:"nick@gmail.com"
//     },
//     {
//         id:3,
//         email:"hars@gmail.com"
//     }
// ]

// console.log(users[0].email);


// ****************obj part3 *******************
 

//Destructuring

const user = {
    name : "gaurav",
    age : 22,
    email:"gaurav@gmail.com"
};

// const {name} = user;
// console.log(name);

const{name : hello} = user;
console.log(hello);


// {
//     "name" : "gaurav",
//     "course" : "MCA",
//     "price" : "High"
// }