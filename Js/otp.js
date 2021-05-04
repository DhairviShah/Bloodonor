document.getElementById('verify').addEventListener("click",function(){
    number = document.getElementById("number");
    phone = number.value
    num = localStorage.getItem("number");
    console.log(num)
    if (phone == num){
        otpstr = generateOTP()
        console.log(otpstr)
    }
    else{
        // alert("Please Enter Registered Number")
        alert(generateOTP())
    }

    
})




function generateOTP() {

   
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

// otpstr = generateOTP()

