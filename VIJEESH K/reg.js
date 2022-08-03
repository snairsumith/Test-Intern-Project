console.log("hello");
function getInputVal() 
{
    var InputVal1=document.getElementById("one").value;
    if(InputVal1=="")
    {
        alert("Please Enter Name");
    }
//-------------------------------------------------------------------------
    var InputVal2=document.getElementById("two").value;
    var atpos = InputVal2.indexOf("@");
    var dotpos = InputVal2.indexOf(".");
    if(atpos<1||dotpos<atpos+2||dotpos+2>=InputVal2.length)
    {
        alert("Invalid Name");
    }
//--------------------------------------------------------------------------
    var InputVal3=document.getElementById("three").value;
    var InputVal5=document.getElementById("five").value;
    if(InputVal3!=InputVal5)
    {
        alert("Check your Password");
    }
//--------------------------------------------------------------------------
    var InputVal4=document.getElementById("four").value;
    if(InputVal4=="")
    {
        alert("Enter Phone Number");
    }
//---------------------------------------------------------------------------
 }