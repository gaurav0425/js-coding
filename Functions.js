// function addTwonumbers(number1,number2){//parameteres
//     console.log(number1 + number2);
// }

// addTwonumbers(3,4); //arguments
// const res = addTwonumbers(3,4);
// console.log("result : ",res);


// function addTwonumbers(number1,number2){
//     // let result  = number1 + number2;
//     // return result;
//     return number1 + number2;
// }

// const result = addTwonumbers(5,7);
// console.log("Result : ",result);

// function loginusermsg(username = "sam"){
//     if(!username){
//         console.log("please enter a username");
//         return;
//     }
//     return `${username} just logged in`;
// }

// console.log(loginusermsg("gaurav"));
// console.log(loginusermsg());


// ***************************function part 2 ********************

// function calculateCartprice(val1,val2,...num1){
//     return num1;
// }


// console.log(calculateCartprice(200,300,400,5000));


// const user = {
//     name : "gaurav",
//     price : 199
// };

// function handleObject(anyobject){
//     console.log(`name is ${anyobject.name} nd price is ${anyobject.price}`);
// }

// handleObject(user);
// handleObject({
//     name:"nick",
//     price:299
// });



// const mynewarray = [200,400,100,600];
// function returnsecondvalue(getarray){
//     return getarray[1];
// }

// console.log(returnsecondvalue(mynewarray));
// console.log(returnsecondvalue([200,300,400,1000]));


//************ Callback Function ******************
function work(Callback){
    console.log("Hello bro");
    Callback();
    console.log("Work done");
}

function eat(){
    console.log("Eat your food");
}

work(eat);