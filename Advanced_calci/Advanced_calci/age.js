var menuList=document.getElementById("menuList");
menuList.style.maxHeight="0px";

function togglemenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="400px";
    }else{
        menuList.style.maxHeight="0px";
    }
}


function age() {
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    if(d1==null || d1=="" || m1==null || m1=="" || y1==null || y1=="" || y2<y1 || d1>31 || m1>12 || d1<0 || m1<0 || y1<0 || d1%1!=0 || m1%1!=0 || y1%1!=0){
        alert(" Enter Valid input ");
        return false;
    }else{

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.getElementById("age").innerHTML ="Your Age is " + y + " Years " + m + " Months " + d + " Days";
}
}