<?php

//require 'class/DbConnection.php';

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT * FROM users WHERE email = ? AND status=?');
$stmt->execute([$email, $status]);
$user = $stmt->fetch();
