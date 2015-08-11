# element-rotator
A simple, lightweight jQuery plugin for rotating through images, text, or other elements.

## Installation:

Add the function file to you site or javascript file.
```javascript  
	<script src="rotateElements.js"></script>
```  
Create an HTML structure with a parent container and child elements to be rotated
```html  
	<div class="homeBgContainer">
		<!--Can include any elements you want to rotate-->
		<h1>Why do turkeys gobble?</h1>
		<h1>How do snakes slither?</h1>
		<h1>Are all frogs green?</h1>
	</div>
```  
Target the parent HTML element using jQuery, then add the function below (The default fade transition is 2 seconds, the the default display time for each element is 4 seconds):
```javascript	
$('.homeBgContainer').cycleContent({
	speed: 2000,
	displaytime: 4000
})
```  
Adjust the options for the speed of fade transition and display time (length element is displayed before changing):

```javascript	
$('.homeBgContainer').cycleContent({
	speed: 3000,
	displaytime: 5000
})
```  