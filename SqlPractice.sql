/*
1] DATA BASE
	1) CREATE DATABASE
	2) RENAME DATABASE
	3) DELETE DATABASE

2] TABLES
	1) CREATE TABLES
	2) RENAME TABLE 
	3) DROPP TABLE
	
	1) ADD COLUMN
	2) RENAME COLUMN
	3) UPDATE COLUMN VALUE
	4) DELETE COLUMN
	
	1) PRIMARY KEY      
	2) FOREIGN KEY
	3) 
	
3] SQL JOINS
	1) JOIN | INNER JOIN
	2) LEFT JOIN
	3) RIGHT JOIN
	4) FULL OUTER JOIN
	5) MULTIPAL TABLES JOINS	
	
4] STORED PROCEDURE
	1)
	2)		
	
5] FUNCATIONS IN SQL

6] VIEWS IN SQL	


*/

--[ CREATE DATA BASE ]--
CREATE DATABASE SqlPractice;

--[ RENAME DATA BASE ]--
ALTER DATABASE OLDDBNAME MODIFY NAME=NEW NAME;
sp_renameDB 'oldName','newName';

--[ DROPP DATA BASE ]--
DROP DATABASE DataBaseName;


--[dropp db if currentlu in use]--
alter database eWconsole_Db_FF1944197E set SINGLE_USER WITH ROLLBACK IMMEDIATE;
drop database eWconsole_Db_FF1944197E;


/*
	DATA TYPES IN SQL
	[STRING]
	
	char(n)			Fixed width character string		8,000 characters
	varchar(n)		Variable width character string		8,000 characters
	varchar(max)	Variable width character string		1,073,741,824 characters
	text			Variable width character string		2GB of text data
	nchar			Fixed width Unicode string			4,000 characters
	nvarchar		Variable width Unicode string		4,000 characters	 
	
	nvarchar(max)	Variable width Unicode string		536,870,912 characters	 
	ntext			Variable width Unicode string		2GB of text data		[FOR LARGE STRING DATA]		
	
	[NUMBERS]
	
	bit				Integer that can be					0, 1, or NULL	 
	tinyint			Allows whole numbers from			0 to 255	1 byte
	smallint		Allows whole numbers between		-32,768 and 32,767	2 bytes
	int				Allows whole numbers between		-2,147,483,648 and 2,147,483,647	
	smallmoney		Monetary data from					-214,748.3648 to 214,748.3647	4 bytes
	money			Monetary data from					-922,337,203,685,477.5808 to 922,337,203,685,477.5807	8 bytes	
	
	[DATE DATA TYPE]
	
	datetime		From January 1, 1753 to December 31, 9999 with an accuracy of 3.33 milliseconds	8 bytes
	datetime2		From January 1, 0001 to December 31, 9999 with an accuracy of 100 nanoseconds	6-8 bytes
	smalldatetime	From January 1, 1900 to June 6, 2079 with an accuracy of 1 minute				4 bytes
	date			Store a date only. From January 1, 0001 to December 31, 9999					3 bytes
	time			Store a time only to an accuracy of 100 nanoseconds								3-5 bytes	
	
*/

/*
  CREATE TABLE
  CONSTRAINT TYPE:  Constraints can be specified when the table is created with the CREATE TABLE statement.
					or after the table is created with the ALTER TABLE statement.	
					
  NOT NULL	  - Ensures that a column cannot have a NULL value.
  UNIQUE	  - Ensures that all values in a column are different.
  PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table.
  FOREIGN KEY - Uniquely identifies a row/record in another table.
  CHECK		  - Ensures that all values in a column satisfies a specific condition. 
  DEFAULT	  - Sets a default value for a column when no value is specified.
  INDEX		  - Used to create and retrieve data from the database very quickly.					
					

  USE :
	   1] SQL constraints are used to specify rules for the data in a table.	
	   2] Constraints are used to limit the type of data that can go into a table.
	
*/
USE SqlPractice;

CREATE TABLE tblEmployeeList
(
  id int IDENTITY (1,1)NOT NULL,
  empID NVARCHAR(50) PRIMARY KEY,
)

