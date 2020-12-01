# function takes an array and returns second largest number#
let secondMax = (input) =>{

 let max = Math.max.apply(null,input)

input.splice(input.indexOf(max),1)

max=Math.max.apply(null,input);

return max;

}

console.log(secondMax([10,20,30,40,50]));

# create js function takes an integer and returns whether repetaed one or not

var array = [1, 2, 2, 3, 3, 4, 5, 6, 2, 3, 7, 8, 5, 22, 1, 2, 511, 12, 50, 22];

console.log([...new Set(
  array.filter((value, index, self) => self.indexOf(value) !== index))]);

# create function square  every digit of a number

const num = 3345;
const squared = num => {
   const numStr = String(num);
   let res = '';
   for(let i = 0; i < numStr.length; i++){
      const square = Math.pow(+numStr[i], 2);
      res += square;
   };
   return res;
};
console.log(squared(num));


