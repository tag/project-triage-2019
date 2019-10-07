<?php

//0.validate my data
//$_GET
//$_POST
//$_ENV
//$_SERVER
use Ramsey\Uuid\Uuid;
$guid = Uuid::uuid4() ->toString();



// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Patient
    (patientGuid, firstName, lastName, dob, sexAtBir)
  VALUES(?,?,?,?,?)'
);
//VALUES(' .$_POST['GUID'] . ',?,?)
$stmt->execute(
  [
    $guid,
    $_POST['firstName'],
    $_POST['lastName'],
    $_POST['dob'],
    $_POST['sexAtBir']
  ]);

// Step 4: Output (have to send out header before we pring $json)
header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid='.$guid);
