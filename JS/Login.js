// ===================
//    LOGIN SYSTEM
// ===================

function isUserLogged() {
	const cookie = document.cookie;
	return cookie.includes("logged=true");
}

<?php
session_start();
session_destroy();
header("Location: ../HTML/Loginout.html");
exit;
?>

if(isUserLogged()) {
	window.location.href = "../HTML/Cart.html";
}
 
const form = document.querySelector("#login-form");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const nickInput = document.querySelector("#nick");
	const confirmInput = document.querySelector("#confirm");
        const mailInput = document.querySelector("#mail");
	const passwordInput = document.querySelector("#psw");
	
	const nick = nickInput.value.trim();
	const confirm = confirmInput.value.trim();
	const mail = mailInput.value.trim();
	const password = passwordInput.value.trim();
 
	if(nick.length < 3 || nick.length > 30) {
	   form.reset();
	   nickInput.classList.add("input-invalid");
	   nickInput.setCustomValidity("حط اسم من 3 الئ 30");
	   nickInput.reportValidity();
 
	   setTimeout(() => {
		  nickInput.classList.remove("input-invalid");
		  nickInput.setCustomValidity("");
		}, 2000);
	   return;
	}
			if(mail.length < 8 || mail.length > 69) {
	   form.reset();
	   mailInput.classList.add("input-invalid");
	   mailInput.setCustomValidity("ايميلك خطأ تاكد من الايميل");
	   mailInput.reportValidity();
 
	   setTimeout(() => {
		  mailInput.classList.remove("input-invalid");
		  mailInput.setCustomValidity("");
		}, 2000);
	   return;
	}
		if(password.length < 8 || password.length > 69) {
	   form.reset();
	   passwordInput.classList.add("input-invalid");
	   passwordInput.setCustomValidity("حط باسورد من 8 الئ 69");
	   passwordInput.reportValidity();
 
	   setTimeout(() => {
		  passwordInput.classList.remove("input-invalid");
		  passwordInput.setCustomValidity("");
		}, 2000);
	   return;
	}
 
	if(confirm.length < 3 || confirm.length > 30) {
		form.reset();
		confirmInput.classList.add("input-invalid");
		confirmInput.setCustomValidity("تحقق من الاسم ربما لايتطابق او عدد الاحرف ناقصه");
		confirmInput.reportValidity();
  
		setTimeout(() => {
			confirmInput.classList.remove("input-invalid");
			confirmInput.setCustomValidity("");
		}, 2000);
		return;
	}
 
	if(nick !== confirm) {
		form.reset();
		confirmInput.classList.add("input-invalid");
		confirmInput.setCustomValidity("The values ​​must be the same.");
		confirmInput.reportValidity();
  
		setTimeout(() => {
			confirmInput.classList.remove("input-invalid");
			confirmInput.setCustomValidity("");
		}, 2000);
		return;
	}
 
	const date = new Date();
	date.setTime(date.getTime() + 12 * 60 * 60 * 1000);
	const expires = ";expires=" + date.toUTCString() + ";path=/"; 
 
	document.cookie = "nickname=" + nick + expires;
	document.cookie = "logged=true" + expires;
 
	nickInput.value = "";
	confirmInput.value = "";
	window.location.href = "../HTML/Cart.html";
});
