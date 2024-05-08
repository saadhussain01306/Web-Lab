function validate(){
    let usn=document.getElementById("usn").value;
    let sub_code=document.getElementById("code").value;
    let m1=document.getElementById("marks1").value;
    let m2=document.getElementById("marks2").value;
    let m3=document.getElementById("marks3").value;

    if(usn===""){
        alert("Please Enter your USN number");
        return;
    }
    if(sub_code===""){
        alert("Please Enter the subject code");
        return;
    }
    if(m1>20 || m2>20 || m3>20 || m1<0 || m2<0 || m3<0){
        alert("Enter valid marks");
        return;
    }
    if(m1==="" || m2==="" || m3===""){
        alert("Please Enter Your marks");
        return;
    }

    let display  =
      "USN: " + usn + "\n" +
      "Subject-Code: " + sub_code + "\n" +
      "Marks 1: " + m1 + "\n" +
      "Marks 2: " + m2 + "\n" +
      "Marks 3: " + m3 +"\n" ;

      marks=[m1,m2,m3];
      marks.sort();
      let average=(parseInt(marks[1])+parseInt(marks[2]))/2;
      alert("The average of the best two test is " + average + "\n" + display);
}
