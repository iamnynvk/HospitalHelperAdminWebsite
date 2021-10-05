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
    .ref("DoctorAppoimentDatail/")
    .on("value", (snapshot) => {
      var data = snapshot.val();
      var getKey = Object.keys(data);
      console.log(data);
  
      for (var i = 0; i <= getKey.length; i++) {
        var k = getKey[i];

        var firstname = data[k].firstname;
        var mobileno = data[k].mobileno;
        var doctorname = data[k].doctorname;
        var bookdate = data[k].doctorbookdate;
        var time = data[k].time;
        var specialist = data[k].type;
        

  
        let tableBody = document.getElementById("tableBody");
  
        let uiString = `<tr style="border: 1px solid black; ">
                          <td id="firstname">${firstname}</td>
                          <td id="mobileno">${mobileno}</td>
                          <td id="doctorname">${doctorname}</td>
                          <td id="doctorbook">${bookdate}</td>
                          <td id="time">${time}</td>
                          <td id="time">${specialist}</td>
                          <td><ul><li style="list-style-type: none;"><button class="btn btn-primary" onclick="${delete(mobileno)}">Delete</button></li></ul></tr>`;
        tableBody.innerHTML += uiString;
      }
    });
  