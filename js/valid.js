function validate(){
	var errormsg="";
	var name = document.getElementById('itemname').value;
	if (name.length==0) {
		errormsg = errormsg+"Title is required.\n";
	}
	if(name.length<2 || name.length>65)
	{
		errormsg = errormsg+"Title should have 2 t0 65 characters.\n";
	}
	var price = document.getElementById('amount').value;
	if (price.length==0) {
		errormsg = errormsg+"Price is required.\n";
	}
	if(isNaN(price) || price.length ==0)
	{
		errormsg = errormsg+"Price should be a number.\n";
	}
	var d = document.getElementById('date').value;
	if(d.length==0)
	{
		errormsg = errormsg+"Date is required.\n";
	}
	var x = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
	if(!(x.test(d)))
	{
		errormsg=errormsg+"Enter date in correct format.";
	}
	if(errormsg.length==0)
	{
		window.location.href="edit-menu-item-status.html";
	}
	else
	{
		alert(errormsg);
	}

	return false;
}