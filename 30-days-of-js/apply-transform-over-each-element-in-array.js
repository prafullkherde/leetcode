// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

 

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = (arr, fn)=> {
  let newArray = [];   
     
      // for(let i= 0; i< arr.length; i++) {
      //     newArray = fn(arr[i], i);
      // } 
      // return newArray;  

      // arr.forEach((element, index) => {
      //     arr[index] = fn(element, index);
      // });
      // return arr;

      // let index=0;
      // for (let element  of arr) {
      //     newArray[index] = fn(element, index) ;
      //     index++;
      // }
      // return newArray;

      // return arr.reduce((transformedArr, element, index) => {
      //     transformedArr[index] = fn(element, index);
      //     return transformedArr;
      // }, []);

      return arr.map((element, index) => fn(element, index));        
};