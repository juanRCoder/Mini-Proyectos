
const presionoTecla = (event)=>{
  let teclaPresionada = event.key;
  switch(teclaPresionada){
  	case "1":
  		document.calculator.entrada.value +='1';
  		break;
   	case "2":
  		document.calculator.entrada.value +='2';
  		break;
   	case "3":
  		document.calculator.entrada.value +='3';
  		break;
    case "4":
  		document.calculator.entrada.value +='4';
  		break;
   	case "5":
  		document.calculator.entrada.value +='5';
  		break;
   	case "6":
  		document.calculator.entrada.value +='6';
  		break;
   	case "7":
  		document.calculator.entrada.value +='7';
  		break;
   	case "8":
  		document.calculator.entrada.value +='8';
  		break;
   	case "9":
  		document.calculator.entrada.value +='9';
  		break;
   	case "0":
  		document.calculator.entrada.value +='0';
  		break;
   	case ".":
  		document.calculator.entrada.value +='.';
  		break;
   	case "+":
  		document.calculator.entrada.value +='+';
  		break;
   	case "-":
  		document.calculator.entrada.value +='-';
  		break;
   	case "*":
  		document.calculator.entrada.value +='*';
  		break;
   	case "/":
  		document.calculator.entrada.value +='/';
  		break;
   	case "Enter":
  		document.calculator.entrada.value = eval(document.calculator.entrada.value);
  		break;
  }
}

document.addEventListener('keypress',presionoTecla);
