function toValid(){
	//如果用户名长度大于8，且密码相同，就返回true。
	//否则返回false。
	let userLength = document.getElementById("user").value.length;
	let passValue = document.getElementById("pass").value;
	let passTwoValue = document.getElementById("pass_two").value;
	if(userLength <= 8){
		document.getElementById("user_err").innerHTML = "用户名长度必须大于8。";
		return false;
	}
	else{
		document.getElementById("user_err").innerHTML = "";
	}
	if(passValue.length <= 8){
		document.getElementById("pass_err").innerHTML = "密码长度必须大于8。";
		return false;
	}
	else{
		document.getElementById("pass_err").innerHTML = "";
	}
	if(passValue !=passTwoValue){
		document.getElementById("pass_two_err").innerHTML = "两个密码必须相同。";
		return false;
	}
	else{
		document.getElementById("pass_two_err").innerHTML = "";
	}
	return true;
}