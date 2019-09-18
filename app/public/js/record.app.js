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
      },
        handleCreateRecord(event){
          // fetch(url, {method:'post',data:thisFormPatient})
          // .then()
          this.patients.push(this.formPatient);
          this.formPatient={
            firstName:'',
            lastName:'',
            dob:'',
            sexAtBirth:''
          }
      }
    },
    created: function(){
      this.fetchPatients();
    }
})
