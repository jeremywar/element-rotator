# element-rotator
A simple, lightweight jQuery plugin for rotating through images, text, or other elements.

Installation instructions:
1. add the function file to you site or javascript file.
2. create an HTML structure with a parent container and child elements to be rotated
3. target the parent container in your jQuery, then add the function below:
	.cycleContent({
		speed: 2000,
		displaytime: 4000
	})
4. adjust the options for speed (speed of fade transition) and display time (length element is displayed before changing)