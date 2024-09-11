/**
 *      Coleções HTML são objetos do tipo array que contêm referências a 
 *      nodos DOM. Exemplos de coleções são os valores retornados pelos 
 *      seguintes métodos:
 *          
 *          • document.getElementsByName() 
 *          • document.getElementsByClassName()
 *          • document.getElementsByTagName(
 *          
 *      As seguintes propriedades também retornam coleções HTML:
 *          document.images
 *              Todos os elementos img da página.
 *          document.links
 *              Todos os elementos a.
 *          document.forms
 *              Todos os formulários.
 *          document.forms[0].elements
 *              Todos os campos do primeiro formulário da página.
 *  
 *      Esses métodos e propriedades retornam objetos HTMLCollection, na 
 *      forma de listas semelhantes a arrays. Eles não são arrays (pois
 *      não têm métodos como push() ou slice()), mas fornecem uma 
 *      propriedade length, assim como os arrays, e permitem o acesso 
 *      indexado aos elementos da lista.
*/

// Coleções dispendiosas

// Para demonstrar que as coleções estão ativas, considere o seguinte fragmento de código:
// Um loop acidentalmente infinito
var alldivs = document.getElementsByTagName("div");
for (var i = 0; i < alldivs.length; i++) {
    document.body.appendChild(document.createElement("div"));
}

/**
 *      Esse código parece apenas duplicar o número de elementos div da 
 *      página. Ele faz um loop pelos divs existentes e cria, a cada 
 *      vez, um novo div, acrescentando-o a body. Na verdade, trata-se 
 *      de um loop infinito, já que a condição de saída do loop, alldivs.
 *      length, aumenta em um a cada iteração, refletindo o estado atual 
 *      do documento subjacente.
 * 
 *      Esse código parece apenas duplicar o número de elementos div da 
 *      página. Ele faz um loop pelos divs existentes e cria, a cada 
 *      vez, um novo div, acrescentando-o a body. Na verdade, trata-se 
 *      de um loop infinito, já que a condição de saída do loop, alldivs.
 *      length, aumenta em um a cada iteração, refletindo o estado atual 
 *      do documento subjacente.
*/
function toArray(col) {
    for (var i = 0, a = [], len = col.length; i < len; i++) {
        a[i] = col[i];
    }
    return a;
}

// E a preparação de uma coleção e uma cópia sua dentro de um array:
var col = document.getElementsByTagName("div");
var ar = toArray(col);

// As duas funções a serem comparadas seriam:
// Mais lenta:
function loopCollection() {
    for (var count = 0; count < col.length; count++) {
        /* Não faça nada */
    }
}

// Mais rápida
function loopCopiedArray() {
    for (var count = 0; count < arr.length; count++) {
        /* Não faça nada */
    }
}

/**
 *      Quando o length da coleção é acessado em cada iteração, ele faz 
 *      com que a coleção seja atualizada, prejudicando 
 *      significativamente o desempenho em todos os navegadores. Podemos 
 *      otimizar essa situação armazenando o length da coleção em cache, 
 *      dentro de uma variável, seguido pela utilização dessa variável 
 *      para a comparação com a condição de saída do loop:
*/
function loopCacheLengthCollection() {
    var col = document.getElementsByTagName("div"),
    len = col.length;
    for (var count = 0; count < len; count ++) {
        /* Não faça nada */
    }
}

/**
 *      Essa solução rodará quase tão rapidamente quanto loopCopiedArray
 *      (). Na maioria dos casos que demandam um único loop sobre uma 
 *      coleção relativamente pequena, o simples armazenamento em cache 
 *      de length já será suficiente. Contudo, a realização de loops em 
 *      um array é mais rápido do que loops em uma coleção, de modo que 
 *      se primeiro copiarmos os elementos da coleção para um array, o 
 *      acesso a suas propriedades será mais rápido.
*/

// Variáveis locais durante o acesso a elementos de uma coleção

/**
 *      Em geral, para qualquer tipo de acesso DOM, é preferível 
 *      utilizar uma variável local quando a mesma propriedade ou o 
 *      mesmo método DOM é acessado mais de uma vez. Ao realizar um loop 
 *      em uma coleção, a primeira otimização que podemos fazer é 
 *      armazenar a coleção em uma variável local e armazenar length 
 *      fora do loop, seguido pelo uso de uma variável local para 
 *      elementos que são acessados mais de uma vez.
*/

// Versão lenta
function collectionGlobal() {
    var col = document.getElementsByTagName("div"),
    len = col.length,
    name = "";
    for (var count = 0; count < len; count++) {
        name = document.getElementsByTagName("div")[count].nodeName;
        name = document.getElementsByTagName("div")[count].nodeType;
        name = document.getElementsByTagName("div")[count].tagName;
    }
    return name;
}

// Versão rápida
function collectionLocal() {
    var col = document.getElementsByTagName("div"),
    len = col.length,
    name = "";
    for (var count = 0; count < len; count++) {
        name = col[count].nodeName;
        name = col[count].nodeType;
        name = col[count].tagName;
    }
    return name;
}

// Versão mais rápida
function collectionNodesLocal() {
    var col = document.getElementsByTagName("div"),
    len = col.length,
    name = "",
    el = null;
    for (var count = 0; count < len; count++) {
        el = col[count];
        name = el.nodeName;
        name = el.nodeType;
        name = el.tagName;
    }
    return name;
}