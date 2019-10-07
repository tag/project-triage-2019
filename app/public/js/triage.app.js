var patientTriageApp = new Vue({
  el: '#patientTriageApp',
  data: {
    patient: {}
  },
  methods: {
    handleSubmit() {
      // TODO: Add the correct date via Javascript before posting

       // TODO:
       fetch(url, {
       method:'post',
       //serialize the data using json.stringfy so that you can send the data across the network
       body: JSON.stringify(this.patient),
       headers:{
         //utf-8
         "Content-type": "application/json; charset=utf-8"
       }
       })
       
       .then(respons=>response.json())
       .then(json=>{waitingApp.patients=json})
       .catch(err=>{
         console.error('WORK TRIAGE ERROR:');
         console.error(err);
       })
       waitingApp.patients.push(this.patient);
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
