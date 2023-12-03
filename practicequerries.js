export class sqlpractice {

/**

*!

**SELECT * FROM CITY
**WHERE POPULATION > 100000 AND COUNTRYCODE = 'USA';

*!

*?SELECT NAME FROM CITY
*?WHERE POPULATION > 120000 AND COUNTRYCODE = 'USA';


* TODO:    SELECT * FROM CITY

*!

**SELECT DISTINCT CITY
**FROM STATION
**WHERE MOD(ID, 2) = 0;

*!

**SELECT DISTINCT CITY FROM STATION
**WHERE MOD(ID, 2)= 0

*!

**SELECT COUNT(CITY) - COUNT(DISTINCT CITY) AS T from STATION; 

*!  Union connect both queeries but run different just give output at same time
*!  and Condition with Limit 1 is Limit the Output 1 
*! AND DESC is Descinding order

**  SELECT CITY, CityLength
**   FROM (
**    SELECT CITY, LENGTH(CITY) AS CityLength
**    FROM STATION
**      ORDER BY CityLength, CITY
**      LIMIT 1
**  ) AS ShortestCity

**  UNION ALL

**  SELECT CITY, CityLength
**  FROM (
**      SELECT CITY, LENGTH(CITY) AS CityLength
**      FROM STATION
**      ORDER BY CityLength DESC, CITY DESC 
**      LIMIT 1
**  ) AS LongestCity;

*!  In this Querries REGEXP is used for pattern matching using regular expressions. 
*! in '^[aeiouAEIOU]' the sign  ^ is use for match the pattern from begining.

**  SELECT DISTINCT CITY
**  FROM STATION
**  WHERE CITY REGEXP '^[aeiouAEIOU]';


*!  In this Query there I use DISTINCT to remove duplicate city name from STATION TABLE
*!  Then I use REGEXP to use pattern and use $ sign last to check at the end of the 
*!  field value in database.

**  SELECT DISTINCT CITY FROM STATION 
**  WHERE CITY REGEXP '[aeiou]$';

*!  Here is little bit complicated one . In this Query I have to check a city name 
*!  has vowel in both side to check this I have to use and operator for this.

**  SELECT DISTINCT CITY FROM STATION
**  WHERE CITY REGEXP '^[aeiouAeiou]' and CITY REGEXP '[aeiou]$'

*!   HERE is the NOT operator to check the city name where vowel is not exist

**  SELECT DISTINCT CITY FROM STATION
**  WHERE CITY NOT REGEXP '^[aeiouAEIOU]'


*!  Same to previous One

**SELECT DISTINCT CITY FROM STATION
**WHERE CITY NOT REGEXP '[aeiouAEIOU]$'

*!  This Query ORDER BY RIGHT is use for 

**  SELECT Name FROM STUDENTS
**  WHERE Marks > 75
**  ORDER BY RIGHT (Name, 3), ID;

*!  Employee name order by alphabeticall order.

**  SELECT name FROM Employee
**  ORDER BY name;

*!  BASIC YOU WILL UNDERSTAND NOT NEED TO EXPLAIN

**  SELECT name FROM Employee
**  WHERE salary > 2000 AND months < 10




* TODO: Advanced --

*!  ti find the average there is AVG function 

**  SELECT AVG(POPULATION) AS AVGPOPULATION FROM CITY
**  WHERE DISTRICT = 'California'

*! FLOOR use to roudded to the neaest integer

**  SELECT FLOOR(AVG(POPULATION)) AS avgCityPopulation
**  FROM CITY

*!  SUM functon for Sum all populatio field

**  SELECT SUM(POPULATION) FROM CITY
**  WHERE COUNTRYCODE ='JPN'


*!  This below Query can write more simple way  with using MIN and MAX function of mysql But
*!  There is certain situation comes where u can't use MIN and MAX so at that time you have to use
*!  Complex way. 


**  SELECT (
**      SELECT POPULATION FROM CITY         |       SELECT MAX(Population) - MIN(Population) AS PopulationDifference
**      ORDER BY POPULATION DESC            |       FROM CITY;
**      LIMIT 1                             |            
**      ) - (                               |
**      SELECT POPULATION FROM CITY         |
**      ORDER BY POPULATION                 |
**      LIMIT 1                             |
**   ) AS DIFF




*!  This ones ques is complex to understand

**  SELECT CEIL((AVG(Salary)) - (AVG(REPLACE(Salary, 0, '' )))) AS SELERR
**  FROM EMPLOYEES


*! GIVING MULTIPLE OUTPUT  USING AGGRGATION. 
*TODO:             THE AGGREGATION FUNCTION IS IN MYSQL  :      COUNT() AVG() MAX() MIN() SUM()

**  SELECT MAX(months*salary) AS MaxProduct,
**      COUNT(name) AS EmployeeCount 
**        FROM Employee
**  WHERE months * salary =(
**  SELECT MAX(months*salary) AS MaxProduct
**        FROM Employee
**  ) 


*!  Aggregession

**  SELECT ROUND(SUM(LAT_N),2) AS SUMLAT,
**  ROUND(SUM(LONG_W),2) AS SUMLONG
**  FROM STATION


*!  Using gater than and less than condition to solve this problem 

**  SELECT ROUND(SUM(LAT_N),4) AS SUMLAT
**  FROM STATION
**  WHERE LAT_N > 38.7880 AND LAT_N < 137.2345


*!  EASY PEASY

**  SELECT ROUND(LAT_N, 4) AS GRATEST
**  FROM STATION
**  WHERE LAT_N < 137.2345
**  ORDER BY LAT_N DESC
**  LIMIT 1;

*! IT's A Tricky Question

**  SELECT ROUND(LONG_W,4) AS LARGEST
**  FROM STATION
**  WHERE LAT_N < 137.2345
**  ORDER BY LAT_N DESC
**  LIMIT 1

*! EASY PEASY

**  SELECT ROUND(LAT_N,4)
**  FROM STATION 
**  WHERE LAT_N > 38.7780
**  ORDER BY LAT_N
**  LIMIT 1


*! Quite Tough to solve the Problem ABS use for ABSOLUTE VALUE
**  SELECT ROUND(
**     ABS(MAX(LAT_N)-MIN(LAT_N)) + ABS(MAX(LONG_W)-MIN(LONG_W)),4
**  ) AS DISTANCE
**  FROM STATION


*! SQRT(....,2) use for Square ROOT POWER(....,2) use for Square 

**   SELECT ROUND(
**   SQRT(POWER(MAX(LAT_N) - MIN(LAT_N), 2) + POWER(MAX(LONG_W) - MIN(LONG_W), 2)),4
**    ) AS DISTANCE
**   FROM STATION

*TODO: NEED TO UNDERSTAND

**  SELECT
**     ROUND(
**         AVG(LAT_N) +
**         IF(COUNT(*) % 2 = 0, 
**              (LEAD(LAT_N, COUNT(*)/2) + LAT_N) / 2,
**               0
**          ),
**            4
**        ) AS Median
**      FROM
**       (SELECT LAT_N
**       FROM STATION
**       ORDER BY LAT_N
**           LIMIT 2 - (SELECT COUNT(*) FROM STATION) % 2
**           OFFSET (SELECT (COUNT(*) - 1) / 2 FROM STATION)
**      ) AS Subquery;





*/





}
