
document.querySelector('#myButton').addEventListener('click',updateWidthAndColor);

function updateWidthAndColor() {

  let myDiv = document.getElementById("mydiv");

  console.log(myDiv.textContent);

  // Get the original width - note that getPropertyValue returns a STRING!!!!
  let originalWidth = myDiv.style.getPropertyValue("width");
  console.log(originalWidth);

  // Add 100 to the VALUE of the width - use parseInt to get that value
  let newWidthValue = parseInt(originalWidth) + 100;
  console.log(newWidthValue);

  // Add "px" to make a proper CSS string
  let newWidthString = newWidthValue + "px";
  console.log(newWidthString);

  //Set the new width
  myDiv.style.setProperty("width",newWidthString);

  //Change the background-color
  myDiv.style.setProperty("background-color","red");

}
