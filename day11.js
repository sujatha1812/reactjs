#HTML#

<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Set the background color of a paragraph</title>
</head>
<body>
<input type="button" value="Click to set paragraph background color" onclick="set_background()">
<p>Fruits are the means by which angiosperms disseminate seeds.</p>
<p> "fruit" normally means the fleshy seed-associated structures of a plant that are sweet or sour, and edible in the raw state, such as apples, bananas, grapes, lemons, oranges, and strawberries.</p> 
</body>
</html>

#Javascript to set background color#
function set_background() {
 docBody = document.getElementsByTagName("body")[0];
  //Get all the p elements that are descendants of the body
  myBodyElements = docBody.getElementsByTagName("p");
// get the first p elements
  myp1 = myBodyElements[0];
  myp1.style.background = "rgb(255,0,255)";
// get the second p elements
  myp2 = myBodyElements[1];
  myp2.style.background = "rgb(255,255,0)";
}