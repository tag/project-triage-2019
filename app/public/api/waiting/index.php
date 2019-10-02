<?php

// Step 1: Get a datase connection from our help class = dbconnection
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM Patient p, PatientVisit pv
                      WHERE p.patientGuid=pv.patientGuid');
//run the query
$stmt->execute();
$patients = $stmt->fetchAll();

// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''

// Step 3: Convert to JSON
//json_encode function php
$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output
//type of output mimetype application - namespace
header('Content-Type: application/json');
echo $json;
