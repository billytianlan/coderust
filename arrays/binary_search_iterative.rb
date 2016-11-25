def binary_search(array, target)
  low = 0;
  high = array.length - 1;

  while low <= high 
    mid = low + ((high - low ) / 2)
    if target == array[mid]
      return mid
    end
    
    if target > array[mid]
      low = mid + 1
    else
      high = mid - 1
    end
  end
  return -1
end

array1 = [1, 33, 100, 122, 200];

puts "It should return the correct index for the target 1: #{binary_search(array1, 1) === 0}"
puts "It should return the correct index for the target 1: #{binary_search(array1, 33) === 1}"
puts "It should return the correct index for the target 1: #{binary_search(array1, 100) === 2}"
puts "It should return the correct index for the target 1: #{binary_search(array1, 122) === 3}"
puts "It should return the correct index for the target 1: #{binary_search(array1, 200) === 4}"
puts "It should return -1 if the element is not found: #{binary_search(array1, 5) === -1}"

