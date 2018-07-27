<!--
// JavaScript Document

var dblClickFlg = false;
function submitForm(form) {
	if (!dblClickFlg) {
		form.submit();
	} else {
		alert("请求处理中，请稍候...");
	}
	 
	dblClickFlg = true;
}


var flag = false;
function dbClickCheck()
{
	if (flag) { 
		alert("请求处理中，请稍候..."); 
		return false; 
	}
	flag = true;
	return true;
}
//-->