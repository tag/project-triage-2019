<?php
//everything is going to be php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
//$db = variable
// -> instance, :: static elements

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO PatientVisit
    (patientGuid, visitDescription, priority)
  VALUES (?,?,?)'
);
// call prepare method - pulls data from patient
//HOW TO PREVENT SQL INJECTION
$stmt->execute([
  $_POST['patientGuid'],
  $_POST['visitDescription'],
  $_POST['priority']
]);
// execute the stmt - can add factors?
// $patients = $stmt->fetchAll();
//access with fetchAll - get all rows back - each item - associate array with name and value

// patientGuid VARCHAR(64) PRIMARY KEY,
// firstName VARCHAR(64),
// lastName VARCHAR(64),
// dob DATE DEFAULT NULL,
// sexAtBirth CHAR(1) DEFAULT ''

// Step 3: Convert to JSON
// $json = json_encode($patients, JSON_PRETTY_PRINT);
// Pretty print = indent and new lines - easier to read - debuggin purposes

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../waiting/')
// header('Content-Type: application/json');
//  header - setting http header - /type  - eg: image/png, text/css
// echo $json;
