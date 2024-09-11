/**
 *      Outro modo de atualizar o conteúdo de uma página utilizando 
 *      métodos DOM é clonar elementos DOM existentes, em vez da criação 
 *      de novos – em outras palavras, utilizar element.cloneNode() 
 *      (onde element representa um nodo existente) em lugar de document.
 *      createElement().
 * 
 *      A clonagem de nodos é mais eficiente na maioria dos navegadores, 
 *      mas não de maneira muito significativa. Repetindo a tabela do 
 *      exemplo prévio, podemos criar os elementos apenas uma vez e 
 *      então copiá-los, o que resulta em um tempo de execução mais     
 *      rápido.
*/

// Como ilustração, veja uma listagem de código parcial para criação da tabela utilizando elemento.cloneNode():
function tableClonedDOM() {
    var i, table, thead, tbody, tr, th, td, a, ul, li,
    oth = document.createElement('th'),
    otd = document.createElement('td'),
    otr = document.createElement('tr'),
    oa = document.createElement('a'),
    oli = document.createElement('li'),
    oul = document.createElement('ul');
    tbody = document.createElement('tbody');
    for (i = 1; i <= 1000; i++) {
        tr = otr.cloneNode(false);
        td = otd.cloneNode(false);
        td.appendChild(document.createTextNode((i % 2) ? 'yes' : 'no'));
        tr.appendChild(td);
        td = otd.cloneNode(false);
        td.appendChild(document.createTextNode(i));
        tr.appendChild(td);
        td = otd.cloneNode(false);
        td.appendChild(document.createTextNode('my name is #' + i));
        tr.appendChild(td);
        // ... o restante do loop ...
    }
    // ... o restante da geração da tabela ...
}
