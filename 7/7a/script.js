window.onload = function () {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    //whenver you refresh the page the values get erased
}

function add(){
    let n1 = parseFloat(document.getElementById("input1").value);
    let n2 = parseFloat(document.getElementById("input2").value);
    let res = n1 + n2;
    document.getElementById("result").innerHTML = "Result: " + res;
}

function sub(){
    let n1 = parseFloat(document.getElementById("input1").value);
    let n2 = parseFloat(document.getElementById("input2").value);
    let res = n1 - n2;
    document.getElementById("result").innerHTML = "Result: " + res;
}

function mul(){
    let n1 = parseFloat(document.getElementById("input1").value);
    let n2 = parseFloat(document.getElementById("input2").value);
    let res = n1 * n2;
    document.getElementById("result").innerHTML = "Result: " + res;
}


function mul(){
    let n1 = parseFloat(document.getElementById("input1").value);
    let n2 = parseFloat(document.getElementById("input2").value);
    let res = n1 * n2;
    document.getElementById("result").innerHTML = "Result: " + res;
}

function div(){
    let n1 = parseFloat(document.getElementById("input1").value);
    let n2 = parseFloat(document.getElementById("input2").value);
    if(n2===0){
        alert('Cannot divide by zero');
        clearValues();
        return;
    }
    let res = n1 / n2;
    document.getElementById("result").innerHTML = "Result: " + res;
}

function clearValues(){
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    document.getElementById("result").innerHTML="";
    alert("Cleared All values");
}

function AC(){
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
}
