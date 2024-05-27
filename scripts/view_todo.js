window.onload = function () {
    console.log('enter the js')
    let dropdown = document.getElementById("dropdownMenuButton");
    fetch("http://localhost:8083/api/users")
        .then(response => response.json())
        .then(responseDate => {
            for (let i = 0; i < responseDate.length; i++) {

                let theOption = new Option(responseDate[i].name, responseDate[i].id);
                dropdown.appendChild(theOption);
                //  dropdown.onchange = getUserDetails(responseDate[i].id);
            }
        })

}

// function closeBtn(){

//    // const closeModalBtn = document.getElementById('closeModalBtn');
//     console.log("enter close button");

//     // Add event listener to the close button to close the modal when clicked
//     //closeModalBtn.addEventListener('click', function() {
//         // Get reference to the modal element
//         const myModal = document.getElementById('myModal');
//         // Hide the modal using Bootstrap's hide() method
//         const bootstrapModal = new bootstrap.Modal(myModal);
//         bootstrapModal.hide();
//    // });

// }


async function getUserDetails() {

    let details = document.getElementById('detailedDiv');
    details.innerHTML = "";
    let dropValue = document.getElementById("dropdownMenuButton");
    let userId = dropValue.value;
    console.log("trying to fetch user TODOs")
    console.log(userId);
    let table = document.getElementById("userTodoTable");
    const response = await fetch('http://localhost:8083/api/todos/byuser/' + userId);
    const data = await response.json();
    console.log("Length of data : " + data.length);


    // const accordion = document.createElement('div');
    // accordion.id = 'accordion';
    // details.appendChild(accordion);

    var accordionDiv = document.createElement('div');
    accordionDiv.className = "accordion";
    accordionDiv.id = "accordionExample";
    //      details.appendChild(accordionDiv);

    buttonDiv.innerHTML = ""
    console.log(data)
    if (data.length > 0) {

        let taskButtons = createButtons(data);
        let buttonDiv = document.getElementById("buttonDiv");
        buttonDiv.innerHTML = taskButtons;


        for (let i = 0; i < data.length; i++) {
            let accItem = createAccordionItem(data[i]);
            details.innerHTML += accItem;
        }
        // for(let i=0; i<data.length; i++) {

        //     const accordionDiv = document.createElement('div');
        //     accordionDiv.className = "accordion";
        //     accordionDiv.id = "accordionExample";

        //     const accordionIt = document.createElement("div");
        //     accordionIt.className = "accordion-item";

        //     const accordionHead = document.createElement('h2');
        //     accordionHead.className = "accordion-header";
        //     accordionHead.id = "heading"+i;

        //     const accordionBtn = document.createElement("button");
        //     accordionBtn.className = "accordion-button";
        //     accordionBtn.type = "button";
        //   // accordionBtn.setAttribute("role","button");
        //     accordionBtn.setAttribute("data-bs-toggle", "collapse");
        //     accordionBtn.setAttribute("data-bs-target", "#collapse"+i);
        //     accordionBtn.setAttribute("aria-expanded", "true");
        //     accordionBtn.setAttribute("aria-controls", "collapse"+i);

        //    // accordionBtn.innerHTML = data[i].category;

        //     const spanTexts = [data[i].category, data[i].priority ,  data[i].completed];
        //     spanTexts.forEach(async(text, j) => {
        //         // Create a span element

        //         const span = document.createElement('span');
        //         const span1 = document.createElement('span');
        //         span1.className = "toggleSpan";
        //         span.textContent = text;
        //         if(text == "High"){
        //             span.className = "badge badge-danger";
        //             span.style="font-size:20px"
        //         }else if(text == "Medium"){
        //             span.className = "badge badge-warning"
        //             span.style="font-size:20px"
        //         }else if(text == "Low"){
        //             span.className = "badge badge-info";
        //             span.style="font-size:20px"
        //         }else if(text === true){
        //             span.textContent = "";
        //             span.className = "span-"+j;

        //             let switch1 = await createSwitch(data[i].completed);
        //             // let switchInput = document.getElementById("flexSwitchCheckDefault");
        //             // switchInput.checked = true;
        //             let icon = document.createElement("i");
        //             icon.className = "bi bi-check-circle-fill"

        //             span1.appendChild(switch1);




        //             span.style = "color: green; font-size: 30px"
        //             span.appendChild(icon);
        //         }
        //         else if(text === false){
        //             span.textContent = "";
        //             span.className = "span-"+j;


        //             let switch1 = await createSwitch(data[i].completed);
        //             // let switchInput = document.getElementById("flexSwitchCheckDefault");
        //             // switchInput.checked = false;
        //           //  const span1 = document.createElement('span');

        //             let icon = document.createElement("i");
        //             icon.className = "bi bi-x-circle-fill";



        //             span.style = "color: red; font-size: 30px"
        //             span1.appendChild(switch1);
        //             span.appendChild(icon);
        //           // accordionBody.appendChild(span1);
        //             console.log(span);
        //         }
        //         else{
        //             span.className = "span-"+j;
        //         }

        //         console.log("span-"+j);
        //         // Set the text content of the span

        //         // Append the span to the button
        //         accordionBtn.appendChild(span1);
        //         accordionBtn.appendChild(span);
        //       });

        //     const accordionContent = document.createElement("div");
        //     accordionContent.class = "accordion-collapse collapse show";
        //     accordionContent.setAttribute("aria-labelledby","heading"+i);
        //     accordionContent.setAttribute("data-bs-parent","accordionExample");

        //     let accordionBody = document.createElement("div");

        //     const spanTexts1 = [data[i].description, data[i].deadline,"delete"];
        //     spanTexts1.forEach((text1, j) => {

        //         const span = document.createElement('span');
        //         span.textContent = text1;
        //         if(text1 === "delete"){
        //             span.textContent = "";
        //             span.className = "span-"+j;
        //             let trash = document.createElement("button");
        //             // trash.setAttribute("href","#");
        //             trash.setAttribute("data-bs-toggle", "modal")
        //             trash.setAttribute("data-bs-target", "#exampleModal")
        //             trash.setAttribute("title","Remove");
        //             trash.style = "color:orange; font-size: 30px"
        //             // trash.addEventListener('click', function(){
        //             //     showHiddenModal(data[i].id)
        //             // });

        //             // trash.addEventListener('click',function(){

        //             //     let modal = document.getElementById("deleteModal");
        //             //     modal.style = "display:block"
        //             // });

        //             let icon = document.createElement("i");
        //             icon.className = "bi bi-trash3";
        //             trash.append(icon);

        //             span.appendChild(trash);



        //             let edit = document.createElement("a");
        //             edit.setAttribute("href","editTodo.html?id="+data[i].id);
        //             edit.setAttribute("title","Edit");



        //             edit.style = "margin-left:50px;color: orange; font-size: 30px"

        //             let icon1 = document.createElement("i");
        //             icon1.className = "bi bi-pencil";
        //             edit.appendChild(icon1);
        //             span.appendChild(edit);

        //             span.style = "margin-left: 250px;"



        //         }
        //         else{
        //             span.className = "span-"+j;

        //         }
        //         accordionBody.appendChild(span);


        //     });


        //   //  accordionBody.textContent = data[i].description;




        //     accordionContent.appendChild(accordionBody);
        //    // accordionContent.appendChild(accordionBody1);



        //     accordionHead.appendChild(accordionBtn);
        //     accordionIt.appendChild(accordionHead);
        //     accordionIt.appendChild(accordionContent);
        //     accordionContent.style.display = "none";
        //     accordionDiv.appendChild(accordionIt);

        //     details.appendChild(accordionDiv);

        //     accordionHead.addEventListener('click', () => {

        //             accordionContent.style.display = (accordionContent.style.display === 'block') ? 'none' : 'block';

        //             });

        //     }

    }

    else {

        // <div class="card w-75" style = "border : border block";>
        //     <div class="card-body">
        //          <h5 class="card-title">Card title</h5>
        //          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //          <a href="#" class="btn btn-primary">Button</a>
        //     </div>
        // </div>

        const cardDiv = document.createElement("div");
        cardDiv.className = "card w-75";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = "NO TASK"

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = "NO TASK FOR THE SELECTED USERS. ADD IF ANY"

        const anchorBtn = document.createElement("a");
        anchorBtn.className = "btn btn-primary";
        anchorBtn.setAttribute("href", "/newTodoForm.html");
        anchorBtn.textContent = "ADD TASK";

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(anchorBtn);
        cardDiv.appendChild(cardBody);
        details.appendChild(cardBody);


    }



}

