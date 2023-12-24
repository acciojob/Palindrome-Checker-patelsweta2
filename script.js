// complete the given function

function palindrome(str){
	const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	const reverseStr = cleanStr.split('').reverse().join('');
	if(cleanStr === reverseStr){
		return true;
	}else{
		return false;
	}
}
module.exports = palindrome
