<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection(); //make the variable DB and DBconnection is a class name
//double :: means you can all the function without an instance
// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM Patient');//this is a string; prepare is a method in php PDO method
$stmt->execute();//runs the query
$patients = $stmt->fetchAll();//fetching the result of the query, returns an arrey

// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);//json_encode is a function encode in php;
//Json_pretty_print is a constant, format json so it would be easier for human to read.
// Step 4: Output
header('Content-Type: application/json');//Send out this http header, telling the browser that it's sending a Json file. for all json file we use application/json 
echo $json;
