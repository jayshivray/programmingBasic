Ops fendamentals

Variables :
1] A variable is a container which holds the value  while the java program is executed (assigned with a datatype).
2] Variable is a name of memory location.
	
	Variables Types
	1] Local Variable 		: A variable declared inside the body of the method is called local variable
	2] Instance Variable 	: A variable declared inside the class but outside the body of the method, is called instance variable	
	3] Static variable		: A variable which is declared as static is called static variable
	
	Variables Data Types  : value data types, pointer data types, Reference Data Type
	
Question : 
1] to many variable in application can leed to increase memory consuption.	
		
		
operators :
	1] Arithmetic Operators 											: mathematical operations (+,-,*,/,%,++,--)
	
	2] Relational Operator (Comparison Operators) : compare two operands and return Boolean value true or false.
	
	3] Logical Operators (Bitwise) 								: used to combine two or more conditions.
		 Exmaple : ((1==1)&&(2==2)),((1==1)||(2==2))
	
	4] Assignment Operators												: use to assign values to variables with less key strokes
	
	5] Ternary Operator 													: ssigns a value to a variable based on some condition. This is like short form of if-else condition.
		 
		 Syntax 
		 variable = condition ? value1 : value2 	if condition true it will assign value1 to variable/if condition false it will assign value2 to variable
		 var a = 10, b = 5;
		 var c = a > b? a : b; // value of c would be 10
		 var d = a > b? b : a; // value of d would be 5		


Abstraction : perform by interface and abstract class

Abstract class/methods : 
Abstraction is a process of hiding the implementation details and showing only functionality to the user.
it shows only essential things to the user and hides the internal details

1] method with no body and declared with abstract keyword.
2] implementation provided by derived class.
3] abstract class contain abstract method and non abstract method.
4] we can not instantiated abstract class.
5] store child class object to parent class refrence variable.
6] It can have constructors and static methods also. (java)
7] It can have final methods which will force the subclass not to change the body of the method.(java)

Interface : Interface in C# is a blueprint of a class.
1] An interface is declared by using the interface keyword. 
2] all the methods which are declared inside the interface are abstract methods.(method with no body)
3] used to achieve multiple inheritance which can't be achieved by class
4]Interface methods are public and abstract by default. You cannot explicitly use public and abstract keywords for an interface method.(c#)
5] all the methods in an interface are declared with the empty body, and all the fields are public, static and final by default (java) 
6] The class or struct which implements the interface, must provide the implementation of all the methods declared inside the interface.
7] store child class object to parent class refrence variable.

Thread 
implementation 'com.squareup.retrofit2:retrofit:(insert latest version)'
