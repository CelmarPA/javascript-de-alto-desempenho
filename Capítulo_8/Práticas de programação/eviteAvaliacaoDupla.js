/**
 *      O JavaScript, assim como muitas outras linguagens de codificação, 
 *      permite que você tome uma string contendo código e execute-a 
 *      dentro do próprio código. Há quatro formas padrão de fazê-lo: 
 *      pelo uso de eval(), do construtor Function(), de setTimeout() e 
 *      de setInterval(). 
 * 
 *      Cada uma dessas funções permite que você passe e execute uma 
 *      string de código JavaScript. Alguns exemplos:
*/
var num1 = 5,
    num2 = 6,
// eval() avaliando um string de código
    result = eval("num1 + num2"),

// Function() avaliando uma string de código
    sum = new Function("arg1", "arg2", "return arg1 + arg2");

// setTimeout() avaliando um string de código
setTimeout("sum = num1 + num2", 100);

// setInterval() avaliando uma string de código
setInterval("sum = num1 + num2", 100);

/**
 *      Sempre que estiver avaliando seu código JavaScript de dentro do 
 *      próprio código, você incorrerá em uma penalidade por avaliação 
 *      dupla. Esse código será primeiro avaliado normalmente e então 
 *      avaliado uma vez mais para execução do código da string. A 
 *      avaliação dupla é uma operação custosa e toma muito mais tempo do 
 *      que a inclusão nativa do mesmo código.
 * 
 *      Como uma comparação, o tempo gasto no acesso a um item de array 
 *      costuma variar de navegador para navegador, mas varia de modo 
 *      muito mais pronunciado quando o item de array é acessado 
 *      utilizando eval(). Por exemplo:
*/
// Mais rápido
var item = array[0];

// Mais lento
var item = eval("array[0]");

/**
 *      Na maior parte do tempo, não é preciso utilizar eval() ou Function
 *      (). Por isso, você deve evitá-las sempre que possível. Já para as 
 *      outras  duas funções, setTimeout() e setInterval(), procure 
 *      sempre passar uma função como primeiro argumento e não uma 
 *      string. Por exemplo:
*/
setTimeout(function() {
    sum = num1 + num2;
}, 100);

setInterval(function () {
    sum = num1 + num2;
}, 100);