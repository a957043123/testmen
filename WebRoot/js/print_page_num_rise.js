	$(document).ready(function(){	
		print_page_num_rise1();
	});

	function print_page_num_rise1(){
		var print_page_num = $(".print_page_num");
		var indexStart = parseInt(1);
		var inputValue = parseInt(1);
		for(var i = 0; i < print_page_num.length; i ++ ){
			if(i == 2){
				print_page_num.siblings("input").slice(i,indexStart++).val(inputValue++ + "-5");
			}
			if(i == 3){
				inputValue = parseInt(6);
				print_page_num.siblings("input").slice(i,indexStart++).val(inputValue++);
			}
			if(i > 3){
				print_page_num.siblings("input").slice(i,indexStart++).val(inputValue++);
			}
			if(i < 2){
				print_page_num.siblings("input").slice(i,indexStart++).val(inputValue++);
			}
		}
	}
	
	function print_page_num_rise2(inputNode){
		var inputValue = inputNode.value;
		if(inputValue.length >= 3){
			var i,j;
			var index_ = inputValue.indexOf('-');
			var strTemp="0123456789";
			for (i=0; i<inputValue.length; i++){
				if(i != index_){
					j=strTemp.indexOf(inputValue.charAt(i));
					 if(j == -1){
						 $("span").html("<font color='red'>确保输入是数字，数字之间以只能有一个（-）分隔!</font>");
						 inputNode.value=inputValue;
						 return;
					}
				}
			}
			var indexStart = $(inputNode).siblings("input").slice(0,1).val();
			var inputValueArray = inputValue.split('-');
			var begin = parseInt(inputValueArray[0]);
			var end = parseInt(inputValueArray[1]);
			if(begin >= end){
				 $("span").html("<font color='red'>分隔符（-）之前数字不能大于等于后面数字！</font>");
				 inputNode.value = inputValue;
				
				return;
			}
			 $("span").html("");
			var print_page_num = $(".print_page_num");
			var indexEnd = indexStart + 1;
			for(var index = indexStart; index < print_page_num.length; index ++ ){
				print_page_num.siblings("input").slice(indexStart ++,indexEnd ++).val(++ end);
			}
		}
		
	}