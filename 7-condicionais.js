console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18;
const acompanhadaPorAdulto = false;

console.log('Destinos possíveis');
console.log(listaDeDestinos);
const passagemValida = true;

// if (idadeComprador >= 18) {

//     console.log('Comprador maior de idade');
//     listaDeDestinos.splice(1, 1) //O primeiro 1 é o ítem, o segundo 1 é a quantidade de ítens
// } else if (acompanhadaPorAdulto) {
//     console.log('Comprador acompanhado por pessoa maior de idade');
//     listaDeDestinos.splice(1, 1)

// } else {
//     console.log('Proibida a venda para menores de idade!')
// }

if (idadeComprador >= 18 || acompanhadaPorAdulto == true) {
    console.log("Compra efetuada com sucesso!");
    listaDeDestinos.splice(1, 1); // removendo item
}   else {
    console.log("Proibida a venda para menores de idade! \n \n");
}

console.log('Embarque: \n' )

if (idadeComprador >= 18 && passagemValida){
    console.log('Boa viagem')
}else{
    console.log('Não pode embarcar!')
}
//Splice deleta ítens da lista


console.log(listaDeDestinos);


//Operadores lógicos
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
