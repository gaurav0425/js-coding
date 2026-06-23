// const nums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = nums.filter((num)=>{
//     return num > 4
// })

// console.log(newNums);




// const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// // const newNums = myNumbers.map((num)=>{return num+10});

// const newNums = myNumbers
// .map((num)=> num * 10)
// .map((num)=> num + 1)
// .filter((num)=> num >= 40)


// console.log(newNums);


// const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc,currvalue){
//     console.log(`acc: ${acc} and currvalue: ${currvalue}`);
//     return acc + currvalue
// }, 0)


//using arrow function
// const myTotal = myNums.reduce((acc,currval)=>acc + currval,0)
 
// console.log(myTotal);


// const shoppingCart = [
//     {
//         itemname : "jscourse",
//         price : 2999
//     },
//     {
//         itemname : "py course",
//         price : 999
//     },
//     {
//         itemname : "course",
//         price : 2999
//     },
//     {
//         itemname : "jscourse",
//         price : 2999
//     },
// ]
 
// const pricetopay = shoppingCart.reduce((acc,item)=>acc + item.price,0);

// console.log(pricetopay);



// const numbers = [10,20,30,40,50];
// const result = numbers.filter((num)=>num>30);
// console.log(result);



// const numbers = [1,2,3,4];
// const result = numbers.map((num)=>num * num);

// console.log(result);


const numbers = [1,2,3,4];
const sum = numbers.reduce((acc,currval)=>{
    return acc + currval; 
},0);

console.log(sum);