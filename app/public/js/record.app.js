var patientRecordsApp = new Vue({
  el: '#patientRecordsApp',
  data: {
    patients: [],
    recordPatient: {}
  },
  methods: {
    fetchPatients() {
      fetch('api/records/post.php')
      .then(response => response.json())
      .then(json => { patientRecordsApp.patients = json })
    },
    handleSubmit(event) {
      fetch(url, {
        method:'POST',
        body: JSON.stringify(this.patient),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }

      })
      .then( reponse => response.json() )
      .then( json => {waitingApp.patients = json })
      .catch9 err => {
        console.error('TRAIGE POST ERROR:');
        console.error(err);
      })
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
