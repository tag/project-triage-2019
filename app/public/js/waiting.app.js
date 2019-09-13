var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients:[
/*              {
                "patientGuid": "SOME-REALLY-SHORT-1",
                "firstName": "Jason",
                "lastName": "Dummuy",
                "dob": "2006-09-03",
                "sexAtBirth": "Male",
                priority:"high"
              },
              {
                "patientGuid": "SOME-REALLY-SHORT-2",
                "firstName": "Roxie",
                "lastName": "Liu",
                "dob": "2009-09-03",
                "sexAtBirth": "Male",
                priority:"medium"
              },
              {
                "patientGuid": "SOME-REALLY-SHORT-3",
                "firstName": "Griffin",
                "lastName": "Jung",
                "dob": "1998-09-03",
                "sexAtBirth": "Male",
                priority:"low"
              }
*/
            ]
        },
  methods:
  {
    fetchPatients()
    {
      fetch('dummy.php')
      .then( response => response.json())
      .then( json => {waitingApp.patients = json})
      ;
      // .catch(/*function goes here*/)
      //  thenDoThis();

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});
    }
  },

  created()
  {
    this.fetchPatients();
  }

})
