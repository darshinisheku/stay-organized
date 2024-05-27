window.onload=function()
{
    console.log('enter the js')
    let dropdown = document.getElementById("dropdownMenuButtonCategory");
    fetch("http://localhost:8083/api/categories")
    .then(response => response.json())
    .then(responseDate => {
        for(let i=0;i<responseDate.length;i++){

            let theOption = new Option(responseDate[i].name,responseDate[i].name);
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

async function postnewTodo()
{
    // console.log(document.querySelector('input[name="completed"]'))
    let value = document.getElementById("dropdownMenuButtonCategory").value;
    console.log("value is : "+ value);

//    let categoryValue = "";
//     await fetch("http://localhost:8083/api/categories")
//     .then(response =>response.json())
//     .then(responseDate => {
//         for(let i=0;i<responseDate.length;i++){
//             if(responseDate[i].id === value){
//                 categoryValue = responseDate[i].name;
//                 console.log("categoryValue" + categoryValue);
//             }
//         }
//     })
   
// console.log("todo category is :" + categoryValue);
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

    await fetch("http://localhost:8083/api/todos", { 
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {"Content-type": 
                  "application/json; charset=UTF-8"}
    
    })
    .then(response => response.json())
    .then(json => {
        console.log("Successfully added")
        let formstatus = document.getElementById("taskForm");
        formstatus.reset();
      //  let message = "Task" + json.id + "added successfully";
        // let successToast = document.querySelector(".successToast");
        // successToast.show();
    })
    .catch(err => {
        console.log("Unable to create task.")
    });

    

}

function formReset(){
    document.getElementById("taskForm").reset();
   // document.getElementById("userNameStatus").innerHTML = ""
  }