const arr=[3,23,1,9,33,0.3]

function quickSort(arr=[]){
    if(arr.length<=1) return arr;
    const p= arr[arr.length-1];
    const left=[];
    const right=[];
    let i=0;
    while(i<arr.length-1){  // we need to skip the pivot(Index). otherwise we will enter up loop Infinity.
        if(arr[i]<p){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
        i++;
    }
    return [...quickSort(left),p,...quickSort(right)]
}
console.log(quickSort([]))