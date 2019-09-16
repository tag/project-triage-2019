var randomApp = new Vue({
   el: '#patientInfoApp',
   data: {
     people: []
   },
   methods: {
     fetchPatients() {
       fetch('https://randomuser.me/api/')
        .then(function(response) {return response.json()})
        .then(function(json) {randomApp.people = json});

     }
   },
   created: function() {
     this.fetchPatients();
   }

 })
