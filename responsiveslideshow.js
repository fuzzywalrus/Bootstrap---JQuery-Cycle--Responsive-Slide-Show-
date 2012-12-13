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
});