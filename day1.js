1. to print until next chritmas

today=new Date();
var cmas=new Date(today.getFullYear(), 11, 27);
if (today.getMonth()==11 && today.getDate()>27) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");

2.print length of string

var str = "Hello World!";
  var n = str.length;

3. check given 2 nos return true if one number is 50 or their sum 50 

function test50(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))