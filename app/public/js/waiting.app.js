var waitingApp= new Vue({
  el: '#PatientWaitingApp', //points back to object in html; its constraining the script in the scope of the element
  data: { //data for my application
    patients:[]
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then (json => {waitingApp.patients = json}); //fetch runs asynchronously
      // Means the same at this
     //       // fetch('https://randomuser.me/api/')
     //       // .then(function(response) {return response.json()})
     //       // .then(function(json) {waitingApp.people = json});
    }
  },
  created() {
    this.fetchPatients();
  }// a function which is envoked when the vue application is created
})
