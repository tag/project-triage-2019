var app = new Vue({
el:'#patientWaitingApp',
data:{
  patients:[

  ]
}
 "patientGuid":1,
"firstName":"Desiree",
"lastName":"Blakeston",
"dob":"3/12/2019",
"sexAtBirth":"Female"}})
})

methods:{
  fetchPatients: functions(){
    fetch()
    .then()
    ;

  }
}

created() {
  this.fetchPatients();

}
