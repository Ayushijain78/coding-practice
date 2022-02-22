function printDuplicate(arr){
    let dup=[];
    let nondup=[];
    for(let n of arr){
        if(!nondup.includes(n)){
            nondup.push(n);
        }
        else{
            dup.push(n);
        }
    }
    return [{"duplicates":dup},{"nonduplicates":nondup}]
}

console.log(printDuplicate([1,2,3,3,4,8,3,2]));