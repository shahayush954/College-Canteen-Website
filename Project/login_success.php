
<?php

session_start();



$HOST = "localhost";
$USER = "root";
$PASS = "";
$NAME = "db_example";

$email = $_POST['email'];
$password = $_POST['password'];

$query = "SELECT * FROM `user` WHERE `user_email_id` ='".$email."'";

$link = mysqli_connect($HOST,$USER,$PASS,$NAME);

if($link){
	$result = mysqli_query($link,$query);
	$row = mysqli_fetch_assoc($result);
	if($row['user_password'] == $password){
		$_SESSION['user'] = $row['fname']." ".$row['lname'];
		header("Location: canteen_homepage.html");
	}
	else{

		echo "


			<b><h1 align='center'>Login Failed</h1></b>

        <br>
        <br>
        <br>

        <p align='center'><a href='login.html'><button class='btn btn-primary' style='height: 50px; width: 100px;'>Login Again</button></a></p>
		";
	}
}

?>