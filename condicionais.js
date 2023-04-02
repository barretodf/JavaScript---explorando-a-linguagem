console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 17

console.log('Destinos possíveis');
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    
    console.log('Comprador maior de idade');
    listaDeDestinos.splice(1,1) //O primeiro 1 é o ítem, o segundo 1 é a quantidade de ítens
}else{
    console.log('Proibida a venda para menores de idade!')
}


//Splice deleta ítens da lista


console.log(listaDeDestinos);


//Operadores lógicos
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);