let countPrimo = 0;

for(let i = 2; i<=1000; i++ ){
    var primo = true;
    for(let j = 2; j<i; j++){
        if(i%j === 0){
            primo = false;
        }
    }

    if(primo == true){
        countPrimo++;
        console.log(i);
    }
}


console.log(`A quantidade de números primos é: ${countPrimo}`);