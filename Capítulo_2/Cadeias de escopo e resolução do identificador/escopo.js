/**
 *      A propriedade interna [[Scope]] contém um acervo de objetos que
 *      representam o escopo dentro do qual essa função foi criada. Esse
 *      acervo é chamado de cadeia de escopo da função e determina os
 *      dados que uma função pode acessar. Cada objeto na cadeia de
 *      escopo da função é chamado de objeto variável e contém entradas
 *      para variáveis na forma de pares chave-valor. Quando uma função
 *      é criada, sua cadeia de escopo é preenchida com objetos que
 *      representam os dados acessíveis no escopo dentro do qual a
 *      função foi criada. Por exemplo, considere a seguinte função
 *      global:
 */
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

/**
 *      Quando a função add() é criada, sua cadeia de escopo é
 *      preenchida com um único objeto variável: o objeto global que
 *      representa todas as variáveis definidas globalmente.
 */

var total = add(5, 10);
console.log(total);

/**
 *      A execução da função add dispara a criação de um objeto interno 
 *      chamado de contexto de execução. Um contexto de execução define 
 *      o ambiente no qual uma função está sendo executada. Cada 
 *      contexto de execução é único a uma execução particular da 
 *      função, de modo que chamadas múltiplas a uma mesma função 
 *      resultam na criação de vários contextos de execução. O contexto 
 *      de execução é destruído uma vez que a função tenha sido 
 *      completamente executada.
 * 
 *      Um contexto de execução tem sua própria cadeia de escopo, que é 
 *      utilizada para a resolução do identificador. Quando o contexto 
 *      de execução é criado, sua cadeia de escopo é inicializada com os 
 *      objetos contidos na propriedade [[Scope]] da função executada. 
 *      Esses valores são copiados para a cadeia de escopo do contexto 
 *      de execução na ordem em que aparecem na função. Uma vez que isso 
 *      esteja feito, um novo objeto chamado objeto de ativação é criado 
 *      para o contexto de execução. O objeto de ativação atua  como o 
 *      objeto variável para essa execução e contém entradas para 
 *      variáveis locais, argumentos nomeados, a coleção arguments e 
 *      this. O objeto é, a seguir, empurrado para frente da cadeia de 
 *      escopo. Quando o contexto de execução é destruído, também é 
 *      destruído o objeto de ativação.
*/
