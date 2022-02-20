
function sort012(arr, N){
    let i=0;
    let j=0;
    let k=N-1;
    let temp;
    while(i<=k){
        if(arr[i]===0){
           temp=arr[j];
           arr[j]=arr[i];
           arr[i]=temp;
           i++;
           j++;
        }
        else if(arr[i]===1){
            i++;
        }
        else if(arr[i]===2){
            temp=arr[i];
            arr[i]=arr[k];
            arr[k]=temp;
            k--;
        }
    }
    return arr;
}
let arr3= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
console.log("Sort 012",sort012(arr3,arr3.length));