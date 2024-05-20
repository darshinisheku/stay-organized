window.onload=function()
{
    console.log('enter the js')
    let dropdown = document.getElementById("dropdownMenuButtonCategory");
    fetch("http://localhost:8083/api/categories")
    .then(response => response.json())
    .then(responseDate => {
        for(let i=0;i<responseDate.length;i++){

            let theOption = new Option(responseDate[i].name,responseDate[i].id);
            dropdown.appendChild(theOption);
        }
    })

    console.log('enter the js')
    let dropdownUser = document.getElementById("dropdownMenuButton");
    fetch("http://localhost:8083/api/users")
    .then(response => response.json())
    .then(responseDate => {
        for(let i=0;i<responseDate.length;i++){

            let theOption = new Option(responseDate[i].name,responseDate[i].id);
            console.log(theOption);
            dropdownUser.appendChild(theOption);
          //  dropdown.onchange = getUserDetails(responseDate[i].id);
        }
    })

}

function postnewTodo()
{
    // console.log(document.querySelector('input[name="completed"]'))
    let bodyData = {
       // id : "",
        userid : document.getElementById("dropdownMenuButton").value,
        category : document.getElementById("dropdownMenuButtonCategory").value,
        description : document.getElementById("description").value,
        deadline : document.getElementById("deadline").value,
        priority : document.getElementById("priority").value,
      //  completed : ""
       // completed : document.querySelector('input[name="completed"]:checked').value
    }


    //send data

    fetch("http://localhost:8083/api/todos", { 
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {"Content-type": 
                  "application/json; charset=UTF-8"}
    
    })
    .then(response => response.json())
    .then(json => {
        console.log("Successfully added")
      //  let message = "Task" + json.id + "added successfully";
        // let successToast = document.querySelector(".successToast");
        // successToast.show();
    })
    .catch(err => {
        console.log("Unable to create task.")
    });

    

}