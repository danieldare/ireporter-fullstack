// const displayForm = document.querySelector(".edit-form");
const spinner = document.querySelector(".no-spinner");
const edit = document.querySelector("#edit");
// edit.addEventListener("click", editRecord);

let loading = true;
function editRecord(e) {
  e.preventDefault();
  //   scroll to the position
  scrollWin();
  // Add spinner class
  if (loading === true) {
    spinner.classList.add("show-spinner");
  }
  loading = false;
  setTimeout(() => {
    if (loading === false) {
      spinner.classList.remove("show-spinner");
      displayForm.classList.add("edit-show-form");
    }
  }, 2000);
}

function scrollWin() {
  window.scrollTo(0, 700);
}

const url = 'http://localhost:5010/api/v1/red-flags';

const table = document.getElementById("mytable");     

table.style.display = "none";
 if (loading === true) {
    spinner.classList.add("show-spinner");
  }
  loading = false;
  setTimeout(() => {
    if (loading === false) {
      spinner.classList.remove("show-spinner");
      table.style.display = "";
    }
  }, 2000);

window.onload =  function() {
  // The parameters we are gonna pass to the fetch function
  fetch(url, {
    method: 'get',
    headers: {
      'Accept': 'application/json, */*',
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if(response.status == 404){
      tr.innerHTML = "NO RECORD FOUND"
    }
        return response.json();
  })
    .then(data => {
      
      console.log(data.redflagStore.length === 0)
     
      data.redflagStore.forEach((item, index) => {
        
        const td = document.createElement("td");
        const tr = document.getElementById("tr");
        
        // if(item.id == )

        // Add class
        td.appendChild(document.createTextNode(item.title))
          
        const link1 = document.createElement("a");
     
        const link2 = document.createElement("a");
     
        // Add class
        link1.className = "action-btn btn-mr btn-blue";
        link2.className = "action-btn  btn-red";

        // Add text
        link1.innerHTML = "Edit";
        link2.innerHTML = "Delete";

        // Add id
        link1.setAttribute("id", "edit")
        link2.setAttribute("id", `delete`)

        td.appendChild(link1);
        td.appendChild(link2);

        tr.append(td)


        const urledit = `http://localhost:5010/api/v1/red-flags/${item.id}`;
        link2.addEventListener("click", runDelete);
        function runDelete(){

          fetch(urledit, {
            method: 'delete',
            headers: {
              'Accept': 'application/json, */*',
              'Content-Type': 'application/json'
            }
          }).then(response => {
                return response.json();
          }).then(data => {
            console.log(data)
          })
        }
      })
    }).catch(err => {
       return err;
    });
    
}


