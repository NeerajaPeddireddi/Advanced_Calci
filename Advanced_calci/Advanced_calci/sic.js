var menuList=document.getElementById("menuList");
menuList.style.maxHeight="0px";

function togglemenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="400px";
    }else{
        menuList.style.maxHeight="0px";
    }
}

function SIC(){
    var p2=document.getElementById('amount').value;
    var r2=document.getElementById('rate').value;
    var t2=document.getElementById('time').value;

    
    if(p2=="" || p2==null || t2=="" || t2==null || r2=="" || r2==null || p2<0 || t2<0 || r2<0){
        alert("Please Enter correct Data");
        return false;
    }
    var p=parseFloat(p2);
    var r=parseFloat(r2);
    var t=parseFloat(t2);
    var it_res=p*t*r/100;
    var result=p+it_res;
    var final_result=result.toFixed(2);

    document.getElementById('result').innerHTML = "Total Amount is "+final_result;

    
    //document.getElementById('result').innerHTML = "Total Amount is "+f_res;
    
}   

