console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push('Bahia')//Adicionando itens na lista.

console.log('Destinos possíveis');
console.log(listaDeDestinos)

//Splice deleta ítens da lista
listaDeDestinos.splice(1,1) //O primeiro 1 é o ítem, o segundo 1 é a quantidade de ítens

console.log(listaDeDestinos);

//Exibir só o destino que quero

console.log(listaDeDestinos[1]);
