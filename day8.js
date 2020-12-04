Array.prototype.remove = function(item){
	for (let i=0;i<this.length;i++){
	if(this[i]===item){
		this.splice(i,1);
	}
       }
}
const arr1=[1,2,3,1];
arr1.remove(1)
Array.prototype.remove = function(item){
	const arr=this.slice();
	for(let i=0;i<this.lenth;i++){
	 if(arr[i] === item){
            arr.splice(i,1);
            return arr;
         }
       }
       return arr;
}
let arr2=[1,2,3,1];
arr2=arr2.remove(1)