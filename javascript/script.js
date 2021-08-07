const problem = document.querySelector(".problem");
const result = document.querySelector(".result");
const calc = document.querySelector(".calc");
const buttons = document.querySelectorAll(".buttons span");

buttons.forEach((element)=>{
    element.addEventListener("click",()=>{
    problem.innerHTML=="0"?problem.innerHTML=" ":"";
        switch(element.innerHTML){
            case "+":
                if(problem.dataset.check=="true"){
                    problem.innerHTML += " " + element.innerHTML + " ";
                    problem.dataset.check = false;
                }
                break;

            case "-":
                if (problem.dataset.check=="true"){
                    problem.innerHTML +=" " + element.innerHTML + " ";
                    problem.dataset.check = false;
                }
                break;

            case "/":
                if (problem.dataset.check == "true"){
                    problem.innerHTML += " " + element.innerHTML + " ";
                    problem.dataset.check = false;
                }
                break;

            case "*":
                if (problem.dataset.check == "true"){
                    problem.innerHTML += " * ";
                    problem.dataset.check = false;
                }
                break;

            case "%":
                if (problem.dataset.check == "true"){
                    problem.innerHTML += " " + element.innerHTML + " ";
                    problem.dataset.check = false;
                }
                break;

            case 'DEL':
                if (problem.innerHTML.length>2) {
                    problem.innerHTML = 
                    problem.innerHTML.slice(-1) == " "/*en son da olan boslukmu?*/ 
                    ? problem.innerHTML.slice(0,-2) /* boslukdusa 2 karakter sil*/
                    :problem.innerHTML.slice(0,-1) /* deyilse 1 karakter sil*/
                }else{
                    problem.innerHTML="0"
                }
                break;

            case "=":
                break;
            default:
                problem.innerHTML += element.innerHTML; /* basilan tusu ekrana yaz*/
                problem.dataset.check = true; /*matematiksel ifade yazilabilir*/
                break;
      
          }

     })
})

calc.addEventListener("click",()=>{
    result.innerHTML = problem.innerHTML;
    problem.innerHTML = eval(problem.innerHTML);
})