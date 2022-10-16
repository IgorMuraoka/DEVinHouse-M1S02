const idade = Number(prompt("Digite sua idade:"));

if (idade <=15){
    alert("Classificação: Jovem");
} 
else if (idade <=64){
    alert("Classificação: Adulto");
} 
else{
    alert("Classificação: Idoso");
}