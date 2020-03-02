1]	The Document Ready Event

		$(document).read(function(){
			
		});

		$(function(){
			
		});
		
2]	jQuery CSS Selectors : Main Link : https://www.w3schools.com/cssref/css_selectors.asp
		
		jQuery selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, 
		attributes, values of attributes and much more
		
		Select and style all elements with class="intro" -> .intro 	{background-color: yellow;}
		
		* Style all <p> elements with class="intro" 			 ->	p.intro {background-color: yellow;}
		
		 Style the element with id="intro"								 -> #firstname{background-color: yellow;}	
		
		 Select all elements, and set their background color to yellow -> * {background-color: yellow;}
		
		* Select all elements inside <div> elements and set their background color to yellow -> div * {background-color: yellow;}
		  
		* Select and style all <p> elements	-> p{background-color: yellow;}
      
		* Select and style all <h1> elements AND all <p> elements -> h1, p {background-color: yellow;}
	    
		* Select and style every <p> element that is inside <div> elements -> div p {background-color: yellow}
		  
		* Select and style every <p> element where the parent is a <div> element -> div > p {background-color: yellow}
		
		 Select and style every <p> element that are placed immediately after <div> elements -> div + p {background-color: yellow}
		( after div close if p element found then it will apply )
		
		 Set a background color for all <ul> elements that are preceded by a <p> element with the same parent -> p ~ ul{background-color: yellow}
		
		* Style all <a> elements with a target attribute -> a[target] {background-color: yellow;}
		
		* Style <a> elements with a target="_blank" -> a[target=_blank] {background-color: yellow;} 
		  refer:https://www.w3schools.com/cssref/tryit.asp?filename=trycss_dim_width_inputfocus
		
		* Select and style elements with a title attribute containing the word "flower" -> [title~=flower] {background-color: yellow;} 
		  refer:https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_attribute_value_contains (note: case sensative)
		 
		* Select and style elements, where the lang attribute's value starts with "en" -> [lang|=en] {background-color: yellow;}
		
		* Set a background color on all <div> elements that have a class attribute value that begins with "test" -> div[class^="test"] {background: #ffff00;}
		
		* Set a background color on all <div> elements that have a class attribute value that ends with "test" -> div[class$="test"] {background: #ffff00;}
		
		* Set a background color on all <div> elements that have a class attribute value containing "test" -> div[class*="test"] {background: #ffff00;}
		
		* Select and style the active link -> a:active {background-color: yellow;}
		* Insert some text after the content of each <p> element  	->  p::after 	{content: " - Remember this";} 		refer: https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_after
		* Insert some text before the content of each <p> element 	->  p::before {content: " - Remember this";} 
		* Set the height and width for all checked <input> elements	-> input:checked {height: 50px;width: 50px;}
		* Add a red shadow color to the default input element				-> input:default {box-shadow: 0 0 1px 1px red;} refer:https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_sel_default
		
		* Set a background color for all disabled input elements of type="text" -> input[type="text"]:disabled {background: #dddddd;}
		* Specify a background color for empty <p> elements -> p:empty {background: #ff0000;} refer: https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_empty
		* Set a background color for all enabled <input> elements of type="text" -> input[type="text"]:enabled {background: #ffff00;} 
		* Select and style every <p> element that is the first child of its parent -> p:first-child {background-color: yellow;} refer: https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_firstchild 
		* Select and style an input field when it gets focus -> input:focus {background-color: yellow;}
		* Select and style a link when you mouse over it -> a:hover {background-color: yellow;}
		* Specify a background color for every <p> element that is the second child of its parent -> p:nth-child(2) {background: red;}
		
		
3] jQuery Selectors: refer : https://www.w3schools.com/jquery/trysel.asp
		
		$("#Lastname") 										: The element with id="Lastname"
		$(".Lastname")										: All elements with class="intro"
		$(".intro, #Lastname")						: All elements with class="intro", and the element with id="Lastname
		$("h1")														: All <h1> elements
		$("h1, p")												: All <h1> elements and all <p> elements.
		$("p:first")											: The first <p> element
	  $("p:last")												: The last <p> element
		$("tr:even")											: All even <tr> elements
		$("tr:odd")												: All odd <tr> elements.
		$("p:first-child")								: All <p> elements that are the first child of their parent [select only 1st element rest elements will be avoid]
		$("p:first-of-type")							: All <p> elements that are the first <p> element of their parent
		$("p:last-child")									: All <p> elements that are the last child of their parent
		$("p:last-of-type")								: All <p> elements that are the last <p> element of their parent.
		$("li:nth-child(1)")							: All <li> elements that are the first child of their parent
		$("li:nth-last-child(1)")					: All <li> elements that are the first child of their parent, counting from the last child element of the parent
		$("li:nth-of-type(2)")						: All <li> elements that are the second <li> element of their parent.
		$("li:nth-last-of-type(2)")				: All <li> elements that are the second <li> element of their parent, counting from the <li> element
		$("div > p")											: All <p> elements that are a direct child of a <div> element
		$("div p")												: All <p> elements that are descendants of a <div> element.
		$("ul + p")												: The <p> element that are next to each <ul> elements
		$(":contains(Duck)")							: All elements which contains the text "Duck"
		$("div:has(p)")										: All <div> elements that have a <p> element.
		$("p:hidden")											: All hidden <p> elements (which are not visible in the Result)
		* $("table:visible")							: All visible tables
		
		$("[id]")													: All elements with an id attribute
		$("[id=my-Address]")							: All elements with an id attribute value equal to "my-Address"
		$("p[id!=my-Address]")						: All <p> elements without an id attribute value equal to "my-Address"
		$("[id$=ess]")										: All elements with an id attribute value ending with "ess"
		$("[id|=my]")											: All elements with an id attribute value equal to "my" or starting with "my" followed by a hyphen (-)
		$("[id^=L]")											: All elements with an id attribute value starting with the letter "L"
		$("[title~=beautiful]")						: All elements with a title attribute value containing the word "beautiful"		
		$("[id*=s]")											: All elements with an id attribute value containing the string "s"
		
		$(':type') for select input and any other element by type 
		
		$(":input")												: All form elements
		$(":text")												: All form elements with type="text"
		$(":password")										: All form elements with type="password"
		$(":radio")												: All form elements with type="radio"
		$(":checkbox")										: All form elements with type="checkbox"
		$(":submit")											: All form elements with type="submit"
		$(":button")											: All form elements with type="button", and all <button> elements.
		$(":image")												: All form elements with type="image"
		$(":file")												: All form elements with type="file"
		$(":enabled")											: All enabled form elements
		$(":disabled")										: All disabled form elements
		$(":selected")										: All selected options in a drop-down list.
		$(":checked")											: All checked form elements.
		
4] jQuery Methods to Manipulat DOM Object
		$('').append('html');																		: Inserts content to the end of element(s) which is specified by a selector.
		$('').before('html');																		: Inserts content (new or existing DOM elements) before an element(s) which is specified by a selector. 	
		$('').after('html'); 																		: Inserts content (new or existing DOM elements) after an element(s) which is specified by a selector.	
		$('').remove(); 																				: Removes element(s) from DOM which is specified by selector.	
		$('html').replaceAll('element');												: Replace target element(s) with specified element.	
		$('element which is going to wrap').wrap('wrap html');	: Wrap an HTML structure around each element which is specified by selector.	
		$('').prepend('html');																	: it will add html before specifie element								

5] Manipulate HTML Attributes using jQuery
		$('').attr(); 															: Get or set the value of specified attribute of the target element(s).
		$('').prop(); 															: Get or set the value of specified property of the target element(s).
		$('').html(); 															: Get or set html content to the specified target element(s).
		$('').text(); 															: Get or set text for the specified target element(s).
		$('').val();																: Get or set value property of the specified target element.

6] Traversing DOM Elements using jQuery
		$('').each(index,element)										: Iterate over specified elements and execute specified call back function for each element.
		$('').children() 														: Get all the child elements of the specified element(s)
		$('').children().eq(0)											: Get all the child elements of the specified element(s) using index value.
		$('').find() 																: Get all the specified child elements of each specified element(s).
		$('').first() 															: Get the first occurrence of the specified element.
		$('').next() 																: Get the immediately following sibling of the specified element.
		$('').parent() 															: Get the parent of the specified element(s).
		$('').prev() 																: Get the immediately preceding sibling of the specified element.
		$('').siblings() 														: Get the siblings of each specified element(s)
	
7] CSS Manipulation using jQuery
		$('').css() 																: Get or set style properties to the specified element(s).
		$('').addClass() 														: Add one or more class to the specified element(s).
		$('').hasClass() 														: Determine whether any of the specified elements are assigned the given CSS class.
		$('').removeClass() 												: Remove a single class, multiple classes, or all classes from the specified element(s).
		$('').toggleClass() 												: Toggles between adding/removing classes to the specified elements 	
		$('').removeAttr() 													: 		
		
8] jQuery Method Chaining :
		there is a technique called chaining, that allows us to run multiple jQuery commands, one after the other, on the same element(s).
		This way, browsers do not have to find the same element(s) more than once.
		To chain an action, you simply append the action to the previous action. 
		
		Exmple: $("#p1").css("color", "red").slideUp(2000).slideDown(2000);	
		
9] *jQuery Callback Functions (anonymous function); refer: https://www.w3schools.com/jquery/jquery_callback.asp		

		JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors.		
		To prevent this, you can create a callback function.
		A callback function is executed after the current effect is finished.		
		
		$(selector).hide(speed,callback);
		--------------------------------------------------------------------------------------------------------------------------------------------------------
10] What is Traversing? : jQuery traversing, which means "move through". refer: https://www.w3schools.com/jquery/jquery_ref_traversing.asp		
		Start with one selection and move through that selection until you reach the elements you desire.
		
		Return the first ancestor of <span>, that is an <ul> element -> $("span").closest("ul").css({"color": "red", "border": "2px solid red"});
		The DOM tree: This method traverse upwards from the current element, all the way up to the document's root element (<html>), to find the first ancestor of DOM elements.		
		
		2]The each() method specifies a function to run for each matched element. -> $(selector).each(function(index,element));
		
		3]The eq() method returns an element with a specific index number of the selected elements -> $("p").eq(1).css("background-color", "yellow"); 
		
		4]$(selector).filter(criteria,function(index)); -> $("p").filter(".intro").css("background-color", "yellow");
			The filter() method returns elements that match a certain criteria.
			This method lets you specify a criteria. Elements that do not match the criteria are removed from the selection, and those that match will be returned.
			This method is often used to narrow down the search for an element in a group of selected elements.
			Tip: The filter() method is the opposite of the not() method.
			
		5] $(selector).find(filter); -> $("ul").find("span").css({"color": "red", "border": "2px solid red"});
			The find() method returns descendant elements of the selected element.
			A descendant is a child, grandchild, great-grandchild, and so on.
		
		6] $(selector).is(selectorElement,function(index,element)) 
				
				The is() method checks if one of the selected elements matches the selectorElement.
				if ($("p").parent().is("div")) 
				{
					alert("Parent of p is div");
				}		
		7] 	next() 			Returns the next sibling element of the selected element
				not() 			Returns elements that do not match a certain criteria
				siblings() 	Returns all sibling elements of the selected element
				slice() 		Reduces the set of matched elements to a subset specified by a range of indices
		----------------------------------------------------------------------------------------------------------------------------------------------------------
