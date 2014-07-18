
	$.fn.ArabiPlusTabs = function(options) {
		
		// This is the easiest way to have default options.
	    var ArabiPlusOption = $.extend({
	        //  Set default values
	        effet: 'slide',
	    }, options );


	     function HideElement(eleme,duration) {
    		if (ArabiPlusOption.effet == 'fade') {
    			eleme.fadeOut(duration);
    		}else{
    			eleme.slideUp(duration);
    		};
    	}

    	function ShowElement(eleme,duration) {     
    		if (ArabiPlusOption.effet == 'fade') {
    			eleme.fadeIn(duration);
    		}else{
    			eleme.slideDown(duration);
    		};
    	}


	
	var refresh = window.location.hash;

	this.each(function() {
		
		var current = null ; 
	
		var id = $(this).attr('id');

		var storage = localStorage.getItem('tab'+id) ; 
		

		if ( refresh != '' && $(this).find('a[href="' + refresh + '"]').length > 0 ) {

			current = refresh;

		}

		else if( storage && $(this).find('a[href="' + storage + '"]').length > 0 ){

			current = storage;
		}

		else{
			
			current = $(this).find('a:first').attr('href');
		
		}

		$(this).find('a[href="' + current + '"]').parent('li').addClass('select');

		$(current).siblings().hide();


		$(this).find('a').click(function() {
			
			var link = $(this).attr('href');

			if( link == current){
				return false
			}

			else{

				$(this).parent('li').siblings().removeClass('select');
				$(this).parent('li').addClass('select');

				ShowElement( $(link) , 500);
				HideElement( $(link).siblings() , 500);

				current = link ;

				localStorage.setItem('tab'+id,current);
			}

		});

	});
}