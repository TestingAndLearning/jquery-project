$(document).ready(function ()
{
	/* Generades the grid */
	$("#generateCells").click(function(e)
	{
		var height = document.getElementById("heightInput");
		var width = document.getElementById("widthInput");
		var color = document.getElementById("colorInput");
		var colorText = color.options[color.selectedIndex].text;

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
		/* $(".cells").css({"outline": "red solid 1px", 
						"background-color": "red"}); */


		e.preventDefault();		//Prevents the form from refreshing and resetting everything
								//when submitted

		/* Changes colors upon mouseover */
		$(".cells").on("mouseenter", function()
		{
			$(this).css("background-color", colorText);
		});
	});
});

