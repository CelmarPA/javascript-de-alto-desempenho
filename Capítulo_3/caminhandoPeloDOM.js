/**
 *      A API do DOM oferece várias formas pelas quais partes específicas
 *      da estrutura geral de um documento podem ser acessadas. Em casos 
 *      onde podemos escolher entre as abordagens disponíveis, é 
 *      benéfico usar a API mais eficiente para o trabalho específico.
*/

// Rastreamento (crawling) do DOM

/**
 *      Muitas vezes você tem de partir de um elemento DOM e lidar com
 *      os elementos que o cercam, talvez iterando de modo recursivo 
 *      por  todos os filhos. Isso pode ser feito utilizando a coleção 
 *      childNodes ou pela obtenção do irmão de cada elemento por meio 
 *      de nextSibling. Considere estas duas abordagens equivalentes 
 *      mostrando uma visita não recursiva aos filhos de um elemento:
*/
function testNextSibling() {
    var el = document.getElementById("mydiv"),
        ch = el.firstChild,
        name = "";
        
        do {
            name = ch.nodeName;
        } while (ch == ch.nextSibling);
        return name;
};

function textChildNodes() {
    var el = document.getElementById("mydiv"),
        ch = el.childNodes,
        len = ch.length,
        name = "";

    for (var count = 0; count < len; count++) {
        name = ch[count].nodeName;
    }
    return name;
};

/**
 *      Não se esqueça de que childNodes é uma coleção e, por isso, deve 
 *      ser abordada com cautela, cacheando length em loops para que não 
 *      seja atualizado em cada iteração.
*/

// A API de seletores

/**
 *      Ao identificar os elementos do DOM com os quais realizarão seu 
 *      trabalho, os desenvolvedores muitas vezes necessitam de um 
 *      controle mais minucioso do que o oferecido por métodos como 
 *      getElementById() e getElementsByTagName(). Considere o seguinte:
*/
var elements = document.querySelectorAll("#menu a");

/**
 *      O valor de elements conterá uma lista de referências a todos os 
 *      elementos a encontrados em um elemento com id="menu". O método 
 *      querySelectorAll() toma uma string CSS seletora como argumento e 
 *      retorna uma NodeList – um objeto de tipo array contendo todos os 
 *      nodos correspondentes. O método não retorna uma coleção HTML, de 
 *      modo que os nodos retornados não representam a estrutura ativa 
 *      do documento. Isso evita os problemas de desempenho (e 
 *      potencialmente lógicos) advindos de uma coleção HTML.
 *      Para alcançar o mesmo objetivo do código anterior sem usar 
 *      querySelectorAll(), é necessário utilizar um código maior:
*/
var elements = document.getElementById("menu").getElementsByTagName("a");

/**
 *      Nesse caso, elements será uma coleção HTML, assim, você terá de 
 *      copiá-la em um array caso queira o mesmo tipo de lista estática  
 *      como a retornada por querySelectorAll().
 * 
 *      A utilização de querySelectorAll() é ainda mais conveniente 
 *      quando temos de trabalhar com um agrupamento de várias 
 *      consultas. Por exemplo, se a página apresentar alguns elementos 
 *      div com um nome de classe “warning” e outros com o nome 
 *      “notice”, para obter uma lista de todos eles você pode utilizar 
 *      querySelectorAll():
*/
var errs = document.querySelectorAll("div.warning, div.notice");

/**
 *      Produzir a mesma lista sem utilizar o querySelectorAll() é 
 *      consideravelmente mais trabalhoso. Uma forma de fazê-lo é pela 
 *      seleção de todos os elementos div, seguida por iterações para 
 *      filtragem daqueles que não são necessários.
*/
var errs = [],
    divs = document.getElementsByName("div"),
    classname = "";

for (var i = 0, len = divs.length; i < len; i++) {
    classname = divs[i].className;
    if (classname === "notice" || classname === "warning") {
        errs.push(divs[i]);
    }
}

/**
 *      Há também outro método que podemos aproveitar: querySelector(). 
 *      Trata-se de um método conveniente que retorna apenas o primeiro 
 *      nodo que corresponde à consulta.
*/