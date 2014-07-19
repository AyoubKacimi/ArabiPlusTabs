ArabiPlusTabs
=============

Simple Tab Plugin that i use in my projects , Update when i need a new features , for now i just have the following options
     		
     	

## How To use  ##

	
	
		
		<ul id="tab-2" class="tab">
			<li><a href="#a1">TAB 1</a></li>
			<li><a href="#a2">TAB 2</a></li>
			<li><a href="#a3">TAB 3</a></li>
		</ul>
	
		
		<div>
			<li id="a1"> </li>
			
			<li id="a2"> </li>
			
			<li id="a3"> </li>	
		</div>

	

######Its up to you to use your own rel="attribute" Just be sure to use the same rel attribute on the class name  you can have your own select li and selected div class just define it in the plugin option

## Run the plugin  ##

	 $('.tabs').ArabiPlusTabs();
	 

## Plugin Options  ##

	$('.tabs').ArabiPlusTabs({
	        effet: 'slide',
	        currenTap : 'SetClass' // work on it select the current tab
	});

