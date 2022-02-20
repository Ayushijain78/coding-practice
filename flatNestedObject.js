const person={
    name:"abc",
    address:{
        city:'gwalior',
        address1:{
            line1:'abss'
        }
    }
}

function flat(person){
    let map={};
    for(let i in person){
        if(typeof person[i]==='object'){
            let d=flat(person[i])
            for(j in d){
                map[i+"."+j]=d[j]
            }
        }
        else{
            map[i]=person[i]
        }
    }
    return map;
}
console.log("Flatten Newsted object",flat(person));