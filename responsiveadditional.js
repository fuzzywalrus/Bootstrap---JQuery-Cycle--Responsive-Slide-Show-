//Additional Inits for demos of slide show

$(document).ready(function() {
    $('#slideshow2').after('<ul id="pager2">').cycle({ 
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
	$('#slideshow3').after('<ul id="pager3">').cycle({ 
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
	$('#slideshow4').after('<ul id="pager3">').cycle({ 
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