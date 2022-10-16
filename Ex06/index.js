
const operador = prompt("Digite o operador (“+”, “-”, “*” ou “/”):");
const n1 = Number(prompt("Digite o primeiro valor:"));
const n2 = Number(prompt("Digite o segundo valor:"));
let resultado = 0;

if(operador == "+"){
    resultado = n1 + n2;
} else if(operador == "-"){
    resultado = n1 - n2;
} else if(operador == "*"){
    resultado = n1 * n2;
} else if(operador == "/"){
    resultado = n1 / n2;
} else{
    resultado = "### - Campos digitados incorretamente";
}

alert(`O resultado do seu cálculo é: ${resultado}`);
