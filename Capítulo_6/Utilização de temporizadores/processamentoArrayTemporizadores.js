/**
 *      A abordagem básica é a quebra do trabalho do loop em uma série 
 *      de temporizadores.
*/
for (var i = 0, len = items.length; i < len; i++) {
    process(items[i]);
}

/**
 *      Loops com essa estrutura podem demorar tempo demais para serem 
 *      executados devido à complexidade de process(), ao tamanho de 
 *      items ou à presença desses dois fatores combinados. Há dois 
 *      fatores determinantes para a realização assíncrona de um loop 
 *      que utilize temporizadores na forma de dois questionamentos: 
 *          • O processamento tem de ser feito de modo sincronizado? 
 *          • Os dados têm de ser processados de modo sequencial? 
 *      
 *      Caso sua resposta para essas duas perguntas seja “não”, seu 
 *      código representará um bom candidato para a utilização de 
 *      temporizadores na divisão do trabalho. Um padrão básico para a 
 *      execução assíncrona de código é o seguinte:
*/
var todo = items.concat(); // Cria um clone do original

setTimeout(function () {
    // Pegue e precesse o próximo item do array
    process(todo.shift());

    // Se houver mais itens para processar, crie outro temporizador
    if (todo.length > 0) {
        setTimeout(arguments.callee, 25);
    } else {
        callback(items);
    }
}, 25);

/**
 *      A ideia básica desse padrão é a criação de um clone do array 
 *      original e de sua utilização como fila dos itens a serem 
 *      processados. A primeira chamada a setTimeout() cria um 
 *      temporizador para processamento do primeiro item do array. 
 *      Chamar todo.shift() retorna o primeiro item removendo-o do 
 *      array. Esse valor é passado para process(). Depois de processar 
 *      o item, confere-se a presença de outros itens a serem 
 *      processados. Caso ainda haja itens no array todo, outro 
 *      temporizador será criado. Uma vez que o temporizador deve 
 *      executar o mesmo código do original, arguments.callee é passada  
 *      como primeiro argumento. Esse valor aponta para a função anônima 
 *      dentro da qual o código está sendo executado. Caso não haja mais 
 *      itens a serem processados, uma função callback() é chamada.
 * 
 *      Como esse padrão demanda código demais para um loop regular, é 
 *      preferível encapsular essa funcionalidade. Podemos fazê-lo desta 
 *      forma:
*/
function processArray(items, process, callback) {
    var todo = items.concat(); // Cria um clone do original

    setTimeout(function () {
        process(todo.shift());

        if (todo.length > 0) {
            setTimeout(arguments.callee, 25);
        } else {
            callback(items);
        }
    }, 25);
}

/**
 *      A função processArray() implementa o padrão anterior de modo 
 *      reutilizável aceitando três argumentos: o array a ser 
 *      processado, a função a ser chamada em cada item e um callback a 
 *      ser executado quando o processamento tiver terminado. Essa 
 *      função pode ser utilizada da seguinte maneira:
*/
var items = [123, 789, 323, 778, 232, 654, 219, 543, 321, 160];

function outputValues(value) {
    console.log(value);
}

processArray(items, outputValues, function () {
    console.log("Done!");
});

/**
 *      Esse código utiliza o método processArray() para entregar 
 *      valores do array ao console e depois exibir uma mensagem quando 
 *      todo o processamento tiver terminado. Ao encapsular o código do 
 *      temporizador em uma função, podemos reutilizá-la em vários 
 *      locais sem que sejam necessárias implementações diferentes.
*/