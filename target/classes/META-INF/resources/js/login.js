function click(){
        const inputField = document.getElementById('password');
        const submitButton = document.getElementById('submit-button');

        inputField.addEventListener('keyup', function(event) {
            if (event.key === 13) {
                event.preventDefault();
                submitButton.register().click();
            }
    })}

function clearFields() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

// when it's called, it checks if the user forgot any fields (checkInput) and then verify if the account exists (authenticate)
function register(){
    if (checkInput()) {
        authenticate();
    }
}

// if any field are blank, the user gets a feedback with a warning, informing which field they forgot
function checkInput() {
    if (document.getElementById("email").value === "" &&
        document.getElementById("password").value === "") {
        alert("Email and password fields are blank");

        return false;
    }

    else if (document.getElementById("email").value === "") {
        alert("Email fields are blank");

        return false;
    }

    else if (document.getElementById("password").value === "") {
        alert("Password fields are blank");

        return false;
    }

    return true;
}

// there are two types of account, admin and user.
// admin account -> takes you to administration page;
// user account -> takes you to main page (probably where the API goes);
function authenticate() {
    //admin
    if (document.getElementById("email").value === "admin@staff.com" &&
        document.getElementById("password").value === "123") {
        alert("Connected as administrator");

        location.href = "/admin";
    }

    //user
    else if (document.getElementById("email").value === "rodrigo@gmail.com" &&
        document.getElementById("password").value === "projeto" ||
        document.getElementById("email").value === "vinicius@gmail.com" &&
        document.getElementById("password").value === "123") {
        alert("Connected as user");

        location.href = "/main";

    } else {
        alert("Invalid credentials");
    }

    //var requisicao = criarRequisicao(document.getElementById("email").value,
    //                                 document.getElementById("password").value);

    //fetch(requisicao)

    //.then(
    //(response) => {if (response === "200") {
    //                  return response.json();
    //              } else {
    //                  throw new Error("Ocorreu um erro");
    //              }});
}

// just warns the user about the ongoing disconnection
function disconnect(url) {
    alert("This action will disconnect you. Click 'Ok' to proceed.");

    location.href = url;
}
}


//function criarRequisicao() {
    //return new fetch("http://localhost:8080/autenticar", {
        //method: "POST",
        //headers: {
            //"Accept": "*/*",
            //"Content-Type": "application/json",
        //},
        //body: "{" +
            //"email:" + "'email'," +
            //"password:" + "'password'" +
            //"}"
    //})
//}
