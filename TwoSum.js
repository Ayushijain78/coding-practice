var twoSum = function(nums, target) {
    let map={};
    let getIndex=[];
    for(let i=0;i<nums.length;i++){
        map[nums[i]]=i;
    }
    for(let i=0;i<nums.length;i++){
        let goal=target-nums[i];
        console.log(map[goal]===null);
        if(map[goal] && map[goal]!==i){
            getIndex.push(i);
            getIndex.push(map[goal]);
        }

    }
    return getIndex;
};
let nums = [2,7,11,15], target = 9
console.log(twoSum(nums,target))