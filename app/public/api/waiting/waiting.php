<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection(); //DbConnection is a class that was built by Tom. double-colon indicates a static method.. will send back a 500 error

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM PatientVisit'); //made our sql into a string. Called the db to the method prepare on the php included db library (returns php statement object)
$stmt->execute();//telling that query stmt object to run
$patients = $stmt->fetchAll(); //fetching the resutls of the query^

// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT); //takes the associative arrays and converts that to JSON (jSon_encode is build into the php library)
//pretty print makes it easy to read the json code with indentations and spaces
// Step 4: Output
header('Content-Type: application/json'); //telling the browser that the thing you are about to send is JSON. By default, the assumption would be that the content is html.
//mime type for JSON
echo $json;
