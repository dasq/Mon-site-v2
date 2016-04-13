		
		
		$(document).ready(function(){
			$("#menu-container").sticky({topSpacing:0});
			
			var width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
				
			var height = window.innerHeight ||
							 document.documentElement.clientHeight ||
							 document.body.clientHeight;
			if (width < 767) {
				var heightBrand = 0;
				$("#brand").sticky({topSpacing:heightBrand, getWidthFrom: '#brand'});
				//$("#brand").css({"margin-top": -heightBrand,}); 
			} 
			else {
				var heightBrand = height - 75;
				$("#brand").sticky({topSpacing:heightBrand, getWidthFrom: '#brand'});
				$("#brand").css({"margin-top": -heightBrand,}); 
			}
						
		});