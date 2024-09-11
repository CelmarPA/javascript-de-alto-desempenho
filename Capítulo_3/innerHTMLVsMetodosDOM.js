/**
 *      É melhor usar a propriedade innerHTML, não padronizada mas bem 
 *      aceita, para atualizar uma seção da página, ou é preferível 
 *      utilizar apenas os métodos DOM puros, como o document.
 *      createElement()? Deixando de lado a questão dos padrões da web, 
 *      isso afeta de alguma maneira o desempenho? A resposta é: cada 
 *      vez menos, mas, mesmo assim, o innerHTML ainda é mais rápido em 
 *      todos os navegadores com  exceção dos que têm como fundamento as 
 *      últimas versões do WebKit (caso do Chrome e do Safari).
*/

// O código para geração da tabela com innerHTML é o seguinte:
function tableInnerHTML() {
    var i, h = ['<table border="1" width="100%">'];
    h.push('<thead>');
    h.push('<tr><th>id<\/th><th>yes?<\/th><th>name<\/th><th>url<\/th><th>action<\/th><\/tr>');
    h.push('<\/thead>');
    h.push('<tbody>');
    for (i = 1; i <= 1000; i++) {
        h.push('<tr><td>');
        h.push(i);
        h.push('<\/td><td>');
        h.push('And the answer is... ' + (i % 2 ? 'yes' : 'no'));
        h.push('<\/td><td>');
        h.push('my name is #' + i);
        h.push('<\/td><td>');
        h.push('<a href="http://example.org/' + i + '.html">http://example.org/'+ i + '.html<\/a>');
        h.push('<\/td><td>');
        h.push('<ul>');
        h.push(' <li><a href="edit.php?id=' + i + '">edit<\/a><\/li>');
        h.push(' <li><a href="delete.php?id=' + i + '">delete<\/a><\/li>');
        h.push('<\/ul>');
        h.push('<\/td>');
        h.push('<\/tr>');
    }
    h.push('<\/tbody>');
    h.push('<\/table>');
    document.getElementById('here').innerHTML = h.join('');
};

// Para gerar a mesma tabela apenas com elementos DOM, o código seria um pouco maior:
function tableDOM() {
    var i, table, thead, tbody, tr, th, td, a, ul, li;
    tbody = document.createElement('tbody');
    for (i = 1; i <= 1000; i++) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.appendChild(document.createTextNode((i % 2) ? 'yes' : 'no'));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(i));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode('my name is #' + i));
        tr.appendChild(td);
        a = document.createElement('a');
        a.setAttribute('href', 'http://example.org/' + i + '.html');
        a.appendChild(document.createTextNode('http://example.org/' + i + '.html'));
        td = document.createElement('td');
        td.appendChild(a);
        tr.appendChild(td);
        ul = document.createElement('ul');
        a = document.createElement('a');
        a.setAttribute('href', 'edit.php?id=' + i);
        a.appendChild(document.createTextNode('edit'));
        li = document.createElement('li');
        li.appendChild(a);
        ul.appendChild(li);
        a = document.createElement('a');
        a.setAttribute('href', 'delete.php?id=' + i);
        a.appendChild(document.createTextNode('delete'));
        li = document.createElement('li');
        li.appendChild(a);
        ul.appendChild(li);
        td = document.createElement('td');
        td.appendChild(ul);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    tr = document.createElement('tr');
    th = document.createElement('th');
    th.appendChild(document.createTextNode('yes?'));
    tr.appendChild(th);
    th = document.createElement('th');
    th.appendChild(document.createTextNode('id'));
    tr.appendChild(th);
    th = document.createElement('th');
    th.appendChild(document.createTextNode('name'));
    tr.appendChild(th);
    th = document.createElement('th');
    th.appendChild(document.createTextNode('url'));
    tr.appendChild(th);
    th = document.createElement('th');
    th.appendChild(document.createTextNode('action'));
    tr.appendChild(th);
    thead = document.createElement('thead');
    thead.appendChild(tr);
    table = document.createElement('table');
    table.setAttribute('border', 1);
    table.setAttribute('width', '100%');
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('here').appendChild(table);
};

/**
 *      Os benefícios do innerHTML são mais evidentes em versões mais 
 *      antigas de navegadores (o innerHTML é 3,6 vezes mais rápido no 
 *      IE6), mas são menos pronunciados em versões mais novas. Quando 
 *      se trata de navegadores mais novos com base no WebKit ocorre o 
 *      oposto: a utilização de métodos DOM é levemente mais rápida.
*/
