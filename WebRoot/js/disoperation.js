// 屏蔽鼠标右键
function document.oncontextmenu() {
	event.returnValue = false;
} 

// 屏蔽F1帮助
function window.onhelp() {
	return false
}

function document.onkeydown() { 
	if ((window.event.altKey) 
  		&& ((window.event.keyCode == 37)   //屏蔽 Alt+ 方向键 ← 
   		|| (window.event.keyCode == 39))) {  //屏蔽 Alt+ 方向键 → 
 		alert("不准你使用ALT+方向键前进或后退网页！"); 
 		event.returnValue = false; 
	} 

    /* 注：这还不是真正地屏蔽 Alt+ 方向键， 
 		因为 Alt+ 方向键弹出警告框时，按住 Alt 键不放， 
 		用鼠标点掉警告框，这种屏蔽方法就失效了。以后若 
 		有哪位高手有真正屏蔽 Alt 键的方法，请告知。
 	*/ 

	if ((event.keyCode == 116) // 屏蔽 F5 刷新键 
  		|| (event.ctrlKey && event.keyCode == 82)) { //Ctrl + R 
 		event.keyCode = 0; 
 		event.returnValue = false; 
 	} 

    // 屏蔽F11
	if (event.keyCode == 122) {
		event.keyCode = 0;
		event.returnValue=false;
	}

	// 屏蔽 Ctrl+n
	if (event.ctrlKey && event.keyCode == 78) {
  		event.returnValue = false;
	}

	// 屏蔽 shift+F10
	if (event.shiftKey && event.keyCode == 121) {
  		event.returnValue = false;
	}
	
	// 屏蔽 shift 加鼠标左键新开一网页
	if (window.event.srcElement.tagName == "A" && window.event.shiftKey) {  
  		window.event.returnValue = false; 
	}

	// 屏蔽Alt+F4
	if ((window.event.altKey) && (window.event.keyCode == 115)) { 
  		window.showModelessDialog("about:blank","","dialogWidth:1px;dialogheight:1px"); 
  		return false; 
	} 
} 