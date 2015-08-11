# element-rotator
A simple, lightweight jQuery plugin for rotating through images, text, or other elements.

## Installation instructions:
1. Add the function file to you site or javascript file.
>	<script src="rotateElements.js"></script>
2. Create an HTML structure with a parent container and child elements to be rotated
>	<div class="homeBgContainer">
> >		<!--Can include any elements you want to rotate-->
> >		<h1>Why do turkeys gobble?</h1>
> >		<h1>How do snakes slither?</h1>
> >		<h1>Are all frogs green?</h1>
>	</div>
3. Target the parent HTML element using jQuery, then add the function below:
>	.cycleContent({
> >		speed: 2000,
> >		displaytime: 4000
>	})
>	like this:
>	$('.homeBgContainer').cycleContent({
> >		speed: 2000,
> >		displaytime: 4000
>	})
4. Adjust the options for speed (speed of fade transition) and display time (length element is displayed before changing)