/**
 *      Muitas vezes a execução de apenas uma tarefa por vez não é 
 *      suficiente. Considere o processamento de um array de mil itens, 
 *      onde cada item leva um milésimo de segundo. Se um item for 
 *      processado em cada temporizador e houver um intervalo de 25 
 *      milissegundos entre cada processamento, isso implicará em um 
 *      tempo total necessário para processamento do array de (25 + 1) x 
 *      1.000 = 26.000 milésimos de segundos, ou 26 segundos. O que 
 *      aconteceria se processássemos os itens em lotes de 50 com um 
 *      intervalo de 25 milissegundos entre cada lote? O tempo total de 
 *      processamento se tornaria (1.000 / 50) x 25 + 1.000 = 1.500 
 *      milissegundos, ou um 1,5 segundo, com o benefício adicional de 
 *      que o usuário não teria sua interface bloqueada uma vez que o 
 *      maior intervalo de tempo pelo qual o script executou 
 *      continuamente foi de apenas 50 milissegundos. O processamento de 
 *      itens em lotes costuma ser muito mais rápido.
 * 
 *      Caso você não se esqueça do limite de 100 milissegundos, como 
 *      intervalo máximo pelo qual códigos JavaScript devem ser 
 *      executados continuamente em suas aplicações, poderá otimizar os 
 *      padrões apresentados anteriormente. Minha recomendação é dividir 
 *      esse valor pela metade, nunca permitindo que seu código 
 *      JavaScript execute continuamente por mais de 50 milissegundos.
 * 
 *      Cronometre quanto dura a execução de um trecho de seu código 
 *      utilizando o objeto nativo Date. É dessa forma que a maior parte 
 *      dos perfis JavaScript é traçada:
*/
var start = +new Date(),
    stop;

someLongProcess();
stop = +new Date();

if (stop - start < 50) {
    alert("Just about right.");
} else {
    alert("Taking too long.");
}

/**
 *      Já que cada novo objeto Date é inicializado com o tempo atual do 
 *      sistema, criando uma série periódica de objetos Date e 
 *      comparando seus valores, podemos cronometrar o código. O 
 *      operador de adição  (+) converte o objeto Date em uma 
 *      representação numérica, fazendo com que cálculos futuros não 
 *      envolvam conversões. Essa mesma técnica básica pode ser 
 *      utilizada para otimização dos padrões prévios de temporização.
 * 
 *      Podemos acrescer o método processArray() dando a ele a 
 *      capacidade de processar vários itens por cada temporizador, 
 *      ncluindo uma verificação do tempo:
*/
function timedProcessArray(items, process, callback) {
    var todo = items.concat(); // Cria um clone do original

    setTimeout(function () {
        var start = +new Date();
        do {
            process(todo.shift());
        } while (todo.length > 0 && (+new Date() - start < 50));

        if (todo.length > 0) {
            setTimeout(arguments.callee, 25);
        } else {
            callback(items);
        }
    }, 25);
}

/**
 *      A adição do loop do-while a essa função permite registrar o 
 *      tempo depois que cada item for processado. O array sempre 
 *      incluirá ao menos um item quando a função temporizada executar, 
 *      de modo que um loop pós-teste faz mais sentido do que um 
 *      pré-teste.
*/
