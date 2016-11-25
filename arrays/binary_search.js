let binarySearch = (array, target, low, high) => {
  if (low > high) {
    return -1;
  }


  let mid = low + Math.floor((high - low) / 2);

  if (array[mid] === target) {
    return mid;
  } else if (target > array[mid]) {
  
    low = mid + 1;
    return binarySearch(array, target, low, high);
  } else if (target < array[mid]) {
    high = mid - 1;
    return binarySearch(array, target, low, high);
  }
}

let array1 = [1, 33, 100, 122, 200];

console.log('It should return the correct index for the target 1:', binarySearch(array1, 1, 0, array1.length - 1) === 0);
console.log('It should return the correct index for the target 33:', binarySearch(array1, 33, 0, array1.length - 1) === 1);
console.log('It should return the correct index for the target 100:', binarySearch(array1, 100, 0, array1.length - 1) === 2);
console.log('It should return the correct index for the target 122:', binarySearch(array1, 122, 0, array1.length - 1) === 3);
console.log('It should return the correct index for the target 200:', binarySearch(array1, 200, 0, array1.length - 1) === 4);
console.log('It should return -1 if the element is not found:', binarySearch(array1, 5, 0, array1.length - 1) === -1)
