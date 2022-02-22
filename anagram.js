var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;
    }
    
    let countS=new Map();
    let countT={};
    for(let i in s){
        countS[s[i]]=1+countS.get(s[i]);
    }
   
};
let s="rat" , t="car";
console.log(isAnagram(s,t))