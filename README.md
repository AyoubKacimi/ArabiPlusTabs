ArabiPlusTabs
=============

Simple Tab Plugin that i use in my projects , Update when i need a new features , for now i just have the following option
     		
     		warrper: ".tabs", // The container of the Tabs
	        parrentEleme : "li", // see in code 
	        tabs: "div", // 
	        effet: 'slide', // tow option slide and fade
	        selectedd: 'selected', // selected class for the tab content for css purpose only 
	        parentClass:'select', // li tab also for a css purpose to style the elements with your own class's 
	        duration: 1 // animation duration default 1 use 500 or more if you chose the slide effect , 1 for the fade

## How To use  ##

	<div class="tabs">
  		<ul>
  			<li rel="tab-1" class="select">tab One</li>
  			<li rel="tab-2">tab Two</li>
  			<li rel="tab-3">tab Three</li>
  		</ul>	
  
  		<div class="tab-1 selected">
  			
  		</div>
  
  		<div class="tab-2">
  
  		</div>
  
  		<div class="tab-2">
  
  		</div>
	</div
	

######Its up to you to use your own rel="attribute" Just be sure to use the same rel attribute on the class name  you can have your own select li and selected div class just define it in the plugin option

## Run the plugin  ##

	 $('.tabs').ArabiPlusTabs();
	 

## Run the plugin  ##

	$('.tabs').ArabiPlusTabs({
	        warrper: ".tabs",
	        parrentEleme : "li",
	        tabs: "div",
	        effet: 'slide',
	        selectedd: 'selected',
	        parentClass:'select',
	        duration: 1
	});

