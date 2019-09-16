// var app = new Vue({
// el: '#patientWaitingApp',
// data: {
//   person: {
//     name:{
//       first:"",
//       last:''
//     }
//   },
//   patients:[]
//   //   {
//   //     "patientGuid": "782f1b2b-5df3-4e89-a0ad-7a4b90742dfe",
//   //     "firstName": "Bjorn",
//   //     "lastName": "Liow",
//   //     "dob": "1996-02-20",
//   //     "sexAtBirth": "M",
//   //   },
//   //   {
//   //     "patientGuid": "794f1c4b-6gf3-2f56-a2de-8fas62382ghr",
//   //     "firstName": "Pearl",
//   //     "lastName": "Koc",
//   //     "dob": "1999-06-14",
//   //     "sexAtBirth": "F",
//   //   },
//   //   {
//   //     "patientGuid": "5321c2y4g-8yt3-4u90-b3ga-98dahcb2dfe",
//   //     "firstName": "Milo",
//   //     "lastName": "Ham",
//   //     "dob": "2017-04-20",
//   //     "sexAtBirth": "M",
//   //   }
//   // ]
// },
// methods: {
//   fetchPatients(){
//     fetch('something.php')
//     .then(response => response.json())
//     .then(json => {waitingApp.patients =json});
//   }},
// created: function() {
//   this.fetchPatients();
// }
//
// })


var url = 'https://randomuser.me/api/';
var fullnameDisp = document.querySelector("#fullname");
var avatar = document.querySelector("#avatar");
var username = document.querySelector("#username");
var city = document.querySelector("#city");
var email = document.querySelector("#email");

var btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(displayErrors);
});

function handleErrors(res){
  if(!res.ok){
    throw Error(res.status);
  }
  return res;
}

function parseJSON (res){
  return res.json().then(function(parsedData){
    return parsedData.results[0];
  })
}

function updateProfile (data){
    var fullname = data.name.first + " " + data.name.last;
    fullnameDisp.innerText = fullname;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
    email.innerText = data.email;
}

function displayErrors(err){
  console.log("INSIDE displayErrors!");
  console.log(err);
}
