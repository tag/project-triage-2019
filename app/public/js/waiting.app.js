var waitingApp = new Vue({
  el: '#patientwaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('https://randomuser.me/api/')
      .then( result => result.json())
      .then( json => {waitingApp.people = json.results[0]})
      return result.json()
      ;
    }
  }
});
