var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('api/waiting/')
      .then(response => response.json())
      .then(json => { waitingApp.patients = json })
    },
    displayUtcAsLocal(d) {
      return moment.utc(d).local().format("h:mm:ss a, MMM DD")
    },
    displayUtcAsLocalFromNow(d) {
      return moment.utc(d).local().fromNow("m")
    }
  },
  created() {
    this.fetchPatients();
  }
});
