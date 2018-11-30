const form = document.getElementById('formsubmit');



form.addEventListener('submit', runSubmit);

const url = 'http://localhost:5010/api/v1/users/login';
function runSubmit(e) {
  e.preventDefault();

  const formData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,

    }
  // The parameters we are gonna pass to the fetch function
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(response => {
    //   Redirect to login
    setTimeout(() => {
        if (response.status == 200) {
            window.location.href = "Dashboard.html";
          }
          
    }, 1000)
        return response.json();
    })
    .then(data => {
      data.errors.email !== undefined ? (document.getElementById("email-err").innerHTML = data.errors.email) : (document.getElementById("email-err").innerHTML = "");
      data.errors.password !== undefined ? (document.getElementById("password-err").innerHTML = data.errors.password) : (document.getElementById("password-err").innerHTML = "");

    }).catch(err => {
       return err;
    });
    
}
