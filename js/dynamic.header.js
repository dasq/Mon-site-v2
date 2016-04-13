function jsUpdateSize(){
				// Get the dimensions of the viewport
				var height = window.innerHeight ||
							 document.documentElement.clientHeight ||
							 document.body.clientHeight;
							 
				var heightBanner = height - 60;
				//change the value of the height
				$("#header").css({"height": heightBanner,}); 
			};
			window.onload = jsUpdateSize;       // When the page first loads
			window.onresize = jsUpdateSize;     // When the browser changes size