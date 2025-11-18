const arr=[23,3,1,9,33,0.3]
// [23,3,1,9,33,0.3]
// [23,23,1,9,33,0.3]
// [3,23,1,9,33,0.3]
// goes on....
function insertionSort(arr){ // here no swap only insertion
  let i=1;
   while(i<arr.length){
     let current= arr[i]
     let j= i-1
      while(j>= 0&& arr[j]> current){
          arr[j+1] = arr[j]
          --j;
      }
      // j=0;
      // j-1 = +0-1 = 0-1 = -1
      // j= -1 + 1 = 1-1 = 0 
      arr[j+1] = current
      i++;
   }
   return arr
}

console.log(insertionSort(arr))