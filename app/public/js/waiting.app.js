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
    formatlocatVisitDate(d) {
      return moment.utc(d).local().format{'HH:mm, MMM Do YY'}
    },
    sincelocalVisitDate(d){
      return moment.utc(d).local().fromNow();
    }
  },
  created() {
    this.fetchPatients();
  }
});
