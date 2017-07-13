
	  $( function() {
    $( "#draggable" ).draggable();

  } );

	var hs = ['<h1 class=slogan2>CREATE IT</h1>', '<h1 class=slogan1>We can</h1>', '<h1 class=slogan2>IMAGINE IT</h1>', '<h1 class=slogan1>If you can</h1>'];

	var x = setInterval(function(){ 
		$('#slogan').append(hs.pop());
		if (hs.length == 0 ) {
			window.clearInterval(x);
		}
	}, 1000);

	$(function(){
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
	        var os = $('div.main').offset().top; // pixels to the top of div1
	        var ht = $('div.main').height(); // height of div1 in pixels
	        // if you've scrolled further than the top of div1 plus it's height
	        // change the color. either by adding a class or setting a css property
	        if(scroll > os + ht){
	        	$('.nav-item').css("color","white");
	            $('a.about').css("color","#8fe415");
	        }
	    });
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
	        var os = $('div.about').offset().top; // pixels to the top of div1
	        var ht = $('div.about').height(); // height of div1 in pixels
	        // if you've scrolled further than the top of div1 plus it's height
	        // change the color. either by adding a class or setting a css property
	        if(scroll > os + ht - 300){
	        	$('.nav-item').css("color","white");
	            $('a.services').css("color","#8fe415");
	        }
	    });
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
	        var os = $('div.services').offset().top; // pixels to the top of div1
	        var ht = $('div.services').height(); // height of div1 in pixels
	        // if you've scrolled further than the top of div1 plus it's height
	        // change the color. either by adding a class or setting a css property
	        if(scroll > os + ht - 300){
	        	$('.nav-item').css("color","white");
	            $('a.team').css("color","#8fe415");
	        }
	    });
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
	        var os = $('div.team').offset().top; // pixels to the top of div1
	        var ht = $('div.team').height(); // height of div1 in pixels
	        // if you've scrolled further than the top of div1 plus it's height
	        // change the color. either by adding a class or setting a css property
	        if(scroll > os + ht - 300){
	        	$('.nav-item').css("color","white");
	            $('a.projects').css("color","#8fe415");
	        }
	    });
	    $(window).scroll(function() {
	        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
	        var os = $('div.projects').offset().top; // pixels to the top of div1
	        var ht = $('div.projects').height(); // height of div1 in pixels
	        // if you've scrolled further than the top of div1 plus it's height
	        // change the color. either by adding a class or setting a css property
	        if(scroll > os + ht - 200){
	        	$('.nav-item').css("color","white");
	            $('a.contact').css("color","#8fe415");
	        }
	    });

	});
	