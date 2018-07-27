function checkIdcard(idcard){ 
	var Errors=new Array( 
		"验证通过!", 
		"身份证号码位数不对!", 
		"身份证号码出生日期超出范围或含有非法字符!", 
		"身份证号码不合法!", 
		"身份证地区非法!" 
	); 
var area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}  
var idcard,Y,JYM; 
var S,M; 
var idcard_array = new Array(); 
idcard_array = idcard.split(""); 
//地区检验 
if(area[parseInt(idcard.substr(0,2))]==null) 
	return Errors[4]; 
//身份号码位数及格式检验 
switch(idcard.length){ 
	case 15: 
if ( (parseInt(idcard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idcard.substr(6,2))+1900) % 100 == 0 && (parseInt(idcard.substr(6,2))+1900) % 4 == 0 )){ 
	ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性 
} else { 
	ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性 
} 
	if(ereg.test(idcard)) 
		return Errors[0]; 
	else 
		return Errors[2]; 
		break; 
	case 18: 
//18位身份号码检测 
//出生日期的合法性检查  
//闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9])) 
//平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8])) 
if ( parseInt(idcard.substr(6,4)) % 4 == 0 || (parseInt(idcard.substr(6,4)) % 100 == 0 && parseInt(idcard.substr(6,4))%4 == 0 )){ 
	ereg=/^[1-9][0-9]{5}[1-2]{1}[0-9]{1}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式 
} else { 
	ereg=/^[1-9][0-9]{5}[1-2]{1}[0-9]{1}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式 
} 
if(ereg.test(idcard)){//测试出生日期的合法性 
//计算校验位 
	S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 
		+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 
		+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 
		+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 
		+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 
		+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 
		+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 
		+ parseInt(idcard_array[7]) * 1  
		+ parseInt(idcard_array[8]) * 6 
		+ parseInt(idcard_array[9]) * 3 ; 
	Y = S % 11; 
	M = "F"; 
	JYM = "10X98765432"; 
	M = JYM.substr(Y,1);//判断校验位 
if(M == idcard_array[17]) 
	return Errors[0]; //检测ID的校验位 
else 
	return Errors[3]; 
} 
else 
	return Errors[2]; 
break; 
default: 
return Errors[1]; 
break; 
} 
} 

//验证身份证号码页面调用方法.
function checkedShenfen(){
	
	var whitespace = " \t\n\r"; 
	//flag标志 -- flag=true 用于判断身份证号长度大于零并且号码不全是("") 传入真正的验证方法进行验证.
	//           flag=false用于判断身份证号长度等于零或者号码全是("").
	var flag = false;
	//取得验证身份证回显信息的节点 .
	var shenfenMessage = $("#shenfenMessage");
	//取得身份证类型节点并取节点值.
	
    var idTpNode = $("#idtp").find("select").get(0);
	var idTpIndex = idTpNode.options[idTpNode.selectedIndex];
	var idTpValue = $(idTpIndex).text();
	//取得身份证号码.
	var idno = $("#idno").find("input").val();
	//判断是否是 是身份证件. 34为身份证件
	if(idTpValue == '身份证') {
	//身份证类型是身份证件，判断身份证号是否是("")，如果是就回显（请输入身份证号码）.
		//alert(idno.length);//调试方法.
		if(idno == null || idno ==""){
			//身份证号是("")，初始化回显信息节点为("").
			shenfenMessage.html("");
			//回显信息，颜色为红色.
			shenfenMessage.html("<font color='red' size='2'>" + '请输入身份证号码' + "</font>");
			//如果身份证号码长度大于零.
		}else if(idno != "" && idno.length > 0){
			//循环身份证号码每一个字符判断是否是("").
			for(var i = 0 ; i < idno.length; i ++){
				//如果身份证号码每一位都是("")，页面调用方法结束,否则更改flag标志位为true,进入下一判断.
				var c= idno.charAt(i);
				if(whitespace.indexOf(c)< 0){
					flag = true;
					break;
				}
				//身份证号全是("")，初始化回显信息节点为("").
				shenfenMessage.html("");
				//回显信息，颜色为红色.
				shenfenMessage.html("<font color='red' size='2';>" + '请输入身份证号码' + "</font>");
			}
		}
		//如果身份证号码长度大于零并且不都是由("")组成.
		if(flag){
			//调用真正的验证方法进行验证并返回信息，message 为回显信息.
			var message = checkIdcard(idno); 
			//如果回显信息不为（验证通过！）.
			if(message != '验证通过!'){
				//初始化回显信息节点.
				shenfenMessage.html("");
				//回显信息并设置为红色.
				shenfenMessage.html("<font color='red' size='2'>" + message + "</font>");
			}else{
				//如果（验证通过！）回显信息为空.
				shenfenMessage.html("");
			}
		}
	}else{
		shenfenMessage.html("");
	}
}

$(document).ready(function(){	
	//身份证验证 ---输入时验证.
	$("#idtp").find("select").blur(function(){
		if($("#idno").find("input").val()!=""){
			checkedShenfen();
		}
	});
	//身份证验证 ---输入时验证.
	$(".shenfenRequired").blur(function(){
		 checkedShenfen();
	});
	$("#idtp").find("select").blur(function(){
		if($("#idno").find("input").val()!=""){
			checkedShenfen();
		}
	});
	//身份证验证---提交 时验证.
	$(".shenfenSubmit").click(function(){
		var inputValue = $("#idno").find("input").val();
		if(inputValue == null || inputValue ==""){
			alert("请输入身份证号");
			return false;
		}
		var shenfenMessageNode = $("#shenfenMessage");
		var shenfenMessageValue= $("#shenfenMessage").children().html();
		if(shenfenMessageValue.length != 0){
			$("#shenfenMessage").html("");
			alert(shenfenMessageValue);
			return false;
		}else{
			return true;
		}
	});
});
