const form = document.getElementById('formsubmit');




form.addEventListener('submit', runSubmit);

const url = 'http://localhost:5010/api/v1/red-flags';
function runSubmit(e) {
  e.preventDefault();

  const formData = {
        title: document.getElementById("title").value,
        comments: document.getElementById("comments").value,
        location: document.getElementById("location").value
    }
    fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(response => {
    //   Redirect to login
    if (response.status == 200) {
        window.location.href = "view-redflag-records.html";
      }
      return response.json();
    })
    .then(data => {
      data.errors.title !== undefined ? (document.getElementById("title-err").innerHTML = data.errors.title) : (document.getElementById("title-err").innerHTML = "");
      data.errors.comments !== undefined ? (document.getElementById("comments-err").innerHTML = data.errors.comments) : (document.getElementById("comments-err").innerHTML = "");
      data.errors.location !== undefined ? (document.getElementById("location-err").innerHTML = data.errors.location) : (document.getElementById("location-err").innerHTML = "");
    }).catch(err => {
       return err;
    });
    
}


// Location Cordinates
const geoFind = document.getElementById("geofind");
geoFind.addEventListener("click", runFindMe)
function runFindMe() {
    const output = document.getElementById("location");
    

    if (!navigator.geolocation) {
      output.innerHTML =
        "<p>Geolocation is not supported by your browser</p>";
      return;
    }

    function success(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      document.getElementById("location").value = `${latitude}-lat  ${longitude}-long`;
    }

    function error() {
      output.innerHTML = "Unable to retrieve your location";
    }

    output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error);
  }




