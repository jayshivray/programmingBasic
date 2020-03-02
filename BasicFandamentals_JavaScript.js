|=============================================================================================================== 
| What is JavaScrip :
| 	JavaScript is a loosely-typed client side scripting language that executes in the user's browser.
| 	JavaScript interact with html elements (DOM elements) in order to make interactive web user interface. 
| 	JavaScript engine in the browser interprets, compiles and executes JavaScript code which is in a web page.
| 	It does memory management
| 
| IExplorer -> v9.0+ 	Chakra
| Chrome 	-> V8
| FireFox -> JagerMonkey
| Safari 	-> JavaScriptCore (Nitro) 

|=====================================Advantages of JavaScript===================================================
|1] It executes on client's browser, so eliminates server side processing.
|2] It executes on any OS 
|3] JavaScript can be used with any type of web page e.g. PHP, ASP.NET, Perl etc
|4] Performance of web page increases due to client side execution
|5] JavaScript code can be minified to decrease loading time from server. 

|======================================Notes=======================================================================
|1] JavaScript code must be written within <script> tag.
|2] External JavaScript file (.js) can be referenced using <script src="/PathToScriptFile.js"></script> 
|	 where src attribute is used to specify the full path of .js file.
|3] Html5 standard does not required type="text/javascript" attribute, whereas prior html standards requires type attribute.
|4] The <script> tag can be added into <head> or <body> tag.
|	 The script included into <head> tag may not be able to access DOM elements because <head> loads before <body>. 
|	 Write script before ending of </body> tag if script code needs to access DOM elements.
|5] JavaScript ignores multiple spaces and tabs.
|6] Every statement in JavaScript can be separated using semicolon (;). 
|	 It is not mandatory but recommended to use semicolon at the end of each statement.
	 
|======================================JavaScript Variable [Loosely-typed Variables]==================================
|	C# or Java has strongly typed variables. It means variable must be declared with a particular 
|	data type, which tells what type of data the variable will hold.
|	JavaScript variables are loosely-typed which means it does not require a data type to be declared.
|	You can assign any type of literal values to a variable
|
|1] JavaScript uses reserved keyword var to declare a variable
|2] Multiple Variables in a Single Line.
|	 Example:var one = 1, two = 'two', three;
|3] Scope of the variables declared without var keyword become.
|	 Global variables can be accessed from anywhere in the web page
|	 It is Not Recommended to declare a variable without var keyword. It can accidently overwrite an existing global variable. 

Scope in JavaScript
	Scope in JavaScript defines accessibility of variables, objects and functions.
	There are two types of scope in JavaScript.
	Global scope : Variables declared outside of any function become global variables. Global variables can be accessed and modified from any function. 
	Local scope  : Variables declared inside any function with var keyword are called local variables.
	variable declear with var key word inside any function have function level scop.
	variable declear with let key word inside any function have block level scop.
	
|=======================================Javascript Operators=======================================================
|	1] Arithmetic Operators : used to perform mathematical operations between numeric operands
|	2] Comparison Operators : compare two operands and return Boolean value true or false
|	3] Logical Operators    : used to combine two or more conditions
|	4] Ternary operator			: assigned value on specific condition
|	5] Assignment Operators : 
|		 var x = 5, y = 10, z = 15;
|				 x = y; 	//x would be 10
|				 x += 1; //x would be 6
|				 x -= 1; //x would be 4
|				 x *= 5; //x would be 25
|				 x /= 5; //x would be 1
|				 x %= 2; //x would be 1
|
|Javascript String Method : https://www.tutorialsteacher.com/javascript/javascript-string-methods-and-property
|

|=============================================JavaScript Object=================================================
| 
| Object Literal 
| 	var personalInfo = {
|													name:'abc',
|													lastName:'xyz',
|													displayInfo : function(){
|														
|													},
|													address: {
|														id: 1,
|														country:"UK"
|													}
|												};
| 
| Object Constructor
| 	var personalInfo = new Object();
| 			personalInfo.name = value;
| 			personalInfo.lastName = value;
| 			personalInfo.displayInfo = function(){}
| 
| Accessing keys in personalInfo : for(var key in personalInfo){alert(key);};				
| 
| object pass by refrence 	: 		
| 	var objectName = {name:'abc',lastName:'xyz',displayInfo : function(){}};
| 	function changeObj(obj){
| 		obj.name = 'new value';
| 	}	
| 
| If, two objects point to the same object then the change made in one object will reflect in another object. 
| 	var person = { name : "John" };
| 	var anotherPerson = person;  
| 			anotherPerson.name = "Bill";
| 			person.name;
|=============================================JavaScript Function=============================================	
|	function functionName(){}
|	function functionName(param1,param2){}														function with parameters
|	function functionName(){arguments[0];arguments[1]}	 							accessing parameter using arguments objects
|	function functionName(){for(var i = 0; i < arguments.length; i++){alert(arguments[i]);}}	 	iteriate all arguments objects
|	function functionName(){return true}	 														return value	
|	function functionName(){function funName(){};return funName}	 		calling 2 function by calling main function
|	var variableName = function(){}																		function expression : assign a function to a variable and 
|	var variableName = function(){}																		Anonymous function function with no name.
|		
|	use function as class and constructor
|	ECMAScript 5 does not have class type. so use function as class 
|  
|	function functionName(){										//act as function,class, and constructor 
|		this.firstName 	= "abc";									//fun properies
|    this.lastName 	= "xyz";									//fun properies
|		this.getFullName = function(){
|			return this.firstName + " " + this.lastName;
|		}		
|	}   
| 	var obj = new functionName();				  // creating class object
|			  obj.firstName = "Steve";				 // assign properties value	
|			  obj.lastName = "Jobs";					// assign properties value		
|			  console.log(obj.getFullName());// read properies value
|
| define function properies with getter and setter refer : https://www.tutorialsteacher.com/javascript/class-in-javascript
|
|============================================= This Key word=============================================	
|	this points to a particular object.depend upon from where it is define and from where it is calling
|	The following four rules applies to this in order to know which object is referred by this keyword.
|  1] Global Scope
|  2] Object's Method
|  3] call() or apply() method
|  4] bind() method
|
| refer : https://www.tutorialsteacher.com/javascript/this-keyword-in-javascript
|

|============================================= Prototype in JavaScript=============================================









|=============================================JavaScript Array=================================================|
|	refer : https://www.tutorialsteacher.com/javascript/javascript-array                                         |
|==============================================================================================================|

	
JavaScript With Dom elements
Page Level Events
onload 
Body.Onload() event will be called only after the DOM and associated resources like images got loaded
Jquery ready function

jQuery's document.ready() event will be called once the DOM is loaded
it wont wait for the resources like images to get loaded. Hence, the functions in jQuery's ready event will get executed once the HTML structure is loaded without waiting for the resources


















	 