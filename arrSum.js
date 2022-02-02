const sumArr = (arr) => {
    let sum =0;
    let newarr=[];
    for(let i=0;i<arr.length;i++){
         newarr.push(arr[i].replace(/[^\d.-]/g, ''));
    }
    let a=newarr.filter(item=>{
        return item.length!=0
    }).reduce((acc,item)=>{
        return acc=acc+parseInt(item);
    },0)
    
   return a;
};



console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); // 1512
console.log(sumArr(["asdasd"])); // 0
console.log(sumArr(["asdasd12"])); // 12
console.log(sumArr(["12"])); // 12
