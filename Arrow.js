// const user = {
//     name : "gaurav",
//     price : 999,
//     welcomemsg : function(){
//         console.log(`${this.name} , welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomemsg();
// user.name = "nick";
// user.welcomemsg();

// console.log(this);

// function chai(){
//     let username = "gaurav";
//     console.log(this.username);
// }

// chai();

// const chai = ()=>{
//     console.log(this);
// }
// chai();


// const addtwo = (num1,num2)=>{
//     return num1 + num2;
// }
//Implicit return
// const addtwo = (num1,num2) =>  num1 + num2;


// console.log(addtwo(3,4));


//******IIFE *****/

(function chai(){
    console.log("DB connected");
})();
(function ndcode(){
    console.log("DB connected 2");
})();
((name)=>{
    console.log(`Db connected to ${name}`);
})('gaurav');
(()=>{
    console.log("Bye");
})();