CREATE TABLE tblEmployee
(
--VAR DATATYPE (SIZE) CONSTRAINT,
  id int IDENTITY (1,1)NOT NULL PRIMARY KEY,
  empID NVARCHAR(50) FOREIGN KEY REFERENCES tblEmployeeList(empID),
  empName NVARCHAR(50) NOT NULL,
  empAge int,
  empMobileNum NVARCHAR(50) NOT NULL,
  empEmail NVARCHAR(255) NOT NULL,
  empAddress NVARCHAR(MAX) NOT NULL		
)

--[ RENAME TABLE NAME ]--
SP_RENAME 'tblEmployee','tblEmployeeNew';
SP_RENAME 'tblEmployeeNew','tblEmployee';

--[ DELETE TABLE ]--
DROP TABLE tblEmployee;

--[ TABLE COLUMNS ]--
USE SqlPractice;

SELECT * FROM tblEmployeeList;
SELECT * FROM tblEmployee;

INSERT INTO tblEmployeeList (empID) VALUES ('1A');

--[ INSERT ]--

INSERT INTO tblEmployee (empID,empName,empAge,empMobileNum,empEmail,empAddress)
VALUES ('1A','Deepak Parab',25,'9664895285','deepak.parab92@gmail.com','Andheri(E)');

--[ DELETE ]--

DELETE FROM tblEmployee WHERE empID='1A';

--[ ADD NEW COLUMN IN TABLE ]--

ALTER TABLE tblEmployee ADD tempColumn NVARCHAR(50);

--[ RENAME COLUMN ]--


--[ DROPP COLUMN ]--

ALTER TABLE tblEmployee DROP COLUMN tempColumn;

--[ UPDATE COLUMN VALUE ]--

UPDATE tblEmployee SET empAge=24 WHERE empId='1A';

--[SQL Strings functions]--
use eWconsole_Db;

SELECT * FROM MDM_Activity

SELECT CONVERT(NVARCHAR(50),Mob_No)+'-'+CONVERT(NVARCHAR(50),UserName) as UserName from MDM_Activity;

--[CONVERT DATA TYPES]--

--[ CONVERT(data_type(length), expression, style) ]--

/*SYNTAX : CONVERT(DATATYPE (SIZE),COLUMN OR VALUE)*/
use eWconsole_Db;

SELECT * FROM MDM_Activity;

SELECT CONVERT(NVARCHAR(MAX),mob_no) AS DeviceName
FROM MDM_Activity;

SELECT CONVERT(INT,mob_no) AS DeviceName
FROM MDM_Activity;

--[SQL DATA TIME FUNCTION]--
USE eWconsole_Db_C65EBFF95A;

	SELECT CURRENT_TIMESTAMP FROM tblMDM_ClientDevices;--RETURN SYSTEM DATE NOT DATABASE DATE TIME

	DATEADD (datepart , number ,date)
	
	year		yy, yyyy
	SELECT DATEADD (YEAR,1,GETDATE()) FROM tblMDM_ClientDevices;	/*adding 1 year in current date here*/
	
	quarter		qq, q
	SELECT DATEADD (quarter,1,GETDATE()) FROM tblMDM_ClientDevices; /**/
	
	month		mm, m
	SELECT DATEADD (month,1,GETDATE()) FROM tblMDM_ClientDevices;	/*adding 1 month in current date*/
	SELECT DATEADD (month,-1,GETDATE()) FROM tblMDM_ClientDevices;	/*subtract 1 month in current date*/
	
	dayofyear	dy, y
	day			dd, d
	week		wk, ww
	weekday		dw, w
	hour		hh
	minute		mi, n
	second		ss, s
	millisecond	ms
	microsecond	mcs
	nanosecond	ns	
	

--[SQL FUNCTION]--
--[SQL USABE FUNCTIONS]--
use eWconsole_Db_C65EBFF95A;

--UPPER CASE
	SELECT UPPER(Username) FROM  tblMDM_ClientDevices;			/*UPPER*/	
	SELECT LOWER(Username) FROM  tblMDM_ClientDevices;			/*LOWER*/
	SELECT CHARINDEX('E','DEEPAK') FROM  tblMDM_ClientDevices;	/*POS*/
	SELECT LEN('DEEPAK') FROM  tblMDM_ClientDevices;			/*LENGTH*/
	SELECT LTRIM(' DEEPAK') FROM  tblMDM_ClientDevices;
	SELECT RTRIM('DEEPAK ') FROM  tblMDM_ClientDevices;
	SELECT REPLACE('DEEPAK','E','A') FROM  tblMDM_ClientDevices;
	--
	DECLARE @TempStr1 NVARCHAR(MAX);
	DECLARE @TempStr2 NVARCHAR(MAX);
	SET @TempStr1='DEEPAK PARAB';
	PRINT 'Before pos function: '+@TempStr1;	
	SET @TempStr2=(SUBSTRING (@TempStr1,CHARINDEX('D',@TempStr1),CHARINDEX('K',@TempStr1)));
	PRINT 'After pos function: '+@TempStr2;
	--
	DECLARE @TempStr1 NVARCHAR(MAX);
	SET @TempStr1='DEEPAK PARAB';
	SELECT 	ISNULL(@TempStr1,'empty');
	--
	DECLARE @TempStr1 NVARCHAR(MAX);
	SET @TempStr1=NULL;
	SELECT 	ISNULL(@TempStr1,'empty');
	--
	DECLARE @TempStr1 NVARCHAR(MAX);		/*null means not value totally empty*/
	SET @TempStr1='';
	SELECT 	ISNULL(@TempStr1,'empty');
	--
	DECLARE @UserName NVARCHAR(MAX);
	SET @UserName='LenovoD';	
	
	IF EXISTS (SELECT UserName FROM tblMDM_ClientDevices WHERE UserName=@UserName)
	BEGIN
	  PRINT 'value exits';	
	END
	ELSE
	BEGIN
	  PRINT 'not exits';	
	END
	
--[LOOPS IN SQL]--
DECLARE @Ind INT;
SET @Ind=1;
  WHILE (@Ind<=10)
  BEGIN
    PRINT 'HELLO';
    SET @Ind=@Ind+1;
    IF(@Ind>=5)
    BREAK;
  END;
	
--[USER DEFINE FUNCTION]--
use eWconsole_Db;

DROP FUNCTION ShowNameAndLastName;

CREATE FUNCTION ShowNameAndLastName(@Name NVARCHAR(50),@LastName NVARCHAR(50))
RETURNS NVARCHAR(MAX)
AS
BEGIN
  DECLARE @Result NVARCHAR(MAX);
  SET @Result='Name: '+@Name+' LastName: '+@LastName;		
  RETURN @Result; 
END

SELECT dbo.ShowNameAndLastName('DEEPAK','PARAB');


--[SQL PROCEDURES]--

--[SIMPLE PROCEDURE]--
use eWconsole_Db;
CREATE PROCEDURE ShowMsg
AS
BEGIN
  PRINT 'CREATE SIMPLE PROCEDURE';
END

EXECUTE ShowMsg;

ALTER PROCEDURE ShowMsg
AS
BEGIN
  PRINT 'ALTER SIMPLE PROCEDURE';
END

DROP PROCEDURE ShowMsg;

--[PROCEDURE INPUT PARAMETER]--
use eWconsole_Db;
CREATE PROCEDURE ShowMsg @Name NVARCHAR(MAX),@SirName NVARCHAR(MAX)
AS
BEGIN
  PRINT 'Name:'+@Name+' LastName:'+@SirName;	
END

EXECUTE ShowMsg 'DEEPAK','PARAB'

--[PROCEDURE INPUT PARAMETER OUTPUT RESULT]--
use eWconsole_Db;
DROP PROCEDURE ShowMsg;

CREATE PROCEDURE ShowMsg @StrVal NVARCHAR(MAX),@Result NVARCHAR(MAX) OUT 
AS
BEGIN
  SELECT @Result='OUTPUT RESULT:'+@StrVal;  
END

DECLARE @Result NVARCHAR (MAX);
EXECUTE ShowMsg 'DEEPAK PARAB',@Result=@Result OUTPUT
PRINT @Result

--[SQL JOINTS]--

