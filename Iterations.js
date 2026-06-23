// for(let i=0;i<=10;i++){
//     const element = i;
//     if(i==5){
//         console.log("5 is best no.");
//     }
//     console.log(i);
// }

// for(let i=1;i<=10;i++){
//     console.log("outer loop value : ",i);
//     for(let j=1;j<=10;j++){
//         // console.log(`inner loop value ${j} nd inner loop value ${i}`);
//         console.log(i*j);
//     }
// }

// let myArray = ["flash","batman","superman"];
// for(let index = 0;index<myArray.length;index++){
//     console.log(myArray[index]);
// }


//Break nd continue

// for(let i=1;i<=10;i++){
//     // if(i==5){
//     //     break; //
//     // }

//     if(i==5){
//         continue;  //skips 5
//     }
//     console.log(i);
// }



//while nd do-while
// let index = 0;
// while(index<=10){
//     console.log(index);
//     index++;
// }


// let myArray = ["ironman","thor","black-panther"];
// let index = 0;
// while(index<myArray.length){
//     console.log(myArray[index]);
//     index++;
// }

// let score = 11;
// do{
//     console.log(`score is ${score}`);
//     score++;
// }while(score<=10)


// for-off loop

// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Helloworld";
// for(const greet of greetings){
//     console.log(greet);
// }


//Maps

// const map = new Map();
// map.set('IN',"India");
// map.set('USA',"United states of america");
// map.set('FR',"France");

// // console.log(map);

// for (const [key,value] of map) {
//     console.log(key,':-',value);
// } 

const myobject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

//For-in loop



// for(const key in myobject){
//     console.log(`${key} shortcut is for ${myobject[key]}`);
// }


// const programming = ["js","c++","python","java"];

// for (const element of programming) {
//     console.log(element);  //keys
// }

// for(const key in programming){
//     console.log(key);  //values
// }



// const programming = ["js","c++","python","java"];

// programming.forEach(function (item){  //use call back function
//     console.log(item);
// })



