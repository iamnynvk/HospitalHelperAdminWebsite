firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("index.html");
  } else {
    document.getElementById("user").innerHTML = "Hello, " + user.email;
  }
});

function logout() {
  firebase.auth().signOut();
}

function deleteRecord(k){
  console.log(k);
  let userRef = this.database.ref('Patients/' + k);
userRef.remove()
}

firebase
  .database()
  .ref("Patients/")
  .on("value", (snapshot) => {
    var data = snapshot.val();
    var getKey = Object.keys(data);
    //console.log(data);
    //console.log(getKey);

    for (var i = 0; i <= getKey.length; i++) {
      var k = getKey[i];

      var email = data[k].emailid;
      var firstname = data[k].firstname;
      var mobileno = data[k].mobileno;
      var gender = data[k].genderbutton;

      let tableBody = document.getElementById("tableBody");

      let uiString = `<tr style="border: 1px solid black; ">
                        <th scope="row" id="emailid">${email}</th>
                        <td id="firstname">${firstname}</td>
                        <td id="mobileno">${mobileno}</td>
                        <td id="genderbutton">${gender}</td>
                        <td><ul><li style="list-style-type: none;"><button id="${k}" class="btn btn-primary" onclick="deleteRecord(this.id)">Delete</button></li></ul></tr>`;
      tableBody.innerHTML += uiString;
    }
  });


 
  

