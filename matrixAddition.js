/* Matrix addition with string */

let arr1="1,2,3:4,5,6";
let arr2="9,2,3:4,5,6";
let emp=[];
arr1.split(":").map((item)=>{
	emp.push(item.split(","));
});
let emp1=[];
arr2.split(":").map((item)=>{
	emp1.push(item.split(","));
});
let c = [[], []];
for (let i = 0; i < emp.length; i++) {
for (let j = 0; j < emp[i].length; j++) {
c[i][j] = parseInt(emp[i][j]) + parseInt(emp1[i][j]);
 }
}
console.log(c);
