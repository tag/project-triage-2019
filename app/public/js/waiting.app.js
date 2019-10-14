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
    formatLocalVisitDate(d) {
      return moment.utc(d).local().format("HH:mm MMM Do");
    },
    sinceLocalVisitDate(d) {
      return moment.utc(d).local().fromNow();
    }
  },
  created() {
    this.fetchPatients();
  }
});
