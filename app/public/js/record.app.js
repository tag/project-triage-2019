var patientRecordApp = new Vue( {
  el: "#patientRecordApp",
    data: {
      patients: []
},

methods: {
  fetchPatients(){
    fetch('dummy.php')
    .then(response => resonse.json())
    .then(json => {patientRecordApp.patients = json.result[0]})
    ;
    console.log("This happens quickly");
  }
},
created: function(){
  this.fetchPatients();
}
