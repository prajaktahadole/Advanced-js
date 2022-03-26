document.querySelector("form").addEventListener("submit" , formSubmit);
//var AlluserData = [];
var AlluserData = JSON.parse(localStorage.getItem("localstoragrAddData")) || [];


function formSubmit(event){
    event.preventDefault();

    var name = document.querySelector("#name").value;
    var numb = document.querySelector("#numb").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;

    var userData = {
        name : name,
        number : numb,
        email : email,
        password : pass,
    };

    if(name !== "" && numb !== "" &&  email !== "" && pass !== ""){

        AlluserData.push(userData)  
        localStorage.setItem("localstoragrAddData" , JSON.stringify(AlluserData));
        alert("Signup succesful")
        console.log(AlluserData);
        window.location.href = "index.html"
    }
    else{
        alert("Please fill all details!")
    }

}
