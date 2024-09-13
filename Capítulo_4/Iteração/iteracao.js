/**
 *      Algoritmos iterativos tipicamente consistem em vários loops 
 *      diferentes que realizam aspectos diversos do processo, 
 *      introduzindo suas próprias considerações quanto ao desempenho. 
 *      Ainda assim, o uso de loops otimizados em vez de funções 
 *      recursivas de longa duração pode resultar em ganhos de 
 *      desempenho advindos do menor custo que representam os loops 
 *      quando comparados à execução de uma função.
 * 
 *      Como exemplo, o algoritmo merge sort é frequentemente 
 *      implementado por meio de recursão. Uma simples implementação em 
 *      JavaScript do merge sort pode ser vista a seguir:
*/
function merge(left, right) {
    var result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left).concat(right);
}

function mergeSort(items) {
    if (items.length === 1) {
        return items;
    }
    var middle = Math.floor(items.length / 2),
        left = items.slice(0, middle),
        right = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));   
}

/**
 *      O código para esse merge sort é relativamente simples e direto, 
 *      mas a função mergeSort() em si acaba sendo chamada com muita 
 *      frequência. Um array de n itens chama mergeSort() 2 * n -1 
 *      vezes, o que significa que um array com mais de 1.500 itens 
 *      causará um erro de estouro de pilha (stack overflow) no Firefox.
 * 
 *      O fato de encontrar o erro de estouro de pilha não implica que 
 *      todo o algoritmo tenha de ser alterado: significa simplesmente 
 *      que a recursão não é a melhor implementação nesse caso. O 
 *      algoritmo merge sort também pode ser implementado por iteração, 
 *      da seguinte maneira:
*/
// Utiliza a mesma função mergeSort() do exemplo anterior
function mergeSort(items) {
    if (items.length === 1) {
        return items;
    }

    var work = [];

    for (var i = 0, len = items.length; i < len; i++) {
        work.push(items[i]);
    }

    work.push([]); // No caso de um número ímpar de itens

    for (var lim = len; lim > 1; lim = (lim + 1) / 2) {
        for (var j = 0, k = 0; k < lim; j++, k += 2) {
            work[j] = merge(work[k], work[k + 1]);
        }
        work[j] = []; // No caso de um número ímpar de itens
    }
    return work[0];
}

/**
 *      Essa implementação de mergeSort() realiza o mesmo trabalho da 
 *      função anterior sem usar a recursão. Ainda que a versão 
 *      iterativa do merge sort possa ser um pouco mais lenta do que a 
 *      opção recursiva, ela não representa o mesmo impacto sobre a 
 *      pilha de chamadas. A alteração de algoritmos recursivos para 
 *      iterativos é apenas uma das opções disponíveis para evitar erros 
 *      de estouro de pilha.
*/
