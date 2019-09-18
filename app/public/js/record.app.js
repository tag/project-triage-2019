var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordApp.patients = json })
    }
  },
  created() {
    this.fetchPatients();
  }
});
