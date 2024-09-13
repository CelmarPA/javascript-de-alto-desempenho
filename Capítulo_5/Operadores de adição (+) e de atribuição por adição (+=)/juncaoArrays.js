/**
 *      O método Array.prototype.join funde todos os elementos de um 
 *      array em uma string, aceitando uma string separadora que pode 
 *      ser inserida entre cada elemento. Ao passar uma string vazia 
 *      como separadora, você pode realizar facilmente a concatenação de 
 *      todos os elementos de um array.
 * 
 *      O exemplo seguinte de código demonstra o tipo de problema de 
 *      desempenho que a junção de arrays pode solucionar:
*/
var str = "I'm a thirty-five character string.",
    newStr = "";
    appends = 5000;

while (appends--) {
    newStr += str;
}

/**
 *      Agora, considere o teste a seguir. A mesma string será gerada 
 *      utilizando a junção de arrays:
*/
var str = "I'm a thirty-five character string.",
    strs = [],
    newStr,
    appends = 5000;

while (appends--) {
    strs[strs.length] = str;
}

newStr = strs.join("");

// String.prototype.concat

/**
 *      O método nativo para strings concat aceita vários argumentos e 
 *      anexa cada um deles à string sobre a qual é chamado. Essa é a 
 *      forma mais flexível de concatenar strings, uma vez que pode ser 
 *      utilizada para anexar uma única string, várias delas ou até um 
 *      array inteiro de strings.
*/

// Anexa um string
srt = str.concat(s1);

// Anexa três Strings
str = str.concat(s1, s2, s3);

// Anexa cada string em um array utilizando o array como a lista de argumentos
str = String.prototype.concat.apply(srt, array);