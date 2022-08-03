function getInputVal() 
{
    let x = 0;  
    var InputVal1=document.getElementById("name").value;
    if(InputVal1=="")
    {
      document.getElementById("p01").innerHTML = "Please enter your name";
    }
    else {x=x+1;}

    var InputVal2=document.getElementById("email").value;
    var atpos = InputVal2.indexOf("@");
    var dotpos = InputVal2.indexOf(".");
    if(atpos<1||dotpos<atpos+2||dotpos+2>=InputVal2.length)
    {
      document.getElementById("p02").innerHTML = "Invalid email!";
    }
    else {x=x+1;}


    var InputVal3=document.getElementById("password1").value;
    var InputVal4=document.getElementById("password2").value;
    if(InputVal3!=InputVal4)
    {
      document.getElementById("p03").innerHTML = "Check your Password"; 
    }
    else
    {x=x+1;}

    var InputVal4=document.getElementById("mob").value;
    if(InputVal4=="")
    {
      document.getElementById("p05").innerHTML = "Ivalid number!"; 
    }
    else
    {x=x+1;}
    
    if(x==4)
    {
        document.getElementById("p01").innerText=" ";
        document.getElementById("p02").innerText=" ";
        document.getElementById("p03").innerText=" ";
        alert("Registration succesful");
    }
 }
 