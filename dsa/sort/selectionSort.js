const arr=[3,23,1,9,33,0.3]

function selection(arr){
   let i=0;
   let min;
   while(i<arr.length){
      min=i;
      let j=i;
      while(j<arr.length){
         if(arr[j]<=arr[min]){
            min= j 
         }
         j++;
      }
      if(i!==min){
         [arr[i],arr[min]]=[arr[min],arr[i]]
      }
      i++;
   }
   return arr
}
console.log(selection(arr))