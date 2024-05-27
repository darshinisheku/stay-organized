var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})
const togglePassword = document.querySelector("#toggleIcon");
const password = document.getElementById("pass");

togglePassword.addEventListener("click", function(e) {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});
function validate_password() {
 
    let pass = document.getElementById('pass').value;
    let confirm_pass = document.getElementById('confirm_pass').value;
    if (pass != confirm_pass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').style.marginBottom = '2rem';
        document.getElementById('wrong_pass_alert').innerHTML
            = 'Use same password';
        document.getElementById('create').disabled = true;
        document.getElementById('create').style.opacity = (0.4);
    } else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            'Password Matched';
        document.getElementById('create').disabled = false;
        document.getElementById('create').style.opacity = (1);
    }
}

function addUser(){
    let bodyData = {
        name : document.getElementById("name").value,
        username : document.getElementById("userName").value,
        password : document.getElementById("pass").value,
  }

    fetch("http://localhost:8083/api/users", { 
        method: "POST",
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
             console.log("User successfully added");

            var successToast = document.getElementById("successToast");
             var toast = new bootstrap.Toast(successToast);
             toast.show();

        document.getElementById("form").reset();
        document.getElementById('wrong_pass_alert').innerHTML = ""
        document.getElementById('userNameStatus').innerHTML = ""

    })
    .catch(error => {
        console.log(error);
        let failedToast = document.getElementById("failedtoast");
        failedToast.style.display = 'block';
    });
    

}

function wrong_pass_alert() {
    if (document.getElementById('pass').value != "" &&
        document.getElementById('confirm_pass').value != "" && document.getElementById('userName').value !="" &&
        document.getElementById('name') .value != "") {
            addUser();
       // alert("Your response is submitted");
    } else {
        alert("Please fill all the fields");
    }
}

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

  async function ValidateUserName(){
    console.log('validating User name');

    let userName = document.getElementById('userName');
    let userIdValue = userName.value;
    console.log(userIdValue);
    const response = await fetch("http://localhost:8083/api/username_available/"+userIdValue);
    const data = await response.json();
    console.log("Length of data : "+data.length);
    if(data.available ){
        console.log("user name available");
        document.getElementById('userNameStatus').style.color = 'green';
        document.getElementById('userNameStatus').innerHTML =
            'User Name Available';
        document.getElementById('create').disabled = false;

    }else{
        document.getElementById('userNameStatus').style.color = 'red';
        document.getElementById('userNameStatus').innerHTML =
            'User Name UnAvailable';
        document.getElementById('create').disabled = true;
    }
  }

  const progressChange = debounce(() => ValidateUserName());

  function formReset(){
    let form = document.getElementById("form");
    form.reset();
    document.getElementById("userNameStatus").innerHTML = ""
    document.getElementById('wrong_pass_alert').innerHTML=""
  }

//   function togglePasswordVisibility() {
//     var passwordField = document.getElementById("pass");
//     var toggleIcon = document.getElementById("toggleIcon");

//     if (passwordField.type === "password") {
//         passwordField.type = "text";
//         toggleIcon.classList.remove("bi-eye");
//         toggleIcon.classList.add("bi-eye-slash");
//     } else {
//         passwordField.type = "password";
//         toggleIcon.classList.remove("bi-eye-slash");
//         toggleIcon.classList.add("bi-eye");
//     }
// }
