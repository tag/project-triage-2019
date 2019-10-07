<?php

//step 0: validate data

//step 1: get db connection
$db = DbConnection::getConnection();


//step 2: prepare and run the query
$stmt = $db->prepare(
  'INSERT INTO PatientVisit
  (patientGuid, visitDescription, priority)
  VALUES (?,?,?)'
);

//sql injection
// 'INSERT INTO PatientVisit
// (patientGuid, visitDescription, priority)
// VALUES ('.$_POST['patientGuid']. ',?,?)'

//do to prevent SQL injection
$stmt->execute([
  $_POST['patientGuid'],
  $_POST['visitDescription'],
  $_POST['priority']
]);

//step 3: retreive data (no data)

//step 4: output - redirect and go elsewhere
header('HTTP/1.1 303 See Other');
header('Location: ../waiting/');
