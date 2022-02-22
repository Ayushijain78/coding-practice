
var containsDuplicate = function(nums) {
   let set=new Set();
    for(let element of nums){
        if(set.has(element)){
            return true
        }
        else{
            set.add(element);
        }
    }
    return false;
};
console.log(containsDuplicate([1,2,3,4,8,3,2]));