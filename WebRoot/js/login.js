var dataValue ;
	
		$(document).ready( function() {
			
			$.get("select/user-select!select.action",null,function (data){
				dataValue = data;
				
				var  span = $("#userName");
				
				for (var objId in data) {
					
					 var objValue = data[objId];
					
					span.append("<option style='width:58%' value='"+objValue.loginName+"'>" + objValue.loginName+ "</option>");
				}
			
				var offsetUserName = document.cookie.indexOf("_user_name");
				offsetUserName += "_user_name".length;
				var endUserName = document.cookie.indexOf(";",offsetUserName); 
				var cookieUserNameValue = unescape(document.cookie.substring(offsetUserName + 1, endUserName));
				var cookiePasswordValue = unescape(document.cookie.substring(endUserName, endUserName + 1));
				aaa(cookieUserNameValue);
				
			},"json");
			
			$("#loginForm").validate();
				
		});


		/*设置Cookie值*/
			function writeCookie(hours) {         
				  var save = $("#save");
				  var flag = save.attr("checked");
			      var expire = "";     
			      var obj=document.getElementById("userName");
				  var selectValue = obj.options[obj.selectedIndex].value;
				  var passwordValue = $("#password").val();
				  
				  for (var passwordId in dataValue) {
					  if(passwordValue == dataValue[passwordId].password && flag ){
						  
						      if(hours != null) {     
						          expire = new Date((new Date()).getTime() + hours * 3600000);     
						          expire = ";   expires=" + expire.toGMTString();     
						      }         
						      document.cookie = escape(selectValue) + "=" + escape(passwordValue) + expire;
						      document.cookie = "_user_name" + "=" + escape(selectValue) + expire;
						     
						      
					   } else if (passwordValue == dataValue[passwordId].password && !flag ){
						      if(hours != null) {     
						          expire = new Date((new Date()).getTime() + hours * 3600000);     
						          expire = ";   expires=" + expire.toGMTString();     
						      }         
						      document.cookie = escape(selectValue) + "=" + escape("") + expire;
						      
					   }
				   }             
			}    
			function aa(){
				
			      var obj=document.getElementById("userName");
			      var passwordValue = "";
			      var offsetUserName = 0;
			     //alert(obj.selectedIndex);
			      var selectValue = obj.options[obj.selectedIndex].value;

				  for (var passwordId in dataValue) {
					  if(selectValue == dataValue[passwordId].loginName){
						  passwordValue = dataValue[passwordId].password;
					   }
				   }     
				   offsetUserName=document.cookie.indexOf("; " + escape(selectValue));
				   if(offsetUserName != -1){
						  
					   offsetUserName += ("; " + escape(selectValue)).length;
					   name =  unescape(document.cookie.substring(offsetUserName + 1, offsetUserName + (escape(passwordValue)).length + 1));
					   if(passwordValue == name ){
						   $("#password").val(name);
						   $("#save").attr("checked",true);
					   }else{
						   $("#password").val("");
						   $("#save").attr("checked",false);
				  		 }
				   }else{
					   offsetUserName=document.cookie.indexOf(escape(selectValue));
					   if(offsetUserName != -1){
						   offsetUserName += escape(selectValue).length;
						   name =  unescape(document.cookie.substring(offsetUserName + 1, offsetUserName + (escape(passwordValue)).length + 1));
						   if(passwordValue == name ){
							   $("#password").val(name);
							   $("#save").attr("checked",true);
						   }else{
							   $("#password").val("");
							   $("#save").attr("checked",false);
					  		 }
						   
						   }else{
							   $("#password").val("");
							   $("#save").attr("checked",false);
						   }
				   }
				  
				   expire = new Date((new Date()).getTime() + 365 * 3600000);     
			       expire = ";   expires=" + expire.toGMTString();     
				   document.cookie = "_user_name" + "=" + escape(selectValue) + expire;
			}

			function aaa(username){
				 
			      var obj=document.getElementById("userName");
			      var passwordValue = "";
			      var offsetUserName = -1;
			      var selectValue = username;

				  for (var passwordId in dataValue) {
					  if(selectValue == dataValue[passwordId].loginName){
						  passwordValue = dataValue[passwordId].password;
					   }
				   }     
				  
				   
				   offsetUserName=document.cookie.indexOf("; " + escape(selectValue));
				  
				   if(offsetUserName != -1){
					   offsetUserName += ("; " + escape(selectValue)).length;
					   name =  unescape(document.cookie.substring(offsetUserName+1, offsetUserName + (escape(passwordValue)).length + 1));
					  $("#userName").val(username);
					   if(passwordValue == name ){
						   $("#password").val(name);
						   $("#save").attr("checked",true);
					   }else{
						   $("#password").val("");
						   $("#save").attr("checked",false);
					   }
				   }else{
					   offsetUserName=document.cookie.indexOf(escape(selectValue));
					   offsetUserName += escape(selectValue).length;
					   name =  unescape(document.cookie.substring(offsetUserName+1, offsetUserName + (escape(passwordValue)).length + 1));
					 
					  $("#userName").val(username);
					   if(passwordValue !="" &&  name != "" && passwordValue == name){
						   $("#password").val(name);
						   $("#save").attr("checked",true);
					   }else{
						   $("#password").val("");
						   $("#save").attr("checked",false);
					   }
					 
				   }
			}