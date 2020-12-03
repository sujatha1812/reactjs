#be spacify#
function GettingInputString(){
	this.input= ' ';
}
const input1 = new GettingInputstring();
const input2 = new GettingInputstring();
GettingInputString.prototype.bespacify=function(input){
	const array=[];
        const char=input.split('');
        char.forEach((i)=>{
	i=i+' ';
	array.push(i);
 });
 return (array.join(' '));
}

input.bespacify("hello");

#bevowel

function showOnlyVowels(string) { 
  return Array.prototype.filter.call(string, char => "aeiou".includes(char)).join("") 
} 
 
console.log(showOnlyVowels("awesomeness")) //aeoee 