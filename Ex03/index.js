let n1 = prompt("Tabuada do número:");
let resultado = '';

while(isNaN(n1)){
    n1 = prompt("Dígito inválido. Escolha um número:");
}

for(i=0; i<=10; i++){
    resultado += `${n1} x ${i} = ${n1 * i} \n`;
}

alert(resultado)
