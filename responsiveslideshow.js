$(document).ready(function() {
//JQuery Cycle code
    $('#slideshow').after('<ul id="pager">').cycle({ 
		fx:     'fade',
		//prev: '#prev',
		//next: '#next',
		//pager:  '#pager',
		containerResize: 0,
		width: '100%',
		fit: 1,
	  	pagerAnchorBuilder: function(idx, el) {
	    return '<li><a href="cpage_7#"></a></li>';
	    }
	});
	
//This resizes the blank image in the resize example
	//initglitch fix 
	var initfix = 18;
	
	///on resize, set blank image height
	function imageresize() { 
		var imgHeight = $("#slide1").height();
		$("#blankimg").css("height", imgHeight+initfix);
	}
	$(window).bind("resize", function(){
		//clears the initfix
		initfix = 0;
		imageresize();
	});  
	imageresize();
});