/**
 *      Tanto a instrução with quanto a cláusula catch de uma instrução 
 *      trycatch, assim como uma função que contenha eval(), são 
 *      consideradas escopos dinâmicos. Um escopo dinâmico existe apenas 
 *      pela execução do código e, portanto, não pode ser determinado 
 *      simplesmente por análise estática (observando a estrutura do 
 *      código). Por exemplo:
*/
function execute(code) {
    eval(code);
    function subroutine() {
        return window;
    }
    var w = subroutine(); // Qual o valor de w?
};

/**
 *      A função execute() representa um escopo dinâmico devido ao uso 
 *      de eval(). O valor de w pode ser alterado com base no valor do 
 *      código. Na maioria dos casos, w será igual ao objeto window 
 *      global, mas considere o seguinte: execute("var window = {};
*/
execute("var widown = {};")

/**
 *      Nesse caso, eval() cria uma variável window local em execute(), 
 *      assim w acaba sendo igual ao window local em vez do global. Não 
 *      há como saber se esse é o caso até que o código seja executado, 
 *      o que significa que o valor do identificador window não pode ser 
 *      predeterminado.
*/
