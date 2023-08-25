var menuList=document.getElementById("menuList");
menuList.style.maxHeight="0px";

function togglemenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="400px";
    }else{
        menuList.style.maxHeight="0px";
    }
}


var radius, height, length, axisa, axisb, axisc;
var cubed = "3";
var shape;
//variable to later allow user to select their own measurement
var system = "feet"; 
const pi = 3.14;

function showDiv(select) {
  var shapes = document.getElementsByClassName("shape");
  var inputs = document.getElementsByTagName("input");
  for(var i = 0; i < inputs.length; i++) {
      document.getElementsByTagName("input")[i].value = '';
  } 
  
  for(var i = 0; i < shapes.length; i++) {
    
    shapes[i].style.display = "none"; 
  } 
  if(select.value == "sopt"){
    document.getElementById("sopt").style.display = "block"; }

  if(select.value == "Sphere") { 
    shape = "sphere"; 
    document.getElementById("Sphere").style.display = "block"; }
  
  if(select.value == "Cone") { 
   shape = "cone";
   document.getElementById("Cone").style.display = "block"; }
  
  if(select.value == "Cube"){
    shape = "cube";
    document.getElementById("Cube").style.display = "block"; }
  
  if(select.value == "Cylinder"){
    shape = "cylinder";
    document.getElementById("Cylinder").style.display = "block"; }
  
  if(select.value == "Ellipsoid"){
    shape = "ellipsoid";
    document.getElementById("Ellipsoid").style.display = "block"; }

    
}

function calculate() {
  var answer;
  if(shape == "sphere") {
    radius = document.getElementById("sphere-radius").value;
    if(radius==null || radius=="" || radius<0 || radius%1!=0){
      alert("Enter Valid Data");
      return false;
    }
    var sphereFormula = ((4/3) * pi * (Math.pow(radius,3))).toFixed(4);
    answer = (sphereFormula + " " + system + cubed.sup());
    document.getElementById("sphereAnswer").innerHTML = "Sphere Volume V = " + answer;
  }
  
  if(shape == "cone") {
     radius = document.getElementById("cone-radius").value;
     height = document.getElementById("cone-height").value;
     if(radius==null || radius=="" || radius<0 || radius%1!=0 || height==null || height=="" || height<0 || height%1!=0){
      alert("Enter Valid Data");
      return false;
    }
     var coneFormula = ((1/3) * pi * (Math.pow(radius,2)) * height).toFixed(4);
     var answer = (coneFormula + " " + system + cubed.sup());
     document.getElementById("coneAnswer").innerHTML = "Cone Volume V = " + answer;
  }
  
  if(shape == "cube") {
    length = document.getElementById("cube-length").value;
    if(length==null || length=="" || length<0 || length%1!=0){
      alert("Enter Valid Data");
      return false;
    }
    var cubeFormula = (Math.pow(length, 3)).toFixed(4);
    var answer = (cubeFormula + " " + system + cubed.sup());
    document.getElementById("cubeAnswer").innerHTML = "Cube Volume V = " + answer;
  }
  
  if(shape == "cylinder") {
    radius = document.getElementById("cylinder-radius").value;
    height = document.getElementById("cylinder-height").value;
    if(radius==null || radius=="" || radius<0 || radius%1!=0 || height==null || height=="" || height<0 || height%1!=0){
      alert("Enter Valid Data");
      return false;
    }
    var cylinderFormula = (pi * (Math.pow(radius,2)) * height).toFixed(4);
    var answer = (cylinderFormula + " " + system + cubed.sup());
    document.getElementById("cylinderAnswer").innerHTML = "Cylinder Volume V = " + answer;
  }
  
  if(shape == "ellipsoid") {
    axisa = document.getElementById("axis-a").value;
    axisb = document.getElementById("axis-b").value;
    axisc = document.getElementById("axis-c").value;
    if(axisa==null || axisa=="" || axisa<0 || axisa%1!=0 || axisb==null || axisb=="" || axisb<0 || axisb%1!=0 || axisc==null || axisc=="" || axisc<0 || axisc%1!=0){
      alert("Enter Valid Data");
      return false;
    }
    var ellipsoidFormula = ((4/3) * pi * axisa * axisb * axisc).toFixed(4);
    var answer = (ellipsoidFormula + " " + system + cubed.sup());
    document.getElementById("ellipsoidAnswer").innerHTML = "EllipsoidVolume  V = " + answer;
  }
}
