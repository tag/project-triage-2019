<?php

//0.validate my data
//$_GET
//$_POST
//$_ENV
//$_SERVER

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO PatientVisit
    (patientGuid, visitDescription,priority)
  VALUES(?,?,?)'
);
//VALUES(' .$_POST['GUID'] . ',?,?)
$stmt->execute(
  [
    $_POST['patientGuid'],
    $_POST['visitDescription'],
    $_POST['priority']
  ]);

// TODO: error checking?

// Step 4: Output (have to send out header before we pring $json)
header('HTTP/1.1 303 See Other');
header('Location: ../waiting/');
