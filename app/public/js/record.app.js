var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data:
  {
    patients:[],
    formPatient:
    {
      firstName:'',
      lastName :'',
      dob:'',
      sexAtBirth:''
    }
  },
  methods:
  {
    fetchPatients()
    {
      fetch('dummy.php')
      .then( response => response.json())
      .then( json => {patientRecordApp.patients = json});
    },

    handleCreateRecord(event){
      //todo: post data to API
      //fetch(url,{method:'post',data:this.formPatient})
      //.then()
      this.patients.push(this.formPatient);
      this.formPatient = {
        firstName:'',
        lastName :'',
        dob:'',
        sexAtBirth:''
      }
    },
    handleRecordClick(patient)
    {
      //todo: pass this data to another Vue app
      console.log(patient);
    }
  },

  created()
  {
    this.fetchPatients();
  }
});

// var waitingApp = new Vue({
//   el: '#patientWaitingApp',
//   data: {
//     patients: []
//   },
//   methods: {
//     fetchPatients() {
//       fetch('dummy.php')
//       .then(response => response.json())
//       .then(json => {waitingApp.patients = json});
//
//       // Means the same at this
//       // fetch('https://randomuser.me/api/')
//       // .then(function(response) {return response.json()})
//       // .then(function(json) {waitingApp.people = json});
//
//     }
//   },
//   created: function() {
//     this.fetchPatients();
//   }
//
// })
