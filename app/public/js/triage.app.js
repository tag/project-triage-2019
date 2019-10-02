var patientTriageApp = new Vue({
  el: '#patientTriageApp',
  data: {
    patient: {}
  },
  methods: {
    handleSubmit() {
      // TODO: Add the correct date via Javascript before posting
      // TODO:
       fetch('api/waiting/post.php', {
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
