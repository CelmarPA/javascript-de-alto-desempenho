/**
 *      A quinta edição do ECMA-262 introduziu um novo método no objeto 
 *      de array nativo chamado forEach(). Esse método itera sobre os 
 *      membros de um array e executa uma função em cada um deles. A 
 *      função a ser executada em cada item é passada no forEach() como 
 *      um argumento e recebe três argumentos quando chamada: o valor do 
 *      item do array, o índice do item do array e o array em si. A 
 *      seguir, temos um exemplo de sua utilização.
*/
items.forEach(function (value, index, array) {
    process(value);
});
