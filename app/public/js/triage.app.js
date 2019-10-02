var patientTriageApp = new Vue({
  el: '#patientTriageApp',
  data: {
    patient: {}
  },
  methods: {
    handleSubmit() {
       fetch('api/waiting/post.php', {
         method:'POST',
         body: JSON.stringify(this.patient),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
       })
       .then( response => response.json() )
       .then( json => {waitingApp.patients = json})
       .catch( err => {
         console.error('TRIAGE POST ERROR:');
         console.error(err);
      });

       // waitingApp.patients.push(this.patient);
       this.handleReset();
    },
    handleReset() {
      this.patient = {
        patientGuid: '',
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: '',
        visitDescription: '',
        // visitDateUtc
        priority: 'low'
      }
    }
  },
  created() {
    this.handleReset();
  }
});
