const arr=[3,23,1,9,33,0.3]

function bubbleSort(arr){
  let i=0;
  while(i<arr.length){
      let j=0;
      let swapped=false;
      while(j<arr.length){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            swapped=true;
        }
        j++;    
      }
      if(!swapped) return arr
    i++;
  }
  return arr
}

console.log(bubbleSort(arr))