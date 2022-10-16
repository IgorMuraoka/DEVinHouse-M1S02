let n = Number(prompt("Digite um número:"));
let countPar = 0;
let countImpar = 0;

for(i=0; i<=n; i++){
    if(i%2 == 0){
        countPar++;
    } else{
        countImpar++;
    }
}

alert(`O número de pares: ${countPar}
O número de impares: ${countImpar}`)