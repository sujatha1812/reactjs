function with argument that square numbers

var num = Math.pow(6, 2);

Random digit numbers

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

display type and version of browser using alert

<!DOCTYPE html>
<html>
<body>

<p>Click the button to display an alert box.</p>

<button onclick="myFunction()">alert</button>

<script>
function myFunction() {
  alert("This is an alert message!");
}
</script>

</body>
</html>