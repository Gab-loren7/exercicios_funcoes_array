/* 
Objetivo:
Implementar uma função que conte quantos elementos existem em um array, utilizando um loop clássico "for" (indexado) e sem recorrer ao "for... of", "for...in", "forEach", "reduce" e "slice".
Descrição da Atividade

1. Crie um array
Monte um array chamado "animais" contendo cinco strings, cada uma representando o nome de um animal. 
*/

let animais = ["Macaco", "Papagaio", "Cachorro", "Gato", "Vaca"]

for (let i = 0; i < animais.length; i++) {
    console.log(`Índice ${i} = ${animais[i]}\n`);
}

// Bônus Destructuring Assignment
let [Macaco, Papagaio, Cachorro, Gato, Vaca] = animais
console.log(Macaco); // Output: Macaco
console.log(Papagaio); // Output: Papagaio
console.log(Cachorro); // Output: Cachorro
console.log(Gato); // Output: Gato
console.log(Vaca); // Output: Vaca
