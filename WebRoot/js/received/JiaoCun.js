$(document).ready(function() {
	$("#propertyCode").blur(function (){
		//alert("我被点击了");
		//得到页面上的房产图号并且将这个房产图号传到方法中去
		var propertyCode=$("#propertyCode").val();
		//alert(propertyCode);
		$.get("received-first!verificationPropertyCode.action?d="+new Date(),{propertyCode:propertyCode},
			function (data){
				//alert(data);
				if(data){
				//	alert(data+"+++++++++");
					var houseXinXi=data.split("@");
					$("#housesArea").val(houseXinXi[0]);
					$("#housesLocated").val(houseXinXi[1]);
					$("#housesMoney").val(houseXinXi[2]);
					$("#personFlag").val("1");
				}
				else{
					//alert(data);
					$("#housesArea").val("");
					$("#housesLocated").val("");
					$("#housesMoney").val("");
					$("#personFlag").val("0");
				}
			});
	});
	//检查单位账号是否已用
	$("#transCode").blur(function () {

		var transCode = $("#transCode").val();
		$.get("received-first!verificationTranscode.action?d=" + new Date(), {danweizhanghao:transCode}, function (data) {
			if(data!=""){
				alert(data);
				$("#transCode").val("");
			}
		});
	});
});