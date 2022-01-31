var isPalindrome = function(s) {
    var desired = s.replace(/[^A-Za-z0-9]/g, '');
   	let old= desired.replaceAll(" ",'').toLowerCase();
    let newStr= old.split("").reverse().join("").toLowerCase();
    if(newStr===old){
    	return true;
    }
    return	false;  
};
console.log(isPalindrome("A man, a plan_ a canal: Panama"));
