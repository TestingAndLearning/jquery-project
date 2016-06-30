$(document).ready(function ()
{
	/* Generades the grid */
	$("#generateCells").click(function(e)
	{
		var height = document.getElementById("heightInput");
		var width = document.getElementById("widthInput");

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
			$row.append($cells.clone());		//Adds columns to the temp row object
		}

		for (var i = 0; i < height.value; i++)
		{
			$("#main").append($row.clone());
		}


		e.preventDefault();		//Prevents the form from refreshing and resetting everything
								//when submitted
	});

	/* Changes colors upon mouseover */
	$(".cells").mouseenter(function()
	{
		
	});
});

/*
	$(".cell").mouseenter(function()
	{
		$(this).fadeOut(1000);
	});
*/