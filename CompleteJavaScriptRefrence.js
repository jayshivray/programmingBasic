<!DOCTYPE html>
<html>
	<title></title>
		<meta charset="utf-8">
	<head>
		<script src="jquery-3.3.1.js"></script>
		<script language="JavaScript" type="text/javascript">
			/*
				Important Links:
					https://www.jqueryscript.net/table/jQuery-Plugin-For-Fixed-Table-Header-Footer-Columns-TableHeadFixer.html (for fix table footer header left column)
					https://www.jqueryscript.net/form/Searchable-Multi-select-jQuery-Dropdown.html : for search text box		
					https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-alerts.php [ERROR, ALERT,WARNINGS MSG]
					https://sweetalert.js.org/guides/ [MODAL EXAMPELS]
					https://www.aspsnippets.com/Articles/Call-ASPNet-Page-Method-using-jQuery-AJAX-Example.aspx [ajax in asp.net]


				[DOM Methods Properties]
					var parser 							= new DOMParser()
					var HtmlDomObject 			= parser.parseFromString('html string', "text/html"); convert string to html object;
					
				[iframe]
					1]  access parent element from iframe
							var ifrm = window.frameElement; 
							var doc = ifrm.ownerDocument; 
							doc.getElementById('img_Email_Settings').style.display='none';		
					
					2] [access child function element from parent]				
						var iframe = document.getElementById("frameAddMultiDevice");
						if (iframe) 
						{
							 var iframeContent = (iframe.contentWindow || iframe.contentDocument);	 
							 iframeContent.SendFile();
						}					
					3] 	check function available in parent window
							if (typeof window.parent.CleareFileUploadStatus === 'function') {
								parent.CleareFileUploadStatus();
							}	
				
				[Child Element Methods
					element.childElementCount										: Returns the number of child elements an elemen
					element.childNodes 													: Returns a collection of an element's child nodes (including text and comment nodes)
					element.children 														: Returns a collection of an element's child element (excluding text and comment nodes) 
					element.firstChild 													: Returns the first child node of an element
					element.firstElementChild 									: Returns the first child element of an element 
					element.lastChild 													: Returns the last child node of an element
					element.lastElementChild 										: Returns the last child element of an element
					element.removeChild() 											: Removes a child node from an element
					element.replaceChild() 											: Replaces a child node in an element
					element.hasChildNodes() 										: Returns true if an element has any child nodes, otherwise false
			
				[Parent Element Method]
					element.parentNode 													: Returns the parent node of an element
					element.parentElement 											: Returns the parent element node of an element
				
				[Accessing Attribute Key Value Pair]
					element.attributes 													: Returns attributes collection of element have to access through arrays like (element.attributes[0].methodName)
					element.setAttribute() 											: Sets or changes the specified attribute, to the specified value
					element..setAttributeNode() 								: Sets or changes the specified attribute node
					element.className 													: Sets or returns the value of the class attribute of an element. (element.className='newClassname', element.className return className)
					element.getAttribute() 											: Returns the specified attribute value of an element node.
					element.getAttributeNode("attrName").value;	: Returns the specified attribute value of an element node
					element.id																	: id property sets or returns the id of an element (the value of an element's id attribute).	
					element.nodeName;														: The nodeName (element name) property returns the name of the specified node.		
					element.nodeValue 													: Sets or returns the value of a node		
					element.style																: Sets or returns the value of the [ style attributes ] of an element 
										-	
				[Arrays]
					length 																			: Sets or returns the number of elements in an array
					prototype 																	: Allows you to add properties and methods to an Array object.
					for define function in array use this- : https://www.w3schools.com/jsref/jsref_prototype_array.asp					
				Methods
					Array.concat(SecondArray) 					: Joins two or more arrays, and returns a copy of the joined arrays.
					Array.filter() 											: we can define function to test any condition with each array element.
					forEach() 													: Calls a function for each array element	
					from() 															: Creates an array from an object
					includes('Data') 										: Check if an array contains the specified element
					indexOf() 													: Search the array for an element and returns its position
					pop() 															: Removes the last element of an array, and returns that element
					push() 															: Adds new elements to the end of an array, and returns the new length
					reverse() 													: Reverses the order of the elements in an array
					shift() 														: Removes the first element of an array, and returns that element
					slice() 														: Selects a part of an array, and returns the new array
					sort() 															: Sorts the elements of an array
					valueOf() 													:	Returns the primitive value of an array
				
				[Strings]
					Property
					string.length
					charAt(index) 									: Returns the character at the specified index (position)
					charCodeAt(index) 							: Returns the (ASCII Code)Unicode of the character at the specified index
					endsWith('char or string') 			: Checks whether a string ends with specified string/characters.	
					fromCharCode(charCode) 					: Converts Unicode values to characters
					includes('char' or 'string') 		: Checks whether a string contains the specified string/characters
					indexOf('char' or 'string') 		: Returns the position of the first found occurrence of a specified value in a string
					toLowerCase() 									: Converts a string to lowercase letters
					toString() 											: Returns the value of a String object
					toUpperCase() 									: Converts a string to uppercase letters
					trim() 													: Removes whitespace from both ends of a string
					slice() 												: Extracts a part of a string and returns a new string
					split() 												: Splits a string into an array of substrings
					replace()
					substr()													
				-----------------------------------------------------------------------------------------------------------------------------------------------
				[Coockie] 
					The data contained in a cookie is automatically transmitted between the web browser and the web server.
				
				Attributes Available on Coockie Object
					Example : 
						expires="";domain ="";path ="";secure ="";name=value
				
				1] Storing Cookies : 
					 Example : 
					   document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
				
				2] Reading Cookies : The document.cookie string will keep a list of name=value pairs separated by semicolons, where name is 
					 the name of a cookie and value is its string value    
				
				Example : 
					var allcookies = document.cookie;
					cookiearray = allcookies.split(';');
					for(var i=0; i<cookiearray.length; i++) 
					{
							name = cookiearray[i].split('=')[0];
							value = cookiearray[i].split('=')[1];						
					}				
				3] Delete a Cookie : for deleting coockie value pair of name="" should be empty.
					 Example : 
						document.cookie = "username=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
				---------------------------------------------------------------------------------------------------------------------------------------------------		
				/*
						[JavaScript Best Practices]
						
							1] Avoid Global Variables : Global variables and functions can be overwritten by other scripts.
								 use [clousers] >> https://www.w3schools.com/js/js_function_closures.asp
							2] Always Declare Local Variables : Local variables must be declared with the var keyword, otherwise they will become global variables.
							3] Declarations on Top :
								 var firstName, lastName, price, discount, fullPrice;
								 firstName = "John";
								 lastName = "Doe";		
							4] It is a good coding practice to initialize variables when you declare them.
							5] Don't Use new Object() :
							6] Use === Comparison
								 The == comparison operator always converts (to matching types) before comparison.
								 The === operator forces comparison of values and type: 
							7] Use Parameter Defaults : check parameter values whether it is define or not if not define then set default value for it.
								 Undefined values can break your code. It is a good habit to assign default values to arguments.
						
						[Increase Performance]		 
							1] Reduce Activity in Loops : Statements or assignments that can be placed outside the loop will make the loop run faster.
									var i;
									var count = arr.length;
									for (i = 0; i < count; i++) {
									
									}							
							2] Reduce DOM Access : 
								 Accessing the HTML DOM is very slow, compared to other JavaScript statements.
								 If you expect to access a DOM element several times, access it once, and use it as a local variable:
								 
								 Example: 
									 var obj;
									 obj = document.getElementById("demo");
									 obj.innerHTML = "Hello";								 
							3] Avoid Unnecessary creation of Variables :
							
							4] Delay JavaScript Loading:  		
								 Putting your scripts at the bottom of the page body lets the browser load the page first.
								 The HTTP specification defines that browsers should not download more than two components in parallel.
								 If possible, you can add your script to the page by code, after the page has loaded
								 Example:
								 <script>
										window.onload = function() {
											var element = document.createElement("script");
											element.src = "jquery-3.3.1.js";
											document.body.appendChild(element);
										};
								</script> 

				----------------------------------------------------------------------------
				var promise = new Promise(function(resolve, reject) { 
					const x = "geeksforgeeks"; 
					const y = "geeksforgeeks"
					setTimeout(function(){
						if(x === y) { 
							resolve(); 
						} else { 
							reject(); 
						}    
					},3000); 
				}); 
					
				console.log('before calling promise');
				promise.then(function () { 
					 console.log('Success, You are a GEEK'); 
				}).catch(function () { 
					 console.log('Some error has occured'); 
				}); 
				console.log('after calling promise');
				---------------- async function -------------------
				function scaryClown() {
					return new Promise(resolve => {
						setTimeout(() => {
							resolve('hello');
						}, 2000);
					});
				}

				async function msg() {
					console.log('before call async function');
					const msg = await scaryClown();
					console.log('message: '+msg);
					console.log('after async function');  
				}
				msg();				
							
				*/				
		
			
			$(document).ready(function(){
			
				<!-- writing onclick event using anonymous function -->
				document.getElementById('btnCreateTbl').onclick=function(){
					/*creating dynamic table here*/
					//var ObjFirstDiv_Child1 = document.getElementsByTagName('div')[0].children[1];						<!-- this will access parent div we have to access child div of FirstDivElement -->	
					//var ObjFirstDiv_Child1 = document.getElementsByClassName('FirstDiv_Child1_Class')[0];
					var ObjFirstDiv_Child1 = document.getElementById('FirstDiv_Child1');
					var TblObj						 = document.createElement('table');
					TblObj.setAttribute("border", "1");
					TblObj.id='tblFirst';
					
					var tblBody 					=  document.createElement("tbody");
					
					for(var row=0; row<5; row++)
					{
						var TR = document.createElement('tr');
						if (row==0){
							var TD = document.createElement('td');
							TD.appendChild(document.createTextNode('Name'));
							TR.appendChild(TD);
							TR.style="font-weight:bold";
							
							var TD = document.createElement('td');
							TD.appendChild(document.createTextNode('SirName'));
							TR.appendChild(TD);
														
							var TD = document.createElement('td');
							TD.appendChild(document.createTextNode('Age'));
							TR.appendChild(TD);
														
							var TD = document.createElement('td');
							TD.appendChild(document.createTextNode('Email'));
							TR.appendChild(TD);
														
							var TD = document.createElement('td');
							TD.appendChild(document.createTextNode('Address'));
							TR.appendChild(TD);			
						}
						else
						{
							for(var col=0; col<5; col++)
							{
								var TD = document.createElement('td');
								var tdData = document.createTextNode('column '+col);
								TD.appendChild(tdData);
								TR.appendChild(TD);
							}						
						}
						tblBody.appendChild(TR);
					}
					TblObj.appendChild(tblBody);
					ObjFirstDiv_Child1.appendChild(TblObj);					
				};		
				
				document.getElementById('btnCreateSecondTbl').onclick=function(){
					
					/*
						[Method of table object]
						.createCaption(); 			: create a caption element for the table.
						.deleteCaption();(); 		: delete caption element for the table.
						.createTFoot()					: Creates an empty <tfoot> element and adds it to the table.
						.createTHead() 					: Creates an empty <thead> element and adds it to the table.
						.deleteTHead() 					: Removes the <thead> element from the table
						.insertRow() 						: Creates an empty <tr> element and adds it to the table
						.deleteRow() 						: Removes a row (<tr>) from the table
					*/
						
					var table = document.getElementById('tblSecond');
							table.setAttribute('class','RandomClass');
						
					var header = table.createTHead();
					var row = header.insertRow(0);    
					
					var cell = row.insertCell(0);
					cell.innerHTML = "<b>Name</b>";
					var cell = row.insertCell(1);
					cell.innerHTML = "<b>Sir Name</b>";
					var cell = row.insertCell(2);
					cell.innerHTML = "<b>Age</b>";
					var cell = row.insertCell(3);
					cell.innerHTML = "<b>Email</b>";
					var cell = row.insertCell(4);
					cell.innerHTML = "<b>Address</b>";
					
					for (var row=1; row<5; row++)
					{
						var TR = table.insertRow(row);
						for(var col=0; col<5; col++)
						{
							var TD = TR.insertCell(col);
							TD.innerHTML='column '+col;
						}
					}					
				}	
			<!-- read specific All TR | TR: Attributes | TD | TD:Attributes -->
			document.getElementById('btnCreateThiredTbl').onclick=function(){
				
				var EmployeeName	=  ["deepak","Amol","Pratik","Madhuri"];
				var EmployeeAdd		 = ["Andheri E","Parle E","Santacruz","Borivali"];
				var EmployeeMobile = ["9664895285","565656566556","80000000000","12345678910"];
				var EmployeeGender = ["Male","Male","Male","Female"];
				
				var tblObject = document.getElementById('tblThird');
						tblObject.setAttribute('class','tblThird_Class');
						
				var tblHead		= tblObject.createTHead();
				var TR  			= tblHead.insertRow(0);
				var TD				= TR.insertCell(0);
						TD.innerHTML='<b>Name</b>';					
						TD				= TR.insertCell(1);
						TD.innerHTML='<b>Address</b>';	
						TD				= TR.insertCell(2);
						TD.innerHTML='<b>Mobile</b>';	
						TD				= TR.insertCell(3);
						TD.innerHTML='<b>Gender</b>';						

					for (var row=1; row<5; row++)
					{
						var TR = tblObject.insertRow(row);
						
						for( var col=0; col<5; col++ )
						{
							if (col==0){
								var TD = TR.insertCell(col);
								TD.innerHTML=EmployeeName[0];
								EmployeeName.shift();
							}
							else if (col==1){
								var TD = TR.insertCell(col);
								TD.innerHTML=EmployeeAdd[0];
								EmployeeAdd.shift();	
							}
							else if (col==2){
								var TD = TR.insertCell(col);
								TD.innerHTML=EmployeeMobile[0];					
								EmployeeMobile.shift();
							}
							else if (col==3){
								var TD = TR.insertCell(col);
								TD.innerHTML=EmployeeGender[0];	
								EmployeeGender.shift();	
							}	
						}
					}						
			}
			});

		</script>		
	</head>
	<body>
		<div id="FirstDivElement" class="FirstDivElement_Class" style="background-color:#e6e6e6;">
			<h2>1] Create Dynamic HTML Table Using JavaScript </h2>
			<div id="FirstDiv_Child1" class="FirstDiv_Child1_Class" style="width:500px;height:300px;background-color:white;margin-left:20px">
			
				<table id="tblSecond" border="1"></table>
				<table id="tblThird" border="1"></table>
				
			</div><br>
			<button id="btnCreateTbl">Create Table-1</button>
			<button id="btnCreateSecondTbl">Create Table-2</button><br><hr>
			<button id="btnCreateThiredTbl">Create Table With Arrays</button>
			<button id="btnSaveThiredTblData">Save Table Data</button>
			<button id="btnReadThiredTbl" >Read Table Data</button><hr> 
		</div>	
	</body>
</html>

<!--Client Server Development use full links
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview -->