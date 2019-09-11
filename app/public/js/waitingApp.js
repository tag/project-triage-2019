// var app = new Vue({
//   el: '#patientWaitingApp',
//   data: {
//     patients: [
//               	{
//               		"patientGuid" : "1000",
//               		"firstName" : "Jason",
//               		"lastName" : "Murner"
//               	  "dob" : "1997-07-16",
//               	  "sexAtBirth" : "M",
//               	},
//               	{
//               		"patientGuid" : "1001",
//               		"firstName" : "Penny",
//               		"lastName" : "Pan"
//               	  "dob" : "1997-09-16",
//               	  "sexAtBirth" : "F",
//               	},
//               	{
//               		"patientGuid" : "1002",
//               		"firstName" : "Hunter",
//               		"lastName" : "Davis"
//               	  "dob" : "1997-03-16",
//               	  "sexAtBirth" : "M",
//               	}
//               ]
//         },
//         methods: {
//           fetchPatients() {
//             fetch('hhtps://randomuser.me/api')
//             .then(function(result) {return result.json()})
//             .then(json => {waitingApp.person = json[0]});
//
//
//           }
//         },
//         created: function() {
//           fetchPatients()
//         }
// })


<script>
var app = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: [
                {
                  "patientGuid": "SOME-REALLY-LONG-1234",
                  "firstName": "Sylvia",
                  "lastName": "Hernandez",
                  "dob": "2012-09-01",
                  "sexAtBirth": "F"
                },
                {
                  "patientGuid": "SOME-REALLY-SHORT-5678",
                  "firstName": "Vish",
                  "lastName": "Balasubramanian",
                  "dob": "1950-12-15",
                  "sexAtBirth": "M"
                },
                {
                  "patientGuid": "SOME-UNIQUE-ABCDE1",
                  "firstName": "John",
                  "lastName": "Doe",
                  "dob": "1997",
                  "sexAtBirth": "M"
                }
              ]
            }

        // methods: {
        //   fetchPatients() {
        //     fetch('hhtps://randomuser.me/api')
        //     .then(response => response.json())
        //     .then(json => {waitingApp.patients = json});
        //     console.log("This happens quickly");
        //   }
        // },
        // created: function() {
        //   this.fetchPatients();
        // }
})
</script>
