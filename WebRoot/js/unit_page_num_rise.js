	$(document).ready(function(){	
		print_page_num_rise1();
	});

	function print_page_num_rise1(){
		var print_page_num = $(".print_page_num");
		var indexStart = parseInt(1);
		var inputValue = parseInt(1);
		for(var i = 0; i < print_page_num.length; i ++ ){
				print_page_num.siblings("input").slice(i,indexStart++).val(inputValue++);
		}
		
}