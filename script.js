$(document).ready(function ()
{
	//Default height and width of grid box
	var res = 650;

	/* Generades the grid */
	$("#generateCells").click(function(e)
	{
		var height = document.getElementById("heightInput");
		var width = document.getElementById("widthInput");
		var color = document.getElementById("colorInput");
		var colorText = color.options[color.selectedIndex].text;	//Turns selected value from color
																	//dropdown menu to text
		//var res = 650;

		var $row = $("<div />", 
			{ 
				class: 'row'
			});
		var $cells = $("<div />", 
			{ 
				class: 'cells'
			});


		$(".row").remove();		//Removes previously made cells when generating new grid

		for (var i = 0; i < width.value; i++)
		{
			$row.append($cells.clone());		//Adds copies of cells to a row
		}

		for (var i = 0; i < height.value; i++)
		{
			$("#main").append($row.clone());	//Adds copies of rows to the body area
		}

		//Will change color/size of cells
		 $(".cells").css({"height": (res/height.value), 
						"width": (res/width.value)}); 

		 $(".row").css({"height": (res/height.value)});


		e.preventDefault();		//Prevents the form from refreshing and resetting everything
								//when submitted

		/* Changes colors upon mouseover */
		$(".cells").on("mouseenter", function()
		{
			$(this).css({"background-color": colorText, 
						"opacity": "1"});
		});
	});

	//Changes the total height and width of cells
	$("#resButton").click(function(e)
	{
		do
		{
		res = prompt("Enter the total height and width (in pixels) of the entire grid", 650);
		}
		while(isNaN(res) || res < 1); //Continutes prompting if number entered is not a number or less than 1

		document.getElementById("dim").innerHTML = "Dimensions: " + res + "x" + res; //Changes HTML text displaying current dimensions
		e.preventDefault();
	});
});

