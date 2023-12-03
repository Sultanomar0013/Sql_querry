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

*!  Union and Condition with Limit 1.

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




*/





}
