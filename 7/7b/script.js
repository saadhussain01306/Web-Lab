function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let gender = document.getElementById("gender").value;
    let color = document.getElementById("color").value;

    if(name===""){
        alert("Please enter your name");
        return;
    }
    if(email==="" || !email.includes(".") || !email.includes("@")){
        alert("Please enter a valid Email");
        return;
    }
    if(mobile==="" || mobile.length!==10 || isNaN(mobile)){
        alert("Please Enter a valid Mobile Number");
        return;
    }
    if(gender===""){
        alert("Please enter your Gender");
        return;
    }
    if(color===""){
        alert("Please Enter Color");
        return;
    }

    // object with the entered infotrmation
    let display = {
        Name: name,
        Email: email,
        Mobile: mobile,
        Gender: gender,
        Color: color
    };

    // append the infortmation to the string
    let output = "";
    for (let key in display) {
        output += key + ": " + display[key] + "\n";
    }

    // alert the information
    alert(output);
}
