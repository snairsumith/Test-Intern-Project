console.log("hello");
function getInputVal() 
{
    let x=0;
    var InputVal1=document.getElementById("one").value;
    if(InputVal1=="")
    {
         document.getElementById("pp1").innerText="Enter Name";
    }
    else
    {x=x+1;}
//-------------------------------------------------------------------------
    var InputVal2=document.getElementById("two").value;
    var atpos = InputVal2.indexOf("@");
    var dotpos = InputVal2.indexOf(".");
    if(atpos<1||dotpos<atpos+2||dotpos+2>=InputVal2.length)
    {
        document.getElementById("pp2").innerText="Enter valid email address";
        x=x+1;
    }
    else
    {x=x+1;}
//--------------------------------------------------------------------------
    var InputVal3=document.getElementById("three").value;
    var InputVal5=document.getElementById("five").value;
    if(InputVal3!=InputVal5||InputVal3=="")
    {
        document.getElementById("pp4").innerText="Check your password";
    }
    else
    {x=x+1;}
//--------------------------------------------------------------------------
    var InputVal4=document.getElementById("four").value;
    var regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
    var phone=InputVal4.match(regExp);
    if(!phone)
    {
        document.getElementById("pp5").innerText="Enter valid phone number";
    }
    else
    {x=x+1;}

    if(x==4)
    {
        document.getElementById("pp1").innerText=" ";
        document.getElementById("pp2").innerText=" ";
        document.getElementById("pp4").innerText=" ";
        document.getElementById("pp5").innerText="Registration succesful";
    }
    
//---------------------------------------------------------------------------
 } 
