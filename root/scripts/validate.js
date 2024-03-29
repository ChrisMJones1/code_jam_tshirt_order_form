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
	image_tShirt_Preview.onmouseover = previewTshirtHover;
  
    var colourValue = document.querySelector('#colour_selection input[name="tshirt_colour"]:checked').value;
    var highLightSelection = document.getElementById("label_" + colourValue + "_tshirt");
    
	image_tShirt_Preview.onmouseleave = previewTshirtHoverOff;
  
	//tshirt colour radio button
	var radioButton_white_tshirt = document.getElementById("white_tshirt");
	radioButton_white_tshirt.onclick = tshirtColourChange;
	var radioButton_red_tshirt = document.getElementById("red_tshirt");
	radioButton_red_tshirt.onclick = tshirtColourChange;	
	var radioButton_purple_tshirt = document.getElementById("purple_tshirt");
	radioButton_purple_tshirt.onclick = tshirtColourChange;
	var radioButton_green_tshirt = document.getElementById("green_tshirt");
	radioButton_green_tshirt.onclick = tshirtColourChange;
	var radioButton_blue_tshirt = document.getElementById("blue_tshirt");
	radioButton_blue_tshirt.onclick = tshirtColourChange;
	var radioButton_black_tshirt = document.getElementById("black_tshirt");
	radioButton_black_tshirt.onclick = tshirtColourChange;
		
	
	//tshirt colour image
	var label_white_tshirt = document.getElementById("label_white_tshirt");
	var label_red_tshirt = document.getElementById("label_red_tshirt");
	var label_purple_tshirt = document.getElementById("label_purple_tshirt");
	var label_green_tshirt = document.getElementById("label_green_tshirt");
	var label_blue_tshirt = document.getElementById("label_blue_tshirt");
	var label_black_tshirt = document.getElementById("label_black_tshirt");
	
	//selection variable (hover/selected image)
	var image_selection_highlight = document.getElementById("selection_highlight");
	
	function previewTshirtHover() {
		//image_selection_highlight.style.left = image_tShirt_Preview.style.left + 'px';
		//image_selection_highlight.style.width = image_tShirt_Preview.style.width + 'px';

		image_selection_highlight.style.width = image_tShirt_Preview.offsetWidth + 'px';
	
		//Set the x position
		image_selection_highlight.style.left = image_tShirt_Preview.offsetLeft 
		+ (image_tShirt_Preview.offsetWidth / 2)
		- (image_selection_highlight.offsetWidth / 2)
		+ 'px';
		//Set the y position
		image_selection_highlight.style.top = image_tShirt_Preview.offsetTop 
		+ (image_tShirt_Preview.offsetHeight / 2)
		- (image_selection_highlight.offsetHeight / 2)
		+ 'px';
		
	}
	
	function previewTshirtHoverOff() {
		image_selection_highlight.style.left = '-1200000px';
	}
	
	function tshirtColourChange() {
        highLightSelection.style.border = "1px solid #000";
		colourValue = document.querySelector('#colour_selection input[name="tshirt_colour"]:checked').value;
        highLightSelection = document.getElementById("label_" + colourValue + "_tshirt");
		image_tShirt_Preview.src = "images/tshirt-" + colourValue + ".png";
		message_tshirt_preview_colour.innerHTML = colourValue;
        highLightSelection.style.border = "2px dashed #0FF";
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