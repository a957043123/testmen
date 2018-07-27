var hkey_root, hkey_path, hkey_key;
hkey_root = "HKEY_CURRENT_USER";
hkey_path = "\\Software\\Microsoft\\Internet Explorer\\PageSetup\\";
  
		
function printdiv(printpage) {
	var headstr = "<html><head><title></title></head><body>";
	var footstr = "</body>";
	
	var newstr = document.all.item(printpage).innerHTML;
	var oldstr = document.body.innerHTML;
	
	document.body.innerHTML = headstr + newstr + footstr;
	window.print(); 
	document.body.innerHTML = oldstr;
		
	return false;
}