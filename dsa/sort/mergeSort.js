const arr=[3,23,1,9,33,0.3]

function mergeSort(arr){
    if(arr.length<=1) return arr;
    const m= Math.floor(arr.length/2)
    const left= mergeSort(arr.slice(0,m));
    const right= mergeSort(arr.slice(m));
    return merge(left,right)
}

function merge(left,right){
    const res=[]
    let i=0,j=0;
    while(i<left.length && j<right.length){
       if(left[i]<=right[j]){
          res.push(left[i])
          i++;
       }else if(left[i]>=right[j]){
         res.push(right[j])
        j++;
       }
    }
    return [...res,...left.slice(i),...right.slice(j)]
}
console.log(mergeSort(arr))