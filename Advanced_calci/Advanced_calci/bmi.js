var menuList=document.getElementById("menuList");
menuList.style.maxHeight="0px";

function togglemenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="400px";
    }else{
        menuList.style.maxHeight="0px";
    }
}

function BMI(){
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));
    let bmires;
    if(w=="" || w==null || h=="" || h==null || w<=0 || h<=0){
        alert("Please Enter correct Height and Weight");
        return false;
    }
    else if(bmio<18.5){
        bmires="You are in Underweight";
    }else if(18.5<=bmio && bmio<24.9) {
        bmires="You are in Normal";
    }else{
        bmires="You are in overweight";
    }
    document.getElementById('result').innerHTML = "Your BMI is "+bmio+" "+bmires;
}