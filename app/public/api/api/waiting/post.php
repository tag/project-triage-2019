<?php

//Step 0: Validate Data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO PatientVisit
  (patientGuid, visitDescription, priority)
  VALUES (?,?,?)'
);

);
$stmt->execute([
  $POST['patientGuid'],
  $POST['visitDescription'],
  $POST['priority']
]);

// Step 3: Convert to JSON
  //$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../waiting/');
