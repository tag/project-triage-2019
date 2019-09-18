var waitingApp= new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients(){
      fetch('dummy.php')
      //.then(function(result) {return result.json()})
      .then(response => response.json()) //taking response object from headers
      .then(json => {waitingApp.patients = json});
      //same as
      // .then(function(json) {waitingApp.people =json});
      //console.log("This happens quickly")
      //fetch is started and then put to the side, 'then' happens after fetching, consolelog happens while fetching
    }
  },
  created: function(){
   this.fetchPatients();
  }
})
