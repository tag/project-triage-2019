var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('dummy.json')
      .then(response => response.json())
      .then(json => { waitingApp.patients = json })
    }
  },
  created() {
    this.fetchPatients();
  }
});



var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('dummy.json')
      .then(response => response.json())
      .then(json => { patientRecordApp.patients = json })
    }
  },
  created() {
    this.fetchPatients();
  }
});
