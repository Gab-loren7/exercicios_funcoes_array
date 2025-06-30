/* 
Implemente a função separaParimpar(nums) em JavaScript que receba um array de números inteiros e devolva um novo array contendo dois subarrays:
O primeiro subarray deve agrupar todos os números pares de nums, na mesma ordem em que aparecem.
O segundo subarray deve agrupar todos os números impares de nums, também na mesma ordem original.
Sua solução deve obedecer às seguintes restrições de implementação:
Não utilize:
for... of
for...in
Array.prototype.forEach
Array.prototype.reduce
Array.prototype.map
Array.prototype.slice
Para adicionar elementos aos subarrays pares e impares, utilize atribuição direta via indice (sem usar .push()). 
*/

let separarParimpar = (nums) => {
    let pares = []
    let impares = []
    let indicePar = 0
    let indiceImpar = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            pares[indicePar] = nums[i]
            indicePar++
        } else {
            impares[indiceImpar] = nums[i]
            indiceImpar++
        }
    };
    return `Os números Pares são ${[pares]} e os Impares são ${[impares]} `
};

console.log(separarParimpar([1, 2, 3, 4, 5, 6]));
// Output: Os números Pares são 2,4,6 e os Impares são 1,3,5 
