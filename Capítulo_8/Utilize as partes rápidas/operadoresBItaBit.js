/**
 *      Operadores bit a bit são um dos aspectos mais mal-compreendidos 
 *      da linguagem JavaScript. O consenso geral é de que os 
 *      desenvolvedores simplesmente não compreendem como devem 
 *      utilizá-los, confundindo-os com seus equivalentes booleanos. Como 
 *      resultado, operadores bit a bit são usados apenas esporadicamente 
 *      no desenvolvimento do código, apesar das vantagens que apresentam.
 * 
 *      Caso você não esteja acostumado com a representação binária dos 
 *      números, o JavaScript pode ajudá-lo convertendo um número em uma 
 *      string composta por seu equivalente binário, utilizando o método 
 *      toString() e passando nele o número 2. Veja um exemplo:
*/
var num1 = 25,
    num2 = 3;

console.log(num1.toString(2)); // "11001"
console.log(num2.toString(2)); // "11"
// Observe que essa representação omite os zeros iniciais contidos em um número.

/**
 *      Há quatro operadores lógicos bit a bit em JavaScript:
 *      E bit a bit 
 *          Retorna um número, apresentando 1 em cada bit onde ambos os 
 *          operandos têm um 1.
 *  
 *      OU bit a bit 
 *          Retorna um número, apresentando 1 em cada bit onde um dos 
 *          operandos tem um 1. 
 * 
 *      OU EXCLUSIVO bit a bit 
 *          Retorna um número, apresentando 1 em cada bit onde exatamente 
 *          um operando tem um 1. 
 * 
 *      NÃO bit a bit 
 *          Retorna 1 em cada posição onde o operando tem 0 e vice-versa.
 * 
 *      Esses operadores são utilizados da seguinte forma:
*/
// E bit-a-bit
var result1 = 25 & 3; // 1
console.log(result1.toString(2)); // "1"

// Ou bit-a-abit
var result2 = 25 | 3; // 1
console.log(result2.toString(2)); // "11011"

// OU EXCLUSIVO bit-a-bit
var result3 = 25 ^ 3 // 26
console.log(result3.toString(2)); // "11010"

// NÃO bit-a-bit
var result = ~25; // -26
console.log(result.toString(2)); // "-11010"

/**
 *      Há algumas formas de utilizar operadores bit a bit para acelerar 
 *      o código. A primeira é sua utilização no lugar das operações 
 *      matemáticas puras. Por exemplo, é comum alternarmos cores das 
 *      linhas de uma tabela calculando o módulo de 2 para um dado 
 *      número, da seguinte maneira:
*/
for (var i = 0, len = rows.length; i < len; i++) {
    if (i % 2) {
        className = "even";
    } else {
        className = "odd";
    }
    // Aplica classe
} 

/**
 *      O cálculo do módulo de 2 exige que o número seja dividido por 2 
 *      para determinar o resto. Se pudesse olhar a representação 32 bits 
 *      dos números, você veria que um número é par quando seu primeiro 
 *      bit é zero e ímpar, quando seu primeiro bit é 1. Isso pode 
 *      facilmente ser determinado utilizando uma operação bit a bit “E” 
 *      sobre um dado número e o número 1. Quando o número for par, o 
 *      resultado de “E” 1 será 0; quando ímpar, o resultado de “E” 1 
 *      será 1. Podemos escrever o código anterior da seguinte maneira:
*/
for (var i = 0, len = rows.length; i < len; i++) {
    if (i & 1) {
        className = "odd";
    } else {
        className = "even";
    }
    // Aplica classe
}

/**
 *      Ainda que o código continue a ser pequeno, a versão bit a bit do 
 *      “E” é até 50% mais rápida do que a original (dependendo do 
 *      navegador).
 * 
 *      A segunda forma de utilizarmos operadores bit a bit é conhecida 
 *      como bitmask (máscara de bit). O bitmasking é uma técnica popular 
 *      na ciência da computação quando existem várias opções booleanas 
 *      que podem estar presentes ao mesmo tempo. A ideia aqui é  
 *      utilizarmos cada bit de um número individual para indicar se uma 
 *      opção está ou não presente, transformando o número, para todos os 
 *      efeitos, em um array de sinalizadores booleanos. Cada opção 
 *      recebe um valor equivalente a uma potência de 2 para que a 
 *      máscara funcione. Por exemplo:
*/
var OPTION_A = 1;
var OPTION_B = 2;
var OPTION_C = 4;
var OPTION_D = 8;
var OPTION_E = 16;

/**
 *      Depois de definir as opções, você pode criar um único número que 
 *      contenha várias configurações utilizando o operador “OU” bit a 
 *      bit:
*/
var options = OPTION_A | OPTION_C | OPTION_D;

/**
 *      Podemos conferir se uma dada opção está disponível utilizando o 
 *      operador bit a bit “E”. A operação retornará 0 caso a opção não 
 *      esteja presente e 1 se estiver:
*/
// A opção A está na lista?
if (options & OPTION_A) {
    // Faz algo
} 

// A opção B está na lista?
if (options & OPTION_B) {
    // Faz algo
}
