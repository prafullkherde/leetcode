
// Problem :- Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

function createCounter (n) {
  let count = n;
  return function() {
      return count++;       
  }
};

// var createCounter = (n) => {
//     let count = n;
//     return () => {
//         return count++;       
//     }
// };

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12