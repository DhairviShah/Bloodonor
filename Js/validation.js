document.getElementById("submit").addEventListener("click", function(){

    number= document.getElementById("number").value;
    password = document.getElementById("password").value
    // console.log(number,password)
    num1 = localStorage.getItem("number")
    pass1 = localStorage.getItem(password)
    // console.log(num1,pass1)
    if(!((num1 == number) && (pass1 == password))){
        alert("Please enter correct Credentials:")

    }

})


