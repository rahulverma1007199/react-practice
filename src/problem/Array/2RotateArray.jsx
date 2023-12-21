import React from 'react'

const RotateArray = () => {

    const Arr = ['GFG_1', 'GFG_2', 'GFG_3', 'GFG_4'];

    //first approach
    // Using Array unshift() and pop() Methods
    function arrayRotate(arr) {
        arr.unshift(arr.pop());
        return arr;
    }
     
    function myGFG() {
        let rotateArr = arrayRotate(Arr);
        console.log("Elements of array = ["
            + rotateArr + "]");
    }
     
    myGFG();

    // second approach
    // Using Array push() and shift() Methods
    function arrayRotate(arr) {
        arr.push(arr.shift());
        return arr;
    }
     
    function myGFG() {
        let rotateArr = arrayRotate(Arr);
        console.log("Elements of array = ["
            + rotateArr + "]");
    }
     
    myGFG();

    //third appraoch
    //  Using Array.slice() and Array.concat()
    function rotateArray(arr, k) {
        const len = arr.length;
        k %= len; // Ensure k is within array length to handle rotations greater than array length
      
        const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
        return rotatedArray;
      }
      
      const originalArray = [1, 2, 3, 4, 5];
      const rotatedArray = rotateArray(originalArray, 2);
      console.log(rotatedArray); // Output: [3, 4, 5, 1, 2]

    //foruth approach 
    // Using Array.slice() and the spread operator (...):
    function rotateArray(arr, k) {
        const len = arr.length;
        k %= len;
      
        const rotatedArray = [...arr.slice(k), ...arr.slice(0, k)];
        return rotatedArray;
      }
      
      const originalArray = [1, 2, 3, 4, 5];
      const rotatedArray = rotateArray(originalArray, 2);
      console.log(rotatedArray); // Output: [3, 4, 5, 1, 2]
      
  return (
    <div>RotateArray</div>
  )
}

export default RotateArray