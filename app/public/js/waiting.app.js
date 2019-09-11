var waitingApp = new Vue( {
  el: "#patientWaitingApp",
    data: {
      patients: []
},

methods: {
  fetchPatients(){
    fetch('dummy.php')
    /*.then(function(result){return result.json()})*/
    .then(response => resonse.json())
    .then(json => {waitingApp.patients = json})
    ;
    console.log("This happens quickly");
  }
},
created: function(){
  this.fetchPatients();
}


/*  for assignment!!!!!
methods: {
  fetchPatients(){
    fetch('http://randomuser.me/api')
          *.then(function(result){return result.json()})*
    .then(response => resonse.json())
    .then(json => {waitingApp.patients = json.result[0]})
    ;
    console.log("This happens quickly");
  }
},
created: function(){
  this.fetchPatients();
}
*/
