function rotate(arr){
    let temp;
    for(let i=0;i<arr.length-1;i++){
        temp=arr[arr.length-1];//temp=5
        arr[arr.length-1]=arr[i];//
        arr[i]=temp;
    }
    return arr;
}
let arr9=[1, 2, 3, -2, 5]
console.log("rotate array",rotate(arr9));