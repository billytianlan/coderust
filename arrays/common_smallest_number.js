/*
  Given three integer arrays sorted in ascending order, 
  find the smallest number that is common in all three arrays. 
  For example, let's look at the below three arrays. 
  Here 6 is the smallest number that's common in all the arrays.

  [6, 7, 10, 25, 30, 63, 64]
  [-1, 4, 5, 6, 7, 8, 50]
  [1, 6, 10, 14]


  Basic approach first

  Add numbers from smallest array into a hash

  iterate through the other two arrays to find a match

  set the match to a variable and compare to see if new matches are smaller than previous match

  return smallest match
*/


let commonSmallestNumber = arrays => {
  let smallestArrayIndex;
  let lookupObj = {};

  for(var i = 0; i < arrays.length; i++) {
    if (smallestArrayIndex === undefined) {
      smallestArrayIndex = i;
    } else {
      smallestArrayIndex = arrays[smallestArrayIndex].length < arrays[i].length ? smallestArrayIndex : i;
    }
  }


  arrays[smallestArrayIndex].forEach(item => {
    lookupObj[item] = 1;
  })

  arrays.forEach((array, index) => {
    if (index !== smallestArrayIndex) {
      array.forEach(item => {
        if (lookupObj[item] !== undefined) {
          ++lookupObj[item] 
        }
      })
    }
  })

  for (var key in lookupObj) {
    if (lookupObj[key] === 3) {
      return key;
    }
  }
  return -1;
}


let example = [[6, 7, 10, 25, 30, 63, 64], [-1, 4, 5, 6, 7, 8, 50], [1, 6, 10, 14]]

let example2 = [[1,2,3], [4,5,6], [7,8,9]]

console.log(commonSmallestNumber(example));
console.log(commonSmallestNumber(example2));
