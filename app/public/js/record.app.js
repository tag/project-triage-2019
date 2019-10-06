var patientRecordsApp = new Vue({
  el: '#patientRecordsApp',
  data: {
    patients: [],
    recordPatient: {}
  },
  methods: {
    fetchPatients() {
      fetch('api/waiting/post.php')
      .then(response => response.json())
      .then(json => { patientRecordsApp.patients = json })
    },
    handleSubmit(event) {
      fetch(url, {
method: 'POST',
body: JSON.stringify(this.patient),
headers: {
  "Content-Type":"application/json; charset=utf-8" //allows you to use all languages with all characters (example:arabic alphabet)
}
      })
      .then(response => response.json())
      .then(json => {waitingApp.patients = json})
      .catch (err=> {
        console.error( 'WORK TRIAGE ERROR:');
        console.error(err);
      })
      // fetch(url, {
      //   method: 'post',
      //   data: this.recordPatient
      // })
      // .then( ... )
    //  waitingApp.patients.push( this.recordPatient );
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
