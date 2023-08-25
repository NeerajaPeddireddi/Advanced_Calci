var menuList=document.getElementById("menuList");
menuList.style.maxHeight="0px";
function togglemenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="400px";
    }else{
        menuList.style.maxHeight="0px";
    }
}

let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button) => {
    button.addEventListener("click", (e) => {
      switch (e.target.innerText){
        case "C":
          display.innerText="";
          break;
        case "sin":
          display.innerText=Math.sin(display.innerText);
          break;
        case "cos":
          display.innerText=Math.cos(display.innerText);
          break;
        case "tan":
          display.innerText=Math.tan(display.innerText);
          break;
	case "log":
          display.innerText=Math.log10(display.innerText);
          break;
        case "ln":
          display.innerText=(Math.log10(display.innerText))*2.302585093;
          break;
        case "eo":
            display.innerText=Math.exp(display.innerText);
            break;
        case "!":
            let factvalue=1;
            let fv=display.innerHTML;
            for (let index = 1; index <=fv; index++) {
                factvalue=factvalue*index;
            }
            display.innerText=factvalue;
            break;
          case 'x2':
          display.innerText=(display.innerText*display.innerText);
                break;
          case 'x3':
              display.innerText=((display.innerText*display.innerText)*display.innerText);
            break;
          case '√':
          display.innerText=Math.pow(display.innerText, 1/2);
                break;
          case '∛':
              display.innerText=Math.pow(display.innerText, 1/3);
            break;
  
        case "←":
          if (display.innerText) {
            display.innerText=display.innerText.slice(0, -1);
          }
          break;
        case "=":
          try{
            display.innerText=eval(display.innerText);
          }catch{
            display.innerText="Error!";
          }
          break;
        default:
          display.innerText +=e.target.innerText;
      }
    });
  });