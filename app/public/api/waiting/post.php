<?php

// 0. Validate my data

$_POST


// Step 1: Get a datase connection from our help class
  //$db sets variable
  //DbConnection is the class
  //getConnection gets the connection to the DbConnection.php file
$db = DbConnection::getConnection();

// Step 2: Create & run the query
  //$stmt sets variable
  //prepare, prepares an SQL statement to be ran from $db variable
$stmt = $db->prepare(
  'INSERT INTO PatientVisit
    (patientGuid, visitDescription, priority)
  VALUES (?,?,?)'
  );
  //execute the SQL statement above
$stmt->execute([
  $_POST['patientGuid'],
  $_POST['visitDescription'],
  $_POST['priority']
]);


header('HTTP/1.1 303 See Other');
header('Location: ../waiting/');
