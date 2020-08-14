function increase_quantity(x)
{
	var a = document.getElementById(x);
	a.value++;
}

function decrease_quantity(x)
{
	var a = document.getElementById(x);
	if(a.value<=1)
	{
		alert("Quantity should atleast be ONE");
	}
	else{
		a.value--;
	}
	
}

function increase_notification(x){
	var quantity = parseInt(document.getElementById(x).value);
	var count = parseInt(document.getElementById("notification").innerHTML);
	count = count + quantity;
	document.getElementById("notification").innerHTML = count; 
}