<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM Patient');
$stmt->execute();
$patients = $stmt->fetchAll();

// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
