<?php
use Ramsey\Uuis\Uuid

$db = DbConnection::getConnection(); //DbConnection is a class that was built by Tom. double-colon indicates a static method.. will send back a 500 error

// Step 2: Create & run the query
$stmt = $db->prepare(
'INSERT INTO Patient
(patientGuid. firstName, lastName, dob, sexAtBirth)
VALUES (?,?,?,?,?)'
);


$guid = Uuid::uuid4()->toString();

$stmt->execute([
$guid,
  $_POST['patientGuid'],
  $_POST['firstName'],
  $_POST['lastName']
  $_POST['dob']
  $_POST['sexAtBirth']
]);

//todo: error checking code

header('HTTP/1.1 303 See Other');
header('Location: ../records/');
