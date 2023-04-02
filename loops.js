console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18;
const acompanhadaPorAdulto = false;
let passagemValida = false;
const destino = 'Rio de Janeiro';

console.log('\n Destinos possíveis');
console.log(listaDeDestinos);



const podeComprar = idadeComprador >= 18 || acompanhadaPorAdulto == true;

let contador = 0;
while(contador <3){
    console.log(listaDeDestinos[contador]);
    contador += 1;
}



//Usando o contador while