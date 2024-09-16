/**
 *      No carregamento prévio realiza-se a detecção antecipadamente, 
 *      enquanto o script carrega, em vez de se aguardar por uma chamada 
 *      à função. O processo de detecção continua sendo feito apenas uma 
 *      vez, mas agora ele ocorre antecipadamente. Por exemplo
*/
var addHandler = document.body.addEventListener ? function (target, eventType, handler) {
    target.addEventListener(eventType, handler, false);
} : function (target, eventType, handler) {
    target.attachEvent("on" + eventType, handler);
};

var removeHandler = document.body.removeEventListener ? function (target, eventType, handler) {
    target.removeEventListener(eventType, handler, false);
} : function (target, eventType, handler) {
    target.detachEvent("on" + eventType, handler);
}

/**
 *      Esse exemplo verifica se addEventListener() e removeEventListener
 *      () estão presentes, utilizando essa informação para designar a 
 *      função mais apropriada. O operador ternário retorna a função de 
 *      DOM Nível 2 caso esses métodos estejam presentes. Do contrário, 
 *      ele retorna a função específica do IE. O resultado é que todas as 
 *      chamadas a addHandler() e removeHandler() têm a mesma rapidez, já 
 *      que a detecção foi feita com antecedência.
*/
