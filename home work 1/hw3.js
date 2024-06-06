// task1

// const myArray = [2, 3, 4, 5];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// for (let element of myArray) {
//     console.log(element);
// }

// let i = 0;
// while (i < myArray.length) {
//     console.log(myArray[i]);
//     i++;
// }

// task2

// for (let i = 0; i <= 15; i++){
//     if ((i % 2) == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd")
//     }  
// }

// task 3

// function randArray(k) {
//     const array = [];
//     for (let i = 0; i < k; i++) {
//         const randomNumber = Math.floor(Math.random() * 500) + 1;
//         array.push(randomNumber);
//     }
//     return array;
// }
// console.log(randArray(5));

// task 4

// function raiseToDegree(a, b) {
//     let result = a ** b;
//     return result;
// }

// let a = prompt("Provide number a");
// let b = prompt("Provide number b")

// console.log(raiseToDegree(a, b));

// task 5

// function findMin() {
//     let  minVal = arguments[0];
//     for(let i = 1; i < arguments.length; i++) {
//         if (minVal > arguments[i]){
//             minVal = arguments[i];
//         }
//     }
//     return minVal;
// }

// console.log(findMin(1, 2, 3, -1));

// task 6

// function findUnique(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[i] == arr[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// const arr = [1, 2, 3, 4, 5, 5];

// console.log(findUnique(arr));

// task 7

// function lastElem(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[i] == arr[j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// const arr = [1, 2, 3, 4, 5, 5];

// console.log(lastElem(arr));

// task 8 

function showMessage() {
    console.log('i love java script');
    showMessage = function () {
        console.log('I Love Java Script')
    };
}
showMessage();
showMessage();