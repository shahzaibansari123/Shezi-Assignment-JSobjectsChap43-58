//Chapters 43-48 EVENTS

//Question 01

// function  click1(){
//     alert ( "Alert box" );
// }

// //Question 02

// function  mob(){
//     var b = document.getElementById("mobile")
//     alert ("Thanks for purchasing mobile !")
// }

//Question 03

// function deleteRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("chart").deleteRow(i);
//   }

//Question 05

// var clicks = 0;
// function counterIncrease() {
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }
// function counterDecrease() {
//   clicks -= 1;
//   document.getElementById("clicks").innerHTML = clicks;
// }

//Chapters 49-52 EVENTS

//Question 01

// function signupForm(){
//     var b=document.getElementById("email")
//     var c=document.getElementById("password")
//     document.getElementById("info").innerHTML =" <h1> FORM DATA </h1> <br> Your email is " + b.value +"<br>" +" and your password is " + c.value;
// }

//Question 02

// function visible(){
//     var target = document.getElementById("visible");
//     target.style.visibility ="visible";
//     function readmore(){
//         var get = document.getElementById("read");
//     get.style.visibility = "hidden";
//     }
//    readmore()
// }

//Question 03

// var a = 0;
// function studentInfo() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     switch (true) {
//         case (name == false):
//             alert("Name is required field")
//             document.getElementById("submit").disabled = false;
//             document.getElementById("submit").studentForm() = false;
//             break;
//         case (email == false):
//             alert("Email is required field")
//             document.getElementById("submit").disabled = false;
//             document.getElementById("submit").studentForm() = false;
//             break
//         case (password == false):
//             alert("Password is required field ")
//             document.getElementById("submit").disabled = false;
//             document.getElementById("submit").studentForm() = false;
//             break
//     }}

// function studentForm() {
//     var getitem = document.getElementById("table");
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var row = getitem.insertRow(-1);
//     row.insertCell(0).textContent = a++;
//     row.insertCell(1).textContent = name;
//     row.insertCell(2).textContent = email;
//     row.insertCell(3).textContent = password;
//     row.insertCell(4).innerHTML = "<button onclick='deletfunc()' style='padding:5px 10px;'>Delete</button>"
//     row.insertCell(5).innerHTML = "<button onclick='editfunc()' style='padding:5px 20px;'>Edit</button>"

// function empty() {
//         var get = document.getElementById("name");
//         var get1 = document.getElementById("email");
//         var get2 = document.getElementById("password");
//         get.value = "";
//         get1.value = "";
//         get2.value = "";
//     }
//     empty()
// }

// function deletefunc() {
//     var main = document.getElementById("table");
//     for (var i = 0; i <= main.rows.length; i++) {
//         table.rows[i].cells[3].onclick = function () {
//             index = i - 1;
//             table.deleteRow(index)
//         }
//         deletefunc()
//     }
// }

// function editfunc() {
//     var edit1 = prompt("Enter your Name");
//     if (edit1 == "") {
//         alert("Name is required field")
//         editfunc() == false;
//     }
//     var edit2 = prompt("Enter your email address");
//     if (edit2 == "") {
//         alert("Email is required field")
//             editfunc() == false;
//         }
//     }
//     var edit3 = prompt("Creat a password");
//     if (edit3 == false) {
//         alert("Password is required field")
//             editfunc() == false;
//         }
//     var table = document.getElementById("table");
//     for (var i = 1; i < table.rows.length; i++) {
//         table.rows[i].cells[4].onclick = function () {
//             table.rows[i - 1].cells[1].innerHTML = edit1;
//             table.rows[i - 1].cells[2].innerHTML = edit2;
//         }
//     }

//Chapters 53-58 EVENTS

//Question 01

// function model(){
//     var car= document.getElementById("test")
//     car.className="Reset"
//     document.getElementById("call").innerHTML = "click to reset";
// }
  
// function function1() {  
//     model()
//     var yar= document.getElementById("pic")
//     yar.className="picView";
// }  
  
// function function2 () {    
//     model()  
//     var yar= document.getElementById("pic1")
//     yar.className="picView";
// }

// function function3 () {
//     model() 
//     var yar= document.getElementById("pic2")
//     yar.className="picView";
// }

// function function4 () {
//     model()  
//     var yar= document.getElementById("pic3")
//     yar.className="picView";
// }

//Question 02

// function zoomIn(){
//     var z=document.getElementById("detail")
//     z.style.fontSize="45px"
// }  
 
// function zoomOut(){  
//     var z=document.getElementById("detail")
//     z.style.fontSize="20px"
// }
