#add prototype#
function person() {
	this.name='sss',
	this.month=12
}
const person1=new person();
const person2 = new person();

person.prototype.greet = function() {
	console.log('hello' + ' '+ this.name);
}

person1.greet();
person2.greet();
