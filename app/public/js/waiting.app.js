var waitingApp = new Vue({
el: '#app',
data: {
  patients: [
      {
        "patientGuid":"123",
        "firstName":"Alex",
        "lastName":"Zubi",
        "dob":"1996-12-09",
        "sexAtBirth":"M",
        priority: "high"
      },

      {
        "patientGuid":"234",
        "firstName":"Bob",
        "lastName":"Gregory",
        "dob":"1997-01-20",
        "sexAtBirth":"F",
        priority:"medium"
      },

      {
        "patientGuid":"345",
        "firstName":"Clide",
        "lastName":"Bala",
        "dob":"1998-09-01",
        "sexAtBirth":"F",
        priority:"low"
      }

  ]
},
 methods: {
   fetchPatients() {
     fetch('dummy.php')
     .then( response => response.json() )
     .then( json => {waitingApp.patients = json} )
     ;
   }
 },

 created() {
   this.fetchPatients();
 }
})
