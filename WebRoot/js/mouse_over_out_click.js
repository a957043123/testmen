var org_tr1_color;
var org_tr2_color;
var org_tr_color;
$(document).ready(function(){	
$(".tr1").click(function(){
	
	if(org_tr1_color != null){
		org_tr1_color.css('background','#E4EEEF');
	}
	if(org_tr2_color != null){
		org_tr2_color.css('background','#FFFFFF');
	}
	var _color = $(this);
	org_tr1_color = _color;
	org_tr_color = _color;
	_color.css('background','powderblue');
	
});
$(".tr2").click(function(){
	if(org_tr1_color != null){
		org_tr1_color.css('background','#E4EEEF');
	}
	if(org_tr2_color != null){
		org_tr2_color.css('background','#FFFFFF');
	}

	var _color = $(this);
	org_tr2_color = _color;
	org_tr_color = _color;
	_color.css('background','powderblue');
	
});

$(".tr1").mouseover(function(){
	var _color = $(this);
	_color.css('background','threedlightshadow');
	if(org_tr_color != null && org_tr1_color != null && org_tr_color == org_tr1_color ){
		org_tr_color.css('background','powderblue');
	}
	
});
$(".tr2").mouseover(function(){
	var _color = $(this);
	_color.css('background','threedlightshadow');
	if(org_tr_color != null && org_tr2_color != null && org_tr_color == org_tr2_color ){
		org_tr_color.css('background','powderblue');
	}
	
});

$(".tr1").mouseout(function(){
	var _color = $(this);
	_color.css('background','#E4EEEF');
	if((org_tr_color != null) && (org_tr1_color != null) && (org_tr_color == org_tr1_color) ){
		org_tr_color.css('background','powderblue');
	}
	
});

$(".tr2").mouseout(function(){
	var _color = $(this);
		_color.css('background','#FFFFFF');
	
		if(org_tr_color != null && org_tr2_color != null && org_tr_color == org_tr2_color ){
		
			org_tr_color.css('background','powderblue');
		}
});
});
