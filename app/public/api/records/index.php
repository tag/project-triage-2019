<?php
//php doesn't have a library like python, installed to the server, and it works//
//you don't close your php tag in the end, instead, you create one blank line as an end
// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
//DbConnection is a class name. :: indicates it is a static method on the class,//
//a "factory function" you create it
// Step 2: Create & run the query
//prepare is a method on php's pdo class, run the statement of SELECT*FROM, returns to $stmt
$stmt = $db->prepare('SELECT * FROM Patient');
//return the data, but we haven't asked for it
$stmt->execute();
//fetching the results of the query, put it in patients
$patients = $stmt->fetchAll();

// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);
//json_encode is a part of php, anything all caps are constants
// Step 4: Output
//MIME type for json: application/json
header('Content-Type: application/json');
echo $json;
