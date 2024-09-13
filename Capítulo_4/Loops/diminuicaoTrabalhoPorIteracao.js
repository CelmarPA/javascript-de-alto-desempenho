/**
 *      Faz sentido pensarmos que se uma única passagem por um loop
 *      toma tempo, passagens múltiplas tomarão ainda mais tempo. 
 *      Limitar o número de operações dispendiosas feitas no corpo do 
 *      loop é uma boa maneira de acelerar o loop como um todo. 
 *      
 *      Um loop típico de processamento de arrays pode ser criado 
 *      utilizando qualquer um dos três mais rápidos tipos de loops. O 
 *      código será mais comumente escrito desta forma:
*/
// Loops originais
for (var i = 0; i < items.length; i++) {
    process(items[i]);
}

var j = 0;
while (j < items.length) {
    process(items[j++]);
}

var k = 0;
do {
    process(items[k++])
} while (k < items.length);

/**
 *      Em cada um desses loops, há várias operações ocorrendo sempre 
 *      que o corpo do loop é executado:
 * 
 *      1. Uma verificação de propriedade (items.length) na condição de 
 *         controle.
 *      2. Uma comparação (i < items.length) na condição de controle.
 *      3. Uma comparação verificando se a condição de controle é 
 *         verdadeira (i < items.length == true).
 *      4. Uma operação de incremento (i++).
 *      5. Uma verificação ao array (items[i]).
 *      6. Uma chamada à função (process(items[i])).
 * 
 *      Há muita coisa acontecendo em cada iteração desses simples 
 *      loops, ainda que não haja tanto código. A velocidade em que o 
 *      código será executado é em grande parte determinada pelo que 
 *      process() faz a cada item, mas, ainda assim, uma redução no 
 *      número total de operações por iteração pode melhorar muito o 
 *      desempenho geral do loop.
 * 
 *      O primeiro passo para a otimização da quantidade de trabalho em 
 *      um loop é a minimização do número de verificações a membros de 
 *      objeto e itens de array.
 * 
 *      Os exemplos prévios realizam uma consulta (look up) de 
 *      propriedade para items.length a cada vez que o loop é 
 *      executado.  Trata-se de um desperdício, visto que esse valor não 
 *      sofrerá alteração durante a execução do loop, representando, 
 *      justamente por isso, um impacto desnecessário no desempenho. 
 *      Podemos facilmente melhorar o desempenho do loop efetuando a 
 *      verificação de propriedade apenas uma vez, armazenando seu valor 
 *      em uma variável local e utilizando-a na condição de controle:
*/
// Minimizando consultas de propriedade
for (var i = 0, len = items.length; i < len; i++) {
    process(items[i]);
}

var j = 0,
    count = items.length;

while (j < count) {
    process(items[j++]);
}

var k = 0,
    num = items.length;

do {
    process(items[k++]);
} while (k < num);

/**
 *      Cada um desses loops reescritos faz apenas uma consulta de 
 *      propriedade para o comprimento do array antes da execução do 
 *      loop. Isso permite que a condição de controle seja composta 
 *      apenas de variáveis locais e que, justamente por isso, execute 
 *      muito mais rapidamente.
 * 
 *      Também podemos melhorar o desempenho dos loops revertendo sua 
 *      ordem. Com frequência, a ordem em que os itens do array são 
 *      executados é irrelevante para a tarefa. Assim, partir do último 
 *      item e processar em direção ao primeiro é uma alternativa 
 *      aceitável. A reversão da ordem do loop é uma otimização de 
 *      desempenho comum em linguagens de programação, mas geralmente 
 *      não é bem compreendida. Em JavaScript, a reversão do loop 
 *      resulta em um pequeno ganho de desempenho, desde que você 
 *      elimine operações extras como resultado:
*/
// Minimizando as consultas de propriedade e realizando a reversão
for (var i =  items.length; i--; ) {
    process(items[i]);
}

var j = items.length;
while (j--) {
    process(items[j]);
}

var k = items.length - 1; 
do {
    process(items[k]);
} while (k--);

/**
 *      Os loops nesse exemplo são revertidos e combinam a condição de 
 *      controle com a operação de incremento. Cada condição de controle 
 *      representa agora uma simples comparação a zero. Condições de 
 *      controle são comparadas ao valor true. Qualquer número diferente 
 *      de zero é considerado true (verdadeiro), enquanto zero é 
 *      considerado false (falso).
 * 
 *      Na realidade, a condição de controle foi alterada, passando de 
 *      duas comparações (o iterador é menor que o total e igual a 
 *      true?) para apenas uma comparação (o valor é verdadeiro?). A 
 *      redução de duas comparações por iteração para apenas uma acelera 
 *      o loop ainda mais. Ao reverter os loops e minimizar as consultas 
 *      de propriedades, podemos atingir tempos de execução 50 a 60% 
 *      mais rápidos que o original.
 * 
 *      Como uma comparação ao original, veja a seguir as operações 
 *      realizadas a cada iteração para esses loops:
 *          1. Uma comparação (i == true) na condição de controle.
 *          2. Uma operação de decremento (i--).
 *          3. Uma verificação ao array (items[i]).
 *          4. Uma chamada à função (process(items[i])).
 * 
 *      O novo código do loop apresenta duas operações a menos por cada 
 *      iteração, o que pode levar a melhorias de desempenho à medida 
 *      que aumentam o número de iterações.
*/
