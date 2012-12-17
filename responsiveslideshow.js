/* https://github.com/fuzzywalrus/Bootstrap---JQuery-Cycle--Responsive-Slide-Show-.git */
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
		$(".slidecontainer").each(function () {
			  var imgHeight = $(this).find(".slide1").height();
			  $(this).find(".blankimg").css("height", imgHeight+initfix);
	    });
	};
	$(window).bind("resize", function(){
		//clears the initfix
		initfix = 0;
		imageresize();
	});  
	imageresize();
});