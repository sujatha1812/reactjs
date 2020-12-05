var myArray = ["bar", "foo", "zorb", "bar", "baz", "fum", "baz"];
 
Array.prototype.removeDuplicates = function() {
    var input = this;
    var hashObject = new Object();
     
    for (var i = input.length - 1; i >= 0; i--) {
        var currentItem = input[i]; 
     
        if (hashObject[currentItem] == true) {
            input.splice(i, 1);
        }
         
        hashObject[currentItem] = true;
    }
    return input;
}
 
myArray.removeDuplicates();
alert(myArray);