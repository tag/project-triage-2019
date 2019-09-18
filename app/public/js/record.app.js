var patientRecordApp = new Vue( {
  el: "#patientRecordApp",
    data: {
      patients: [],
      formPatient: {
        firstName:'',
        lastName:'',
        dob:'',
        sexAtBirth:''
      }
},
    methods: {
      fetchPatients(){
        fetch('dummy.php')
        .then(response => response.json())
        .then(json => {patientRecordApp.patients = json})
        ;
        console.log("This happens quickly");
      }
    },
    created: function(){
      this.fetchPatients();
    }
