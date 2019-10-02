<?php

//code goes here
//dollar sign in front of every variable

$someVar = 5;

function foo() {
return 'bar';
}

//print out
echo $someVar;
echo foo() . foo();

class MyClass
{
  public $someVar;

  public function addOne($n) {
    return $n + 1;
  }
}

$inst = new MyClass();

$inst->someVar = 5;

$temp = 'addOne';

$arr = [];

//ways to make arrays
array_push($arr, 'a');
$arr[] = 'b';

//show array
var_dump($arr);

//not dictionary, associativfe array
$arr['key'] = 'val';
