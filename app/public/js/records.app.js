var patientRecordsApp = new Vue({
  el: '#patientRecordsApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordsApp.patients = json })
    }
  },
  created() {
    this.fetchPatients();
  }
});