function createButtons(data){

    let completed =0;
    let todo =0;
    for(let i=0;i<data.length;i++){
        if(data[i].completed){
            completed++;
           // let ctrue = document.getElementById("flexCheckChecked");
            // ctrue.checked = true;
        }else{
            todo++;
           // document.getElementById("flexCheckChecked").checked = false;
        }
    }
    let todoButtons = ` <button type="button" class="btn btn-danger">
                        To Do <span class="badge bg-danger">${todo}</span>
                        </button>

                        <button type="button" class="btn btn-success">
                            Done <span class="badge bg-success">${completed}</span>
                        </button>`

    return todoButtons;
}

function createAccordionItem(data) {
    let accordionItem = `
    <div style="margin: 0 20px; background: aliceblue;">
    <div style="padding: 0 1.25rem;; border-radius: 0.25rem; border: 1px solid rgba(0, 0, 0, .125); display: flex;
    justify-content: space-between;"
        data-bs-toggle="collapse" data-bs-target="#collapse${data.id}" aria-expanded="false"
        aria-controls="collapse${data.id}">
        <div class="form-check" style="display: flex; align-items: center">
            ${data.completed ? `<input class="form-check-input" type="checkbox" value="" id="${data.id}" checked style="margin-right:20px" onclick="updateTodo(${data.id})";>
            <label class="form-check-label" for="flexCheckChecked">
                ${data.category}
            </label>` : `<input class="form-check-input" type="checkbox" value="" id="${data.id}" style="margin-right:20px" onclick="updateTodo(${data.id})";>
            <label class="form-check-label" for="flexCheckChecked">
                ${data.category}
            </label>`}
            </div>
        <div>
            ${data.completed ? `<i class="btn bi bi-check-circle mr-3" style="font-size:1.5em; color: rgb(120, 233, 120);"></i>`
            : `<i class="btn bi bi-x-circle" style="font-size:1.5em; color: rgb(252, 88, 34);"></i>`}
            <i class="btn bi bi-pencil-square" style="font-size:1.5em;"></i>
            <i class="btn bi bi-trash3-fill" style="font-size:1.5em;"></i>
        </div>
    </div>
</div>
<div class="collapse" id="collapse${data.id}" style="margin: 0 20px">
    <div class="card card-body">
    <strong>Description:</strong> ${data.description}
        <div>
        <strong>Priority:</strong> ${data.priority} 

            ${data.priority == 'High' ? `<i class="bi bi-arrow-up-circle-fill" style="color: red"></i>` 
            : data.priority == 'Medium' ? ` <i class="bi bi-dash-circle-fill" style="color: orange"></i>` 
            : ` <i class="bi bi-arrow-down-circle-fill" style="color: green"></i>`}
        </div>
        <div>
        <strong>Deadline: </strong>
            <i class="bi bi-calendar2-check"></i>
            <span>${data.deadline}</span>
        </div>
    </div>
</div>
    `
    return accordionItem
}

