const username = document.getElementById("username");

username.addEventListener("click", showUsername);



const url = 'http://localhost:5010/api/v1/users';
function showUsername() {
    console.log(`Hello`)
  // The parameters we are gonna pass to the fetch function
  fetch(url, {
    method: 'get',
    headers: {
      'Accept': 'application/json, */*',
      'Content-Type': 'application/json'
    }
  }).then(response => {
        return response.json();
  })
    .then(data => {
      console.log(data)
        username.innerText = data.name;
    }).catch(err => {
       return err;
    });
    
}