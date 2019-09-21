var patientRecordApp = new Vue({
  el: '#patientRecordApp',
<<<<<<< Updated upstream
  data:
  {
    patients:[],
      formPatient:
      {
=======
  data: {
    patients:[],
/*    formPatient:{
>>>>>>> Stashed changes
      firstName:'',
      lastName :'',
      dob:'',
      sexAtBirth:''
<<<<<<< Updated upstream
      }
=======
    }*/
>>>>>>> Stashed changes
  },
  methods:
  {
    fetchPatients()
    {
      fetch('dummyJason.php')
      .then( response => response.json())
      .then( json => {patientRecordApp.patients = json});
    },
<<<<<<< Updated upstream

    handleCreateRecord(even)
    {
=======
    handleCreateRecord(even){
>>>>>>> Stashed changes
      //todo: post data to API
      //fetch(url,{method:'post',data:this.formPatient})
      //.then()

      this.patients.push(this.formPatient);
<<<<<<< Updated upstream
      this.formPatient:
      {
=======
      this.formPatient:{
>>>>>>> Stashed changes
        firstName:'',
        lastName :'',
        dob:'',
        sexAtBirth:''
      }
<<<<<<< Updated upstream

    },

    handleCreateRecord(patient)
    {
      //todo: pass this data to another Vue app
      console.log(patient);
=======
>>>>>>> Stashed changes
    }
  },

  created()
  {
    this.fetchPatients();
  }

})

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
