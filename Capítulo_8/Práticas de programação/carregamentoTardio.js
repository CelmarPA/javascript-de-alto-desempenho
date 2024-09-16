/**
 *      A primeira forma de eliminarmos a repetição de trabalhos é 
 *      utilizando o carregamento tardio. Carregamento tardio significa 
 *      que nenhum trabalho será feito até que sua informação seja 
 *      necessária. Uma função com carregamento tardio, tem a seguinte 
 *      aparência:
*/
function addHandler(target, eventType, handler) {
    // Sobrescreve a função existente
    if (target.addEventListener) { // Eventos DOM2
        addHandler = function (target, eventType, handler) {
            target.addEventListener(eventType, handler, false);
        };
    } else { // IE
        addHandler = function (target, eventType, handler) {
            target.attachEvent("on" + eventType, handler);
        };
    }
    // hama a nova função
    addHandler(target, eventType, handler);
}

function removeHandler(target, eventType, handler) {
    // Sobrescreve a função existente
    if (target.removeHandler) {
        removeHandler = function (target, eventType, handler) {
            target.removeEventListener(eventType, handler, false);
        };
    } else { // IE
        removeHandler = function (tardio, eventType, handler) {
            target.detachEvent("on" + eventType, handler);
        };
    }
    // Chama a nova função
    removeHandler(target, eventType, handler);
}

/**
 *      Essas duas funções implementam um padrão de carregamento tardio. 
 *      Na primeira vez que cada método for chamado, uma verificação será 
 *      feita para determinar o modo apropriado de anexar  ou desanexar o 
 *      manipulador de evento. Então, a função original será sobrescrita 
 *      com uma nova função que apresentará o curso apropriado de ação. O 
 *      último passo durante a primeira chamada será a execução da nova 
 *      função com os argumentos originais. Cadachamada subsequente a 
 *      addHandler() ou a removeHandler() não implicaem uma nova operação 
 *      de detecção, uma vez que o código foi sobrescrito pela nova 
 *      função.
*/
