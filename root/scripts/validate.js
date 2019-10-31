/*

	Your JavaScript will go here!
	To learn more about JavaScript, please visit this link
	
	https://www.w3schools.com/js/default.asp
	
*/

//Get all the images being used
var image_tShirt_white = "images/tshirt-white.png";
var image_tShirt_red = "images/tshirt-red.png";
var image_tShirt_purple = "images/tshirt-purple.png";
var image_tShirt_green = "images/tshirt-green.png";
var image_tShirt_blue = "images/tshirt-blue.png";
var image_tShirt_black = "images/tshirt-black.png";

window.onload = pageLoaded;

function pageLoaded() {
	//preview variable (show the result to the user)
	var message_tshirt_preview_size = document.getElementById("tshirt_preview_size");
	var message_tshirt_preview_colour = document.getElementById("tshirt_preview_colour");
	var message_tshirt_preview_style = document.getElementById("tshirt_preview_style");
	var image_tShirt_Preview = document.getElementById("tShirt_Preview_Image");
	
	//tshirt colour radio button
	var radioButton_white_tshirt = document.getElementById("white_tshirt");
	radioButton_white_tshirt.onclick = white_tshirt_clicked;
	var radioButton_red_tshirt = document.getElementById("red_tshirt");
	radioButton_red_tshirt.onclick = red_tshirt_clicked;
	var radioButton_purple_tshirt = document.getElementById("purple_tshirt");
	radioButton_purple_tshirt.onclick = purple_tshirt_clicked;
	var radioButton_green_tshirt = document.getElementById("green_tshirt");
	radioButton_green_tshirt.onclick = green_tshirt_clicked;
	var radioButton_blue_tshirt = document.getElementById("blue_tshirt");
	radioButton_blue_tshirt.onclick = blue_tshirt_clicked;
	var radioButton_black_tshirt = document.getElementById("black_tshirt");
	radioButton_black_tshirt.onclick = black_tshirt_clicked;
	
	//functions for tshirt colour change
	function white_tshirt_clicked() {
		image_tShirt_Preview.src = image_tShirt_white;
		message_tshirt_preview_colour.innerHTML = "white";
	}
	function red_tshirt_clicked() {
		image_tShirt_Preview.src = image_tShirt_red;
		message_tshirt_preview_colour.innerHTML = "red";		
	}
	function purple_tshirt_clicked() {
		image_tShirt_Preview.src = image_tShirt_purple;	
		message_tshirt_preview_colour.innerHTML = "purple";		
	}
	function green_tshirt_clicked() {
		image_tShirt_Preview.src = image_tShirt_green;	
		message_tshirt_preview_colour.innerHTML = "green";		
	}
	function blue_tshirt_clicked() {
		image_tShirt_Preview.src = image_tShirt_blue;	
		message_tshirt_preview_colour.innerHTML = "blue";		
	}
	function black_tshirt_clicked() {
		image_tShirt_Preview.src = image_tShirt_black;	
		message_tshirt_preview_colour.innerHTML = "black";	
	}
  
  //change the size selections
  var size_selection = document.getElementById("tshirt_size");
  function sizeChange() {
    
    message_tshirt_preview_size.innerHTML = size_selection.value;
    
  }
  
  //change the style selections
  var style_selection = document.getElementById("tshirt_style");
  function styleChange() {
    
    message_tshirt_preview_style.innerHTML = style_selection.value;
    
  }
  
  
  size_selection.addEventListener("change", sizeChange);
  
  
  style_selection.addEventListener("change", styleChange);
  
  

}