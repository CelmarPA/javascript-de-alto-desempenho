/**
 *      Com todos os problemas de desempenho que se relacionam a membros 
 *      de objetos, é fácil acreditar que eles devem ser evitados sempre 
 *      que possível. Para sermos mais precisos, é recomendado utilizar 
 *      membros de objetos apenas quando necessário. Por exemplo, não há 
 *      razão para lermos o valor de um membro de objeto mais do que uma 
 *      vez em uma única função:
*/
function hasEitherClass(element, className1, className2) {
    return element.className === className1 || element.className === className2;
}


/**
 *      Nesse código, element.className é acessado duas vezes. Fica 
 *      claro que esse valor não sofrerá alterações durante o curso da 
 *      função: ainda assim, consultas por membros do objeto são 
 *      realizadas. Podemos eliminar uma delas armazenando o valor em 
 *      uma variável local e utilizando essa variável em lugar da 
 *      consulta:
*/
function hasEitherClass(element, className1, className2) {
    var currentClassName = element.className;
    return currentClassName === className1 || currentClassName === className2;
}

/**
 *      Essa versão reescrita da função limita a uma única vez o número 
 *      de consulta aos membros. Uma vez que ambas as consultas estavam 
 *      lendo o valor da propriedade, faz sentido armazenarmos esse dado 
 *      em uma variável local. Essa variável local, por sua vez, será 
 *      acessada muito mais rapidamente.
 *      
 *      A criação de namespaces em JavaScript, como a técnica utilizada 
 *      na biblioteca YUI, é uma fonte de propriedades aninhadas 
 *      acessadas com frequência. Por exemplo:
*/
function toggle(element) {
    if (YAHOO.util.Dom.hasClass(element, "selected")) {
        YAHOO.util.Dom.removeClass(element, "selected");
        return false;
    } else {
        YAHOO.util.Dom.addClass(element, "selected");
        return true;
    }
}

/**
 *      Esse código repete YAHOO.util.Dom três vezes para acessar três 
 *      métodos diferentes. Para cada método, há três consultas de 
 *      membros, em um total de nove, tornando essa implementação muito 
 *      ineficiente. Uma melhor abordagem seria armazenar YAHOO.util.Dom 
 *      em uma variável local para depois acessá-la:
*/
function toggle(element) {
    var Dom = YAHOO.util.Dom;
    if (Dom.hasClass(element, "selected")) {
        Dom.removeClass(element, "selected");
        return false;
    } else {
        Dom.addClass(element, "selected");
        return true;
    }
}

/**
 *      O número total de consultas por membros nesse código foi 
 *      reduzido de nove para cinco. Nunca se deve buscar um membro de 
 *      objeto mais de uma vez em uma única função, a menos que seu 
 *      valor tenha sido alterado.
 * 
 *      ->  Entretanto, tenha cuidado: não é recomendável usar essa 
 *          técnica para métodos de objetos. Muitos métodos de objetos 
 *          utilizam this para determinar o contexto no qual estão sendo 
 *          chamados, fazendo com que o armazenamento de um método em 
 *          uma variável local prenda this a window. A alteração do 
 *          valor de this leva a erros programáticos, uma vez que a 
 *          engine JavaScript não será capaz de resolver os membros de 
 *          objeto apropriados dos quais ela pode depender.
*/
