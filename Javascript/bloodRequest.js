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

firebase
  .database()
  .ref("BloodRequest/")
  .on("value", (snapshot) => {
    var data = snapshot.val();
    var getKey = Object.keys(data);
    console.log(data);

    for (var i = 0; i <= getKey.length; i++) {
      var k = getKey[i];

      var email = data[k].email;
      var fullnames = data[k].fullname;
      var mobileno = data[k].mobilno;
      var blood = data[k].bloodgroup;

      let tableBody = document.getElementById("tableBody");

      let uiString = `<tr style="border: 1px solid black; ">
                        <th scope="row" id="emailid">${email}</th>
                        <td id="firstname">${fullnames}</td>
                        <td id="mobileno">${mobileno}</td>
                        <td id="genderbutton">${blood}</td>
                        <td><ul><li style="list-style-type: none;"><button class="btn btn-primary" onclick="${delete(mobileno)}">Delete</button></li></ul></tr>`;
      tableBody.innerHTML += uiString;
    }
  });
