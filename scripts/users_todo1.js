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

    let details = document.getElementById('detailedDiv');
    details.innerHTML = "";
    let dropValue = document.getElementById("dropdownMenuButton");
    let userId = dropValue.value;
    console.log("trying to fetch user TODOs")
    console.log(userId);
    let table = document.getElementById("userTodoTable");
    const response = await fetch('http://localhost:8083/api/todos/byuser/'+userId);
    const data = await response.json();
    console.log("Length of data : "+data.length);

    
    // const accordion = document.createElement('div');
    // accordion.id = 'accordion';
    // details.appendChild(accordion);

    var accordionDiv = document.createElement('div');
                    accordionDiv.className = "accordion";
                    accordionDiv.id = "accordionExample";
              //      details.appendChild(accordionDiv);
 

        if(data.length>0){
            for(let i=0; i<data.length; i++) {

                const accordionDiv = document.createElement('div');
                accordionDiv.className = "accordion";
                accordionDiv.id = "accordionExample";

                const accordionIt = document.createElement("div");
                accordionIt.className = "accordion-item";

                const accordionHead = document.createElement('h2');
                accordionHead.className = "accordion-header";
                accordionHead.id = "heading"+i;

                const accordionBtn = document.createElement("button");
                accordionBtn.className = "accordion-button";
                accordionBtn.type = "button";
                accordionBtn.setAttribute("data-bs-toggle", "collapse");
                accordionBtn.setAttribute("data-bs-target", "#collapse"+i);
                accordionBtn.setAttribute("aria-expanded", "true");
                accordionBtn.setAttribute("aria-controls", "collapse"+i);

                accordionBtn.innerHTML = data[i].category;

                const accordionContent = document.createElement("div");
                accordionContent.class = "accordion-collapse collapse show";
                accordionContent.setAttribute("aria-labelledby","heading"+i);
                accordionContent.setAttribute("data-bs-parent","accordionExample");

                const accordionBody = document.createElement("div");
                accordionBody.className = "accordion-body";
                accordionBody.textContent = data[i].description;

                
                accordionContent.appendChild(accordionBody);


                accordionHead.appendChild(accordionBtn);
                accordionIt.appendChild(accordionHead);
                accordionIt.appendChild(accordionContent);
                accordionContent.style.display = "none";
                accordionDiv.appendChild(accordionIt);

                details.appendChild(accordionDiv);

                accordionHead.addEventListener('click', () => {
                        
                        accordionContent.style.display = (accordionContent.style.display === 'block') ? 'none' : 'block';
                            
                        });

                }

            }

            else{

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
                anchorBtn.setAttribute("href","#");
                anchorBtn.textContent="ADD TASK";

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(anchorBtn);
                cardDiv.appendChild(cardBody);
                details.appendChild(cardBody);


            }
        
            
        
        
        }

      //  }
        // var accordionDiv = document.createElement('div');
        // accordionDiv.className = "accordion";
        // accordionDiv.id = "accordionExample";

        // var accordionIt = document.createElement("div");
        // accordionIt.className = "accordion-item";

        // var accordionHead = document.createElement('h2');
        // accordionHead.className = "accordion-header";
        // accordionHead.id = "headingOne";

        // var accordionBtn = document.createElement("button");
        // accordionBtn.className = "accordion-button";
        // accordionBtn.type = "button";
        // accordionBtn.setAttribute("data-bs-toggle", "collapse");
        // accordionBtn.setAttribute("data-bs-target", "#collapseOne");
        // accordionBtn.setAttribute("aria-expanded", "true");
        // accordionBtn.setAttribute("aria-controls", "collapseOne");

        // accordionBtn.innerHTML = data[i].category;

        // var accordionContent = document.createElemnt("div");
        // accordionContent.class = "accordion-collapse collapse show";
        // accordionContent.setAttribute("aria-labelledby","headingOne");
        // accordionContent.setAttribute("data-bs-parent","accordionExample");

        // var accordionBody = document.createElement("div");
        // accordionBody.className = "accordion-body";
        // accordionBody.textContent = data[i].description;

        // accordionContent.appendChild(accordionBody);


        // accordionHead.appendChild(accordionBtn);
        // accordionIt.appendChild(accordionHead);
        // accordionIt.appendChild(accordionContent);
        // accordionDiv.appendChild(accordionIt);

        // details.appendChild(accordionDiv);












        // for(let i=0; i<data.length; i++){
        //     const accordionItem = document.createElement('div');
        //     accordionItem.classList.add('accordion-item');
        //     accordion.appendChild(accordionItem);

        //     const accordionHeader = document.createElement('div');
        //     accordionHeader.classList.add('accordion-header');
        //     accordionHeader.textContent = data[i].category;
        //     accordionHeader.innerHTML += ' <span class="icon">&#x25B6;</span>';
        //     accordionItem.appendChild(accordionHeader);
            

        //     const accorionContent = document.createElement('div');
        //     accorionContent.classList.add('accordion-content');
        //     accorionContent.textContent = data[i].description;
        //     accordionItem.appendChild(accorionContent);
        //     accorionContent.style.display='none';

        //     accordionHeader.addEventListener('click', () => {

        //         let content1 = this.nextElementSibling;
        //         accorionContent.style.display = (accorionContent.style.display === 'block') ? 'none' : 'block';
                
        //     });

            

            
            
        // }

   // }
   

// function getFullDetails(){
//     const urlParams = new URLSearchParams(location.search);
//     let userid = -1;
//     if (urlParams.has("userid") === true)
//     {
//     userid = urlParams.get("cid")
//     }

//     console.log("trying to display full user details");
//     let detailDiv = document.getElementById("detailedDiv");

//     let tbl = document.createElement("table");
//     let tblBody = document.createElement("tbody");

//     fetch("http://localhost:8083/api/todos/"+userid)
//     .then(response => response.json())
//     .then(responseData =>{
//         for(let i=0; i<responseData.length; i++){

//             for(const key in responseData[i]){

//                 let row0 = tbl.insertRow(-1);
//                 let cell1 = row0.insertCell(0);
//                 let cell2 = row0.insertCell(1);
        
//                 cell1.innerHTML = '${key}';
//                 cell2.innerHTML = '${responseData[i][key]}'

//             }

//         }
        
//     }

//     )
// }