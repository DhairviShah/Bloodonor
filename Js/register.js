console.log("welcome");
let addBtn = document.getElementById("addbtn");
// Adding eventlistener to add button to add notes
addBtn.addEventListener('click', function (e) {
    console.log("triggered")
    let addfirst = document.getElementById("first");
    let addlast = document.getElementById("last");
    let addnumber = document.getElementById("number");
    let addtype = document.getElementById("type");
    let addpass = document.getElementById("password");


    //To check if notes is null or not
    if (notes == null) {
        notesObj = [];
        // console.log(notesObj)


    }
   
// pushing values in arrays
notesObj=[]
let myObj = {
first: addfirst.value,
last: addlast.value,
number : addnumber.value,
type : addtype.value,
password:addpass.value
// addresses: address.value,
// med: addmed.value
}
notesObj.push(myObj);

localStorage.setItem("notes", JSON.stringify(notesObj));
addfirst = "";
addnumber = "";
addtype = "";
// address = "";
addlast = "";
addpass = "";
// addmed= " ";

// console.log(notesObj);

location.reload()


})



