var patientTriageApp = new Vue({
  el: '#patientTriageApp',
  data: {
    patient: {}
  },
  methods: {
    handleSubmit() {
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
