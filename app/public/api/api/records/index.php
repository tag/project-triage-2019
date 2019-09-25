<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection(); //DbConnection class calls getConnection to connect to our database.
                                     //Double colon is static function on the class. $db is a connection object

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM Patient'); //SQL is made a string, prepare is a method on PHP's PDO class, prepare is method on the connection instance $db
$stmt->execute(); //$stmt object runs the query and has access to all the data that will be returned
$patients = $stmt->fetchAll(); //fetching the results of the query (an array of rows)

// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT); //converts the array of rows (in this case an associate array) to json
                                                  //JSON_PRETTY_PRINT is constant that formats json that makes it easier to read with spacing and indents

// Step 4: Output
header('Content-Type: application/json'); //send out this http header, I'm telling the browser the thing I'm about to send you is json
echo $json; //print json string we made
