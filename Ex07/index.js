let data = new Date();
let dia = data.getDate();
let mes = data.getMonth() + 1;
let estacao;

if((dia >= 22 && mes == 12) || mes == 1 || mes == 2 || (dia <= 21 && mes == 3)){
    estacao = 'Verão';
} else if((dia >= 22 && mes == 3) || mes == 4 || mes == 5 || (dia <= 21 && mes == 6)){
    estacao = 'Outono';
} else if((dia >= 22 && mes == 6) || mes == 7 || mes == 8 || (dia <= 21 && mes == 9)){
    estacao = 'Inverno';
} else{
    estacao = 'Primavera';
}

alert(`A estação atual é: ${estacao}`);

console.log(data);