<?php


$db = DbConnection::getConnection(); //DbConnection is a class that was built by Tom. double-colon indicates a static method.. will send back a 500 error

// Step 2: Create & run the query
$stmt = $db->prepare(
'INSERT INTO PatientVisit
(patientGuid. visitDescription, priority)
VALUES (?,?,?)'
);

$stmt->execute([
  $_POST['patientGuid'],
  $_POST['visitDescription'],
  $_POST['priority']
]);

//todo: error checking code

header('HTTP/1.1 303 See Other');
header('Location: ../waiting/');
