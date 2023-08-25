var menuList=document.getElementById("menuList");
menuList.style.maxHeight="0px";

function togglemenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="400px";
    }else{
        menuList.style.maxHeight="0px";
    }
}


var selectedvalue;
function selectvalue(){
    selectedvalue=document.getElementById('list').value;
}


var final_result;
function EBC(){
    var units=document.getElementById('first').value;
    var load=document.getElementById('second').value;
    var months=document.getElementById('third').value;
    if(units=="" || units==null || load=="" || load==null || months=="" || months==null || units<0 || load<0 || months<0 || months%1!=0 || load%1!=0 || units%1!=0){
        alert("Please Enter correct Data");
        return false;
    }    

    if(selectedvalue=="HOUSE"){
        if(units<=30){
            final_result=units*1.9;
        }else if(units<=75){
            final_result=30*1.9+(units-30)*3;
        }else if(units<=125){
            final_result=30*1.9+45*3+(units-75)*4.5;
        }else if(units<=225){
            final_result=30*1.9+45*3+50*4.5+(units-125)*6;
        }else if(units<=400){
            final_result=30*1.9+45*3+50*4.5+100*6+(units-225)*8.75;
        }else if(units>400){
            final_result=30*1.9+45*3+50*4.5+100*6+175*8.75+(units-400)*9.75;
        }
        final_result=10*load+final_result*months
        document.getElementById('result1').innerHTML="<br><center>Your Total Bill is "+final_result.toFixed(2);
    }else if(selectedvalue=="LT"){
        if(units<=50){
            final_result=units*5.4;
        }else if(units<=100){
            final_result=50*5.4+(units-50)*7.65;
        }else if(units<=300){
            final_result=50*5.4+50*7.65+(units-100)*9.05;
        }else if(units<=500){
            final_result=50*5.4+50*7.65+200*9.05+(units-300)*9.6;
        }else if(units>500){
            final_result=50*5.4+50*7.65+200*9.05+200*9.6+(units-500)*10.15;
        }
        final_result=75*load+final_result*months
        document.getElementById('result1').innerHTML="<br><center>Your Total Bill is "+final_result.toFixed(2);
    }else{
        alert("Choose dropdown Option");
    }
    
}
