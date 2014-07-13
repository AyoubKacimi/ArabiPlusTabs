$.fn.ArabiPlusTabs = function(options) {
		
		// This is the easiest way to have default options.
	    var ArabiPlusOption = $.extend({
	        //  Set default values
	        warrper: ".tabs",
	        parrentEleme : "li",
	        tabs: "div",
	        effet: 'slide',
	        selectedd: 'selected',
	        parentClass:'select',
	        duration: 1
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

    /*Hide all Div then show selected One*/	
	HideElement( this.find( ArabiPlusOption.tabs ) , ArabiPlusOption.duration  );
	ShowElement( this.find( ArabiPlusOption.tabs + '.' + ArabiPlusOption.selectedd) , ArabiPlusOption.duration );

	    
	     localStorage.currentLiChose = $('li').hasClass('select');


	/*When The Li is clicked chek for the current one the show Div if is dose not match to the current one*/	
	$( ArabiPlusOption.parrentEleme ).click(function(event) {

		if ( !$(this).hasClass(ArabiPlusOption.parentClass)) {

			var $rel = $(this).attr('rel');

			/*remove selected Class the add't to this elem*/
			$(ArabiPlusOption.parrentEleme).removeClass(ArabiPlusOption.parentClass);
			$(this).addClass(ArabiPlusOption.parentClass);

			HideElement( $(	ArabiPlusOption.warrper + '>' + ArabiPlusOption.tabs) , ArabiPlusOption.duration);
			ShowElement ($(  ArabiPlusOption.tabs + '.' + $rel ) , ArabiPlusOption.duration );

			$(  ArabiPlusOption.warrper + '>' + ArabiPlusOption.tabs).removeClass(ArabiPlusOption.selectedd);
			$(  ArabiPlusOption.tabs + '.' + $rel ).addClass(ArabiPlusOption.selectedd);
			
		};

	});
};
