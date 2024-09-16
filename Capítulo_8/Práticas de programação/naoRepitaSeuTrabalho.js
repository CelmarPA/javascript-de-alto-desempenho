/**
 *      Uma das principais técnicas para otimização do desempenho na 
 *      ciência da computação em geral é a prevenção do trabalho. O 
 *      conceito de prevenção do trabalho envolve, na verdade, dois 
 *      mandamentos: não faça trabalho desnecessário e não repita 
 *      trabalho que já foi executado. A primeira parte é normalmente 
 *      mais fácil de ser identificada conforme o código é refatorado. Já 
 *      a segunda – a não repetição do trabalho – é normalmente mais 
 *      difícil de identificar, uma vez que a repetição pode ocorrer em 
 *      inúmeros locais diferentes e por muitas razões.
 * 
 *      Talvez o tipo mais comum de trabalho repetido seja a detecção do 
 *      navegador. Muitos códigos apresentam bifurcações com base nos 
 *      recursos dos navegadores. Considere a adição e remoção de 
 *      manipuladores como um exemplo. Um código típico com essa 
 *      finalidade poderia ter a seguinte aparência:
*/
function addHandler(target, eventType, handler) {
    if (target.addEventListener) { // Eventos DOM2
        target.addEventListener(eventType, handler, false);
    } else {
        target.attachEvent("on" + eventType, handler);
    }
}

function removeHandler(target, eventType, handler) {
    if (target.removeEventListener) {
        target.removeEventListener(eventType, handler, false);
    } else {
        target.detachEvent("on" + eventType, handler);
    }
}

/**
 *      O código verifica o suporte a Eventos DOM Nível 2 testando a 
 *      presença dos métodos addEventListener() e removeEventListener(), 
 *      aceitos por todos os navegadores modernos, com exceção do 
 *      Internet Explorer. Caso esses métodos não existam no alvo, 
 *      presume-se o uso do IE e passam a ser utilizados métodos 
 *      específicos desse navegador.
 * 
 *      À primeira vista, essas funções parecem bem otimizadas para seus 
 *      propósitos. Entretanto, elas escondem um problema de desempenho 
 *      no trabalho repetido que será realizado cada vez que uma das 
 *      funções for chamada. Todas as vezes, a mesma verificação será 
 *      feita, em busca da presença de determinado método.
*/
