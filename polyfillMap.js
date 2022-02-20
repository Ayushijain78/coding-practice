Array.prototype.newMap=function(fn){
    let newArr=[];
        for(let i=0;i<this.length;i++){
            newArr.push(fn(this[i],i,this));
        }
    return newArr;
}
const array=[1,2,3,2,9].newMap(item=>item*2)
console.log("polyfill for map",array);
