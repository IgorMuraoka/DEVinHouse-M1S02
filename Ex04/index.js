var n = 0;
var soma = 0;

while(n != -1){
    soma = soma + n;
    n = Number(prompt("Digite um número:"));
}

alert("A soma dos números digitados é: " + soma);