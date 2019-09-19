var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: [],
    formPatient: {
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
    },
    handleCreateRecord(event) {
      // TODO: Post data to API
      // fetch(url, {method:'post', data: this.formPatient})
      // .then(...)
      this.patients.push(this.formPatient);
      this.formPatient = {
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: ''
      }
    },
    handleRecordClick(patient) {
      // TODO: Pass this data to another Vue app
      console.log(patient);
    }
  },
  created() {
    this.fetchPatients();
  }
});
