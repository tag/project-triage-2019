var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: [],

    formPatient:{
      firstName: '',
      lastName: '',
      dob: '',
      sexAtBirth: ''

    }
  },

  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordApp.patients = json })
    }
  },
    handleCreateRecord(event){
      //TODO: POST the form contents somewhere
      //fetch(url, {method:"POST", data:this.formPatient})
      //.then(...)
      this.patients.push(this.formPatient);
      this.formPatient = {
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: ''


      },

      selectRecord(patients){
        console.log.alert(p);
      }


    },
  created() {
    this.fetchPatients();
  }
});
