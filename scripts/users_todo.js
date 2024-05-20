window.onload=function()
{
    console.log('enter the js')
    let dropdown = document.getElementById("dropdownMenuButton");
    fetch("http://localhost:8083/api/users")
    .then(response => response.json())
    .then(responseDate => {
        for(let i=0;i<responseDate.length;i++){

            let theOption = new Option(responseDate[i].name,responseDate[i].id);
            dropdown.appendChild(theOption);
          //  dropdown.onchange = getUserDetails(responseDate[i].id);
        }
    })

}

async function getUserDetails( ){
    let dropValue = document.getElementById("dropdownMenuButton");
    let userId = dropValue.value;
    console.log("trying to fetch user TODOs")
    console.log(userId);
    let table = document.getElementById("userTodoTable");
    const response = await fetch('http://localhost:8083/api/todos/byuser/'+userId);
    const data = await response.json();
    console.log("Length od data : "+data.length);


        for(let i=0; i<data.length; i++) {
            console.log("enter for loop");
           let row = table.insertRow(-1);
           let cell1 = row.insertCell(0);
           let cell2 = row.insertCell(1);
           let cell3 = row.insertCell(2);

           cell1.innerHTML = data[i].userid;
           cell2.innerHTML = data[i].description;
           cell3.innerHTML = data[i].deadline;

        const detailsCell = row.insertCell();
        let anchor = document.createElement("a");
        anchor.href =  'users-todo.html#detailedDiv?userid='+data[i].userid;
        anchor.text = "See details";  
        detailsCell.appendChild(anchor);


        }


}

function getFullDetails(){
    const urlParams = new URLSearchParams(location.search);
    let userid = -1;
    if (urlParams.has("userid") === true)
    {
    userid = urlParams.get("cid")
    }

    console.log("trying to display full user details");
    let detailDiv = document.getElementById("detailedDiv");

    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    fetch("http://localhost:8083/api/todos/"+userid)
    .then(response => response.json())
    .then(responseData =>{
        for(let i=0; i<responseData.length; i++){

            for(const key in responseData[i]){

                let row0 = tbl.insertRow(-1);
                let cell1 = row0.insertCell(0);
                let cell2 = row0.insertCell(1);
        
                cell1.innerHTML = '${key}';
                cell2.innerHTML = '${responseData[i][key]}'

            }

        }
        
    }

    )
}