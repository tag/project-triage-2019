<?php

// Step 1: Get a datase connection from our help class = dbconnection
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM Patient');
//run the query
$stmt->execute();
$patients = $stmt->fetchAll();

// Step 3: Convert to JSON
//json_encode function php
$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output
//type of output mimetype application - namespace
header('Content-Type: application/json');
echo $json;