10] jQuery Event Methods : refer: https://www.w3schools.com/jquery/jquery_ref_events.asp	
		
		i] .change(); The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements).
				
				Trigger the change event for the selected elements : $(selector).change();
				Attach a function to the change event:						 : $(selector).change(function);	
		
		ii] .click : The click event occurs when an element is clicked.
				Trigger the click event for the selected elements	: $(selector).click();
				Attach a function to the click event							: $(selector).click(function);
		
		iii] .dblclick : The dblclick  event occurs when an element is double-clicked .
				 Trigger the dblclick  event for the selected elements	: $(selector).dblclick ();
				 Attach a function to the dblclick  event							  : $(selector).dblclick (function);		
		
		iv] event.stopImmediatePropagation(); refer:https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_stopimmediateprop 
				The event.stopImmediatePropagation() method stops the rest of the event handlers from being executed.
				This method also stops the event from bubbling up the DOM tree.
		
		v] 	event.stopPropagation(); refer:https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_stoppropagation
				The event.stopPropagation() method stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed
		
		vi] event.target : The event.target property returns which DOM element triggered the event. refer: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_target
				event.target.nodeName : return element name which trigger event
				
		vii] The event.type property returns which event type was triggered refer: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_type		
			
		viii] The event.which property returns which keyboard key or mouse button was pressed for the event
		
		viiii] Attach a function to the focus event. The focus event occurs when the <input> field gets focus 
					(when selected by a mouse click or by "tab-navigating" to it)
					$(selector).focus();
					$(selector).focus(function);
		
		x]	Trigger the select event of an <input> element : $(selector).trigger(event,eventObj,param1,param2,...);
				refer: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_trigger
		
		
			
		Example : Trigger specific event

		if(tempValue){
			$('#MainTabDiv').tabs("option", "active", 1 ); 
			$("#MnagedGroupTreeViewForDeviceHis li ").each(function(){
				clientName = $(this).attr('clientname');
				if(clientName==tempValue){
					writeCoockie('historyTabVal',2);
					$($(this).children().eq(1)).trigger('click');
				}
			});		
		}		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		