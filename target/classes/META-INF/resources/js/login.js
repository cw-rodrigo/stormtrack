function clearFields() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

function register(){
    if (checkInput()) {
        authenticate();
    }
}

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

function disconnect(url) {
    alert("This action will disconnect you");

    location.href = url;
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