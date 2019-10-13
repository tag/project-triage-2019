<?php

// Step 1: Get a datase connection from our help class
  //$db sets variable
  //DbConnection is the class
  //getConnection gets the connection to the DbConnection.php file
$db = DbConnection::getConnection();

// Step 2: Create & run the query
  //$stmt sets variable
  //prepare, prepares an SQL statement to be ran from $db variable
$stmt = $db->prepare('SELECT * FROM Patient');
  //execute the SQL statement above
$stmt->execute();
  //$patients sets variable
  //fetchAll gets an array of rows
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
