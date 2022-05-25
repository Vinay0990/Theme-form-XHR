/* the themes object declared below contains theme properties with 
 backgroundColor and color values

 the theme property names are matched with ids of UI input elements of type 'radio' 
 available on the index.html page

 based on the radio button selected the theme property should be selected 
 and its values should be used to style the document
*/

const themes = {
  bright: {
    backgroundColor: "lightyellow",
    color: "darkgreen",
  },
  cool: {
    backgroundColor: "lightgray",
    color: "indigo",
  },
  fiery: {
    backgroundColor: "chocolate",
    color: "lightgoldenyellow",
  },
};

function changeTheme(event) {
  switch (event.target.id) {
    case "bright":
      document.body.style.backgroundColor = themes.bright.backgroundColor;
      document.body.style.color = themes.bright.color;
      break;
    case "cool":
      document.body.style.backgroundColor = themes.cool.backgroundColor;
      document.body.style.color = themes.cool.color;
      break;
    case "fiery":
      document.body.style.backgroundColor = themes.fiery.backgroundColor;
      document.body.style.color = themes.fiery.color;
      break;
  }
}

// Getting dynamic data in card

let dynamicData = document.getElementById("dynamicData");
var data = [];
(function getData() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "../data/data.json");
  xhr.responseType = "json";
  xhr.onload = () => {
    data = xhr.response;
    data.forEach((ele) => {
      let card = `<div class="card col-md-3 my-card">
            <div class="card-body">
              <h5 class="card-title ">${ele.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${ele.price}</h6>
              <p class="card-text">
                ${ele.description.substring(0, 50)}
              </p>
            </div>
          </div>`;
      dynamicData.innerHTML += card;
    });
  };
  xhr.send();
})();

// validate form
function validateForm(e) {
  e.preventDefault();
  let firstname = document.getElementById("firstname");
  validate(/[a-zA-Z]{3,20}/g, firstname);

  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let zip = document.getElementById("zip").value;

  let gender = getGender();
  let maritalStatus = getMaritalStatus();

  let entry = {
    firstname: firstname.value,
    lastname: lastname,
    email: email,
    phone: phone,
    city: city,
    state: state,
    gender: gender,
    maritalStatus: maritalStatus,
    zip: zip,
  };

  console.log(entry);
}

function validate(pattern, variable) {
  if (pattern.test(variable.value)) {
    return true;
  }
  variable.value = "";
  return alert(variable.id + " is not correct, please verify");
}

function getMaritalStatus() {
  //   Married
  let married = document.getElementById("married").checked;
  let single = document.getElementById("single").checked;

  if (married) {
    return "married";
  }
  if (single) {
    return "single";
  }
}
function getGender() {
  //   Gender
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let other = document.getElementById("other").checked;

  if (male) {
    return "male";
  }
  if (female) {
    return "female";
  }
  if (other) {
    return "other";
  }
}
