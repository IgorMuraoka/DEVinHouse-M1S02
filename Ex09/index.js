const n = Number(prompt("Digite o valor inicial:"));
const raiz = Number(prompt("Digite o valor da raiz de sua P.A:"));
let resultado = String(n);

for(i=1; i<10; i++){
    resultado += `, ${(n + (raiz*i))}${i !== 9 ? '' : '.'}`;
}

alert(`A P.A é: ${resultado}`)