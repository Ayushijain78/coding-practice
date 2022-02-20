
function maxSubArr(arr){
    let csum=arr[0];
    let osum=arr[0];

    for(let i=1;i<=arr.length;i++){
        if(csum>=0){
            csum=csum+arr[i];
        }
        else{
            csum=arr[i];
        }
        if(csum>osum){
            osum=csum;
        }
    }
    return osum;
}
let arr1=[1, 2, 3, -2, 5]
console.log("Max subarray",maxSubArr(arr1));
