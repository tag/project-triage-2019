var patientRecordsApp = new Vue({
  el: '#patientRecordsApp',
  data: {
    patients: [],
    recordPatient: {}
  },
  methods: {
    fetchPatients() {
      fetch('api/record/')
      .then(response => response.json())
      .then(json => { patientRecordsApp.patients = json })
    },
    handleSubmit(event) {
      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.patient),
        headers:{
          "CONTENT_TYPE": "applicaiton/json; charset=utf-8"
        }
       })
       .then(response => response.json())
       .then(json => { waitingApp.patients = json})
       .catch(err => {
         console.error('TRIAGE POST ERROR:');
         console.error(err);
       });

      this.patients.push( this.recordPatient );
      this.handleReset();
    },
    handleReset() {
      this.recordPatient = {
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: ''
      }
    },
    handleRowClick(patient) {
      patientTriageApp.patient = patient;
    }
  }, // end methods
  created() {
    this.handleReset();
    this.fetchPatients();
  }
});