function createModal(id) {

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby', 'exampleModalLabel');
    modal.setAttribute('aria-hidden', 'true');
    modal.id = "hiddenModal";

    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalHeader.innerHTML = `
    <h5 class="modal-title" id="exampleModalLabel">DELETE TODO</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  `;

    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalBody.textContent = 'Are you sure you want to delete this task?';

    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    modalFooter.innerHTML = `
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Confirm</button>

    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick=hideModal()>Close</button>`;

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);

    // Append modal to body
    document.body.appendChild(modal);

    // Show modal
    const dynamicModal = new bootstrap.Modal(modal);
    dynamicModal.hide();

    //  document.getElementById('openModalBtn').addEventListener('click', createDynamicModal);

}

// function showHiddenModal(id) {
//     console.log(id)
//     createModal(id);
//     const hiddenModal = new bootstrap.Modal(document.getElementById('hiddenModal'));
//     hiddenModal.show();
//   }

function hideModal() {
    const hiddenModal = new bootstrap.Modal(document.getElementById('hiddenModal'));
    hiddenModal.hide();
}


function showToast(message) {
    // Create a new toast element
    var toast = document.createElement("div");
    toast.classList.add("toast");

    // Set the message
    toast.innerText = message || "Default message";

    // Append toast to the body
    document.body.appendChild(toast);

    // Automatically remove toast after 3 seconds
    setTimeout(function () {
        toast.remove();
    }, 3000);
}

