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


*!HAVE TO LEARN MORE

**SELECT ROUND(LAT_N,4) FROM(
**SELECT LAT_N, ROW_NUMBER() OVER(ORDER BY LAT_N ASC) AS Rankn FROM STATION) a
**WHERE Rankn = CEIL(( SELECT COUNT(*) FROM STATION) / 2.0  )

*! THIS IS HOW CONDITION IF ELSE WRITE IN SQL DB
**  SELECT 
**        CASE
**            WHEN A + B <= C OR A + C <= B OR B + C <= A THEN 'Not A Triangle'
**            WHEN A = B AND B = C THEN 'Equilateral'
**            WHEN A = B OR B = C OR C = A THEN 'Isosceles'
**            ELSE 'Scalene'
**        END AS TRIANGLETYPE
**  FROM TRIANGLES

*!Complex problem Understanding how COUNT(*) work

**  SELECT CONCAT(NAME, 
**      CASE
**        WHEN Occupation = 'Doctor' THEN '(D)'
**        WHEN Occupation = 'Singer' THEN '(S)'
**      END)
**  ORDER BY NAME;
**  SELECT
**      CONCAT('There are a total of ', COUNT(*), ' ', LOWER(OCCUPATION), 's.') AS OccupationCount
**  FROM
**      OCCUPATIONS
**  GROUP BY
**      OCCUPATION
**  ORDER BY
**      COUNT(*),LOWER(OCCUPATION);

*!https://www.hackerrank.com/challenges/occupations/problem?isFullScreen=true
*!Need to study further more
**SET @r1=0, @r2=0, @r3=0, @r4=0;
**SELECT MIN(Doctor), MIN(Professor), MIN(Singer), MIN(Actor)
**FROM(SELECT 
**     CASE 
**        WHEN Occupation ="Doctor" THEN (@r1:=@r1+1)
**        WHEN Occupation ="Actor" THEN ( @r2:= @r2+1)
**        WHEN Occupation ="Professor" THEN (@r3:=@r3+1)
**        WHEN Occupation ="Singer" THEN (@r4:= @r4+1) END AS Rownumber,
**     
**     CASE WHEN Occupation = "Doctor" THEN Name END AS Doctor,
**     CASE WHEN Occupation = "Actor" THEN Name END AS Actor,
**     CASE WHEN Occupation = "Professor" THEN Name END AS Professor,
**     CASE WHEN Occupation = "Singer" THEN Name END AS Singer
**     FROM OCCUPATIONS
**     ORDER BY Name
**    ) Temp GROUP BY Rownumber;




*! COUNT WORK
**  SELECT COUNT(*) AS CityCount
**  FROM CITY
**  WHERE POPULATION > 100000

*!AGGREGATION
**  SELECT  SUM(POPULATION)
**  FROM CITY
**  WHERE DISTRICT = "California"


*!JOIN FUNCTION 
**SELECT H.hacker_id, H.name 
**FROM Submissions S
**JOIN Challenges C
**ON S.challenge_id = C.challenge_id
**JOIN Difficulty D
**ON C.difficulty_level = D.difficulty_level
**JOIN Hackers H
**ON H.hacker_id = S.hacker_id
**AND S.score = D.score
**GROUP BY H.hacker_id, H.name
**HAVING Count(S.hacker_id) > 1
**ORDER BY COUNT(S.hacker_id) DESC, S.hacker_id ASC



*!JOIN
**SELECT H.hacker_id , H.name, sum(sscore)
**    FROM Hackers H 
**    JOIN (SELECT s.hacker_id,MAX(score) AS sscore FROM Submissions s 
**                GROUP BY S.hacker_id, S.challenge_id) st 
**                ON h.hacker_id=st.hacker_id
**            GROUP BY H.hacker_id, H.name
**            HAVING SUM(sscore)>0
**            ORDER BY SUM(sscore) desc, H.hacker_id ASC:


SELECT H.hacker_id , H.name, sum(sscore)
    FROM Hackers H 
    JOIN (SELECT S.hacker_id,MAX(score) AS sscore FROM Submissions S 
                GROUP BY S.hacker_id, S.challenge_id) st 
                ON h.hacker_id=st.hacker_id
            GROUP BY H.hacker_id, H.name
            HAVING SUM(sscore)>0
            ORDER BY SUM(sscore) desc, H.hacker_id ASC:


select h.hacker_id,h.name,sum(sscore)
from Hackers h 
join (select S.hacker_id,max(score) as sscore from Submissions S 
      group by s.hacker_id,s.challenge_id) st 
      on h.hacker_id=st.hacker_id
group by h.hacker_id,h.name
having sum(sscore)>0
order by sum(sscore) desc,h.hacker_id asc;













*/





}
