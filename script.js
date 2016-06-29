/*
var rows = 8;
var columns = 8;
var $row = $("<div />",
{
    class: 'row'
});
var $cells = $("<div />", 
{
    class: 'cells'
});

$(document).ready(function () 
{
    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) 
    {
        $row.append($cells.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < rows; i++) 
    {
        $("#main").append($row.clone());
    }
});
*/




$(document).ready(function ()
{

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

		$(".cells").remove();	//Removes previously made cells
		$(".row").remove();		//

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
});

/*
	$(".cell").mouseenter(function()
	{
		$(this).fadeOut(1000);
	});
*/