function deleteData(id) {
    console.log(id)
    fetch("http://localhost:8083/api/todos/" + id, {
        method: "DELETE",
    })
        .then(json => {
            showToast("Record deleted successfully");
            getUserDetails();
        })
}

// function createSwitch(){

//     let switchInput = document.createElement("input");
//                         switchInput.type = "checkbox";
//                         switchInput.id = "switch";
//                         switchInput.className = "checkbox";


//                         var switchLabel = document.createElement("label");
//                         switchLabel.classList.add("switch");

//                         // Create switch slider
//                         var switchSlider = document.createElement("span");
//                         switchSlider.classList.add("slider", "round");


//                         switchLabel.appendChild(switchInput);
//                         switchLabel.appendChild(switchSlider);

// }

async function createSwitch(completed) {
    let todoSwitch = document.createElement("div");

    todoSwitch.className = "form-check form-switch";
    todoSwitch.id = "myswitch";

    let tInput = document.createElement("input");
    tInput.className = "form-check-input";
    tInput.type = "checkbox";
    tInput.role = "switch";
    tInput.id = "flexSwitchCheckDefault";
    tInput.checked = completed;

    let tLabel = document.createElement("label");
    tLabel.className = "form-check-label";
    tLabel.setAttribute("for", "flexSwitchCheckDefault");
    tLabel.innerHTML = "Completed"

    todoSwitch.appendChild(tInput);
    todoSwitch.appendChild(tLabel);
    return todoSwitch;

}

async function updateTodo(id){

    console.log("edit todo" + id)
    const response = await fetch('http://localhost:8083/api/todos/'+id);
    const data = await response.json();
    let bodyData = {};
   // console.log("Length of data : " + data.length);
   if(data.completed){
        bodyData = {
        id: data.id,
        userid: data.userid,
        category: data.category,
        description: data.description,
        deadline: data.deadline,
        priority: data.priority,
        completed: false,
    }
    }else{

        bodyData = {
            id: data.id,
            userid: data.userid,
            category: data.category,
            description: data.description,
            deadline: data.deadline,
            priority: data.priority,
            completed: true,
        }


   }

   fetch('http://localhost:8083/api/todos/'+id, {
      method: "PUT",
      body: JSON.stringify(bodyData),
      headers: {"Content-type": 
                "application/json; charset=UTF-8"}
   })
   .then(response => {
    if(response.ok){

        return response.json();
    }
    throw new Error('Something went wrong');
    })
    .then(json => {
        // console.log("todo successfully updated");

        // let successToast = document.getElementById("successToast");
        // var toast = new bootstrap.Toast(successToast);
        // toast.showToast();
        // setTimeout(function () {
        //     successToast.classList.add("toast");
        // }, 3000);


        function showToast() { //You can change the default value
            // Get the snackbar DIV
            var x = document.getElementById("snackbar");
            
            //Change the text (not mandatory, but I think you might be willing to do it)
            x.innerHTML = content;
          
            // Add the "show" class to DIV
            x.className = "show";
          
            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }
        getUserDetails();

    })
    .catch(error => {
        console.error('Fetch error:', error);
        // let failedToast = document.getElementById("failedtoast");
        // var toast = new bootstrap.Toast(failedToast);
        // toast.hide();
      //  failedToast.style.display = 'block';
    });
   }
   









