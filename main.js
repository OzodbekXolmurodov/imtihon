//               1-misol

const array = ["3", "4", "5", "6", "7"];
const reversed = array.reverse();
console.log("reversed:", reversed);

//               2-misol

const numbers = [1, 2, 3, 4, 5];
function doubleNumbers(numbers) {
  let empty = [];
  for (let i = 0; i < numbers.length; i++) {
    empty.push(numbers[i] * 2);
  }
  return empty;
}
console.log(doubleNumbers(numbers));

//            3-misol  tushunmasdan qildim lekin qiyen ekan yordam suradim

let arr = [10, 20, 30, 40, 50];
let arrElement = 50;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arrElement) {
    console.log("index of ", arr[i], " in array ", i);
  }
}

//                 4-misol

let arrayOne = [10, 31, 2, 6, 13];
let natija = ajratish(array);
function ajratish(array) {
  let natija = {
    juft: [],
    toq: [],
  };
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      natija.toq.push(array[i]);
    } else {
      natija.juft.push(array[i]);
    }
  }
  return natija;
}
console.log(natija);

//                   5-misol

const string = "salom dunyo! hello world!";
function uzgaruvshi(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "!") {
      result += str[i];
    }
  }
  return result;
}
let add = uzgaruvshi(string);
console.log(add);

//                 6-misol

let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 20, 30, 40, 50];
function qiymat(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
let result = qiymat(array1, array2);
console.log(result);

// 7-misol substring kesib berishda ishlatilar ekan binchi elemint kirra eka oxirgisi kirmas ekan

const number = "salom dunyo";
function numbers2(str) {
  let newStr = str.substring(1, str.length - 1);
  return newStr;
}
console.log(numbers2(number));

//            8-misol

const array3 = [1, 2, 3, 4, 5];
let result2 = [];
for (let i = 0; i < array3.length; i++) {
  result2.unshift(array3[i]);
}
console.log(result2);

// 9 - misol;

function removeTrailingZero(string) {
  let a = Number(string);

  if (a % 10 === 0) {
    a = a / 10;
  }

  return a;
}
console.log(removeTrailingZero("22340"));

//                     10-misol
const numbers4 = [3, 456, 6, 32, 34];
function findMinNumbers(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  let darjaOshirish = Math.pow(min, 4);
  return darjaOshirish;
}
console.log(findMinNumbers(numbers4));
