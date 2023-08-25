var menuList=document.getElementById("menuList");
menuList.style.maxHeight="0px";

function togglemenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="400px";
    }else{
        menuList.style.maxHeight="0px";
    }
}

var length,width;
var cubed = "3";
var shape;
function showDiv(select) {
    var shapes = document.getElementsByClassName("shape");
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++) {
        document.getElementsByTagName("input")[i].value = '';
    }
    for(var i = 0; i < shapes.length; i++) {
        shapes[i].style.display = "none"; 
    }
    if(select.value == "selectone") { 
        shape = "selectone1";
        document.getElementById("selectoption").style.display = "block"; 
    }
    if(select.value == "rectangle") { 
        shape = "rectangle1";
        document.getElementById("rectangle").style.display = "block"; 
    }
    if(select.value == "triangle") { 
        shape = "triangle1";
        document.getElementById("triangle").style.display = "block"; 
    }
    if(select.value == "circle") { 
        shape = "circle1";
        document.getElementById("circle").style.display = "block"; 
    }
    if(select.value == "trapezoid") { 
        shape = "trapezoid1";
        document.getElementById("trapezoid").style.display = "block"; 
    }
    if(select.value == "sector") { 
        shape = "sector1";
        document.getElementById("sector").style.display = "block"; 
    }
    if(select.value == "ellipse") { 
        shape = "ellipse1";
        document.getElementById("ellipse").style.display = "block"; 
    }
    if(select.value == "parallelogram") { 
        shape = "parallelogram1";
        document.getElementById("parallelogram").style.display = "block"; 
    }
}





function Area(){
    var answer;
                    // ---Rectangle---
    if(shape == "rectangle1"){
        length = document.getElementById("rectangle-length").value;
        width = document.getElementById("rectangle-width").value;
        if(length==null || length=="" || length<0 || length%1!=0 || width==null || width=="" || width<0 || width%1!=0){
            alert("Enter Valid Data");
            return false;
          }
        var rectans =(length * width).toFixed(4);
        answer = rectans+" cm"
        
        document.getElementById("rectangleAnswer").innerHTML = "<br><center>Rectangle Area is " + answer+"2".sup();
     }
                    // ---Triangle---
    if(shape == "triangle1"){
    
    var edge1 = document.getElementById("triangle-edge1").value;
    var edge2 = document.getElementById("triangle-edge2").value;
    var edge3 = document.getElementById("triangle-edge3").value;
    if(edge1==null || edge1=="" || edge1<0 || edge1%1!=0 || edge2==null || edge2=="" || edge2<0 || edge2%1!=0 || edge3==null || edge3=="" || edge3<0 || edge3%1!=0){
        alert("Enter Valid Data");
        return false;
      }
    var trians =(parseFloat(edge1)+parseFloat(edge2)+parseFloat(edge3))/2;
    trians=trians*((trians-edge1)*(trians-edge2)*(trians-edge3));
    trians=(Math.sqrt(trians)).toFixed(4);
    answer = trians+" cm"
    document.getElementById("triangleAnswer").innerHTML = "<br><center>Triangle Area is " + answer+"2".sup();
    }
                // ---Circle---
    if(shape == "circle1"){
    var radius = document.getElementById("circle-radius").value;
    if(radius==null || radius=="" || radius<0 || radius%1!=0){
        alert("Enter Valid Data");
        return false;
      }
    var cirans =((22/7)*(Math.pow(radius,2))).toFixed(4);
    answer = cirans+" cm"
    
    document.getElementById("circleAnswer").innerHTML = "<br><center>Circle Area is " + answer+"2".sup();
    }
                // ---Trapezoid---
    if(shape == "trapezoid1"){
    
    var base1 = document.getElementById("trapezoid-base1").value;
    var base2 = document.getElementById("trapezoid-base2").value;
    var height = document.getElementById("trapezoid-height").value;
    if(base1==null || base1=="" || base1<0 || base1%1!=0 || base2==null || base2=="" || base2<0 || base2%1!=0 || height==null || height=="" || height<0 || height%1!=0){
        alert("Enter Valid Data");
        return false;
      }
    var trians =(parseFloat(base1)+parseFloat(base2))/2;
    trians=trians*parseFloat(height);
    trians=trians.toFixed(4);
    answer = trians+" cm"
    document.getElementById("trapezoidAnswer").innerHTML = "<br><center>Trapezoid Area is " + answer+"2".sup();
    }
                // ---Sector---
    if(shape == "sector1"){
    var radius = document.getElementById("sector-radius").value;
    var degrees = document.getElementById("sector-degree").value;
    if(radius==null || radius=="" || radius<0 || radius%1!=0 || degrees==null || degrees=="" || degrees<0 || degrees%1!=0){
        alert("Enter Valid Data");
        return false;
      }
    var sectans =(parseFloat(degrees)/360)*(22/7)*(parseFloat(radius)*parseFloat(radius));
    sectans=sectans.toFixed(4);
    answer = sectans+" cm"
    
    document.getElementById("sectorAnswer").innerHTML = "<br><center>Sector Area is " + answer+"2".sup();
    }
                // ---Ellipse---
    if(shape == "ellipse1"){
    var major = document.getElementById("ellipse-major").value;
    var minor = document.getElementById("ellipse-minor").value;
    if(major==null || major=="" || major<0 || major%1!=0 || minor==null || minor=="" || minor<0 || minor%1!=0){
        alert("Enter Valid Data");
        return false;
      }
    var epsans =((22/7)*(major*minor)).toFixed(4);
    answer = epsans+" cm"
    
    document.getElementById("ellipseAnswer").innerHTML = "<br><center>Ellipse Area is " + answer+"2".sup();
    }
                   // ---Parallelogram---
    if(shape == "parallelogram1"){
        var base = document.getElementById("parallelogram-base").value;
        var height = document.getElementById("parallelogram-height").value;
        if(base==null || base=="" || base<0 || base%1!=0 || height==null || height=="" || height<0 || height%1!=0){
            alert("Enter Valid Data");
            return false;
          }
        var parlans =(parseFloat(base)*parseFloat(height)).toFixed(4);
        answer = parlans+" cm"
        
        document.getElementById("parallelogramAnswer").innerHTML = "<br><center>Parallelogram Area is " + answer+"2".sup();
     }

}