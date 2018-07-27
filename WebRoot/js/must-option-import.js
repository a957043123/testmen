//要件勾选函数
		function importMark( papers){
			//
			 $.post("must-option-import-holder!getMustOptionIpmorts.action?papers=" + papers,null,function(data){
				 	var obj = data;
				 	var firstInputNode = $("label").siblings("input").slice(0,1).get(0);
				 	var inputName = firstInputNode.getAttribute("name");
					var inputNodes = document.getElementsByName(inputName);
				
					for(var i = 0; i < inputNodes.length; i++){
						var inputNode = inputNodes[i];
						var inputValue = inputNode.value;
						 for (var objId in obj) {
					            var objValue = obj[objId];
					            if( inputValue == objValue.id){
									var abc =$(inputNode);
									abc.attr("checked","checked");
									abc.attr("readonly","readonly");
									abc.attr("title","此要件为必选要件^_^");
									$(inputNode).click(function(){
											event.returnValue=false;
									});
						        }
					     }
					}
				},"json");
			 
		}