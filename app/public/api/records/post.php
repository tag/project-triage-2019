<?php
use Ramsey\Uuid\Uuid;

// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'INSERT INTO Patient
    (patientGuid, firstName, lastName, dob, sexAtBirth)
  VALUES (?,?,?,?,?)'
);

$guid = Uuid::uuid4()->toString();

$stmt->execute([
  $guid, // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['dob'],
  $_POST['sexAtBirth'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid='.$guid);
