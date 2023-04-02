console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
const idadeComprador = 18;
const acompanhadaPorAdulto = false;
let passagemValida = false;
const destino = 'Curitiba';

console.log('\n Destinos possíveis');
console.log(listaDeDestinos);



const podeComprar = idadeComprador >= 18 || acompanhadaPorAdulto == true;

let contador = 0;
let destinoExiste = false;
while(contador <3){
    
    if (listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log('Destino Existe: ', destinoExiste);

if (podeComprar && destinoExiste){
    console.log('Boa viagem!')
}else{
    console.log('Desculpe tivemos um erro!')
}

for(let i = 0; i <3; i++){
    
    if (listaDeDestinos[i] == destino){
        destinoExiste = true;
        
    }
    
}

//laço de repetição for