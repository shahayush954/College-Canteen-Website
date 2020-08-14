function check_admin(){
	var a = document.getElementById("login_email").value;
	var b = document.getElementById("login_password").value;
	if(a == "canteen_admin@somaiya.edu" && b == "admin1234"){
		var c = document.getElementById("login_form");
		c.action = 'admin.html';
	}
}