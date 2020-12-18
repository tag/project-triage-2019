<?php

// Step 1: Get a datase connection from our help class
  //$db sets variable
  //DbConnection is the class
  //getConnection gets the connection to the DbConnection.php file
$db = DbConnection::getConnection();

// Step 2: Create & run the query
if (isset($_GET['guid'])) {
  $stmt = $db->prepare(
    'SELECT * FROM Patient
    WHERE patientGuid = ?'
  );
  $stmt->execute([$_GET['guid']]);
} else {
  $stmt = $db->prepare('SELECT * FROM Patient');
  $stmt->execute();
}

$patients = $stmt->fetchAll();

// Step 3: Convert to JSON
  //json_encode converts php to json
  // JSON_PRETTY_PRINT makes the json "pretty" or well structured
$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output
  //Content-Type tells what type of code structure it could be printed in
header('Content-Type: application/json');
  //echo prints
echo $json;
