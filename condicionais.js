console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18
console.log('Destinos possíveis');
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    
    console.log('Comprador maior de idade');
    listaDeDestinos.splice(1,1) //O primeiro 1 é o ítem, o segundo 1 é a quantidade de ítens
}

//Splice deleta ítens da lista


console.log(listaDeDestinos);
