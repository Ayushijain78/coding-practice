function flattenArray(arr){
    let flatArr=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flatArr=flatArr.concat(flattenArray(arr[i]));
        }
        else{
            flatArr.push(arr[i]);
        }
    }
    return flatArr;
}

const input = [[1,2,3],[4,5,[6,7]],8,[9,[[10],11]]];
const output = flattenArray(input);

console.log("flatten Arary",output);