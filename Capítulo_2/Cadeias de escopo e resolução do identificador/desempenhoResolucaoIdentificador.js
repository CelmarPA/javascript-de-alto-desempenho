/**
 *      Quanto mais fundo na cadeia de escopo do contexto de execução 
 *      estiver um identificador, mais lento será seu acesso tanto para 
 *      leitura quanto para escrita. Dessa forma, variáveis locais serão 
 *      sempre acessadas com maior velocidade dentro de uma função, 
 *      enquanto variáveis globais serão geralmente as mais lentas 
 *      (engines otimizadoras de JavaScript são capazes de contornar 
 *      essa característica em algumas situações).
 * 
 *      Não se esqueça de que variáveis globais sempre existem no último 
 *      objeto variável da cadeia de escopo do contexto de execução, 
 *      assim, são sempre as mais distantes a serem resolvidas.
 * 
 *      Aconselhamos o uso de variáveis locais sempre que possível para 
 *      alcançar um melhor desempenho em navegadores que não apresentam 
 *      engines otimizadoras de JavaScript. Uma boa regra prática é a de 
 *      sempre armazenar valores fora do escopo em variáveis locais, 
 *      caso sejam utilizados mais do que uma vez dentro de uma função. 
 *      Considere o seguinte exemplo:
*/
function initUI() {
    var bd = document.body,
        links = document.getElementsByTagName("a"),
        i = 0,
        len = links.length;
    while (i < len) {
        update(links[i++]);
    }
    document.getElementById("go-btn").onclick = function () {
        start();
    };
    bd.className = "active";
}

/**
 *      Essa função apresenta três referências a document, um objeto 
 *      global. A busca por essa variável deverá percorrer toda a cadeia 
 *      de escopo para finalmente ser resolvida no objeto variável 
 *      global. Podemos mitigar o impacto sobre o desempenho que esses 
 *      acessos repetidos à variável global teriam, armazenando a 
 *      referência em uma variável local e utilizando justamente essa 
 *      nova variável no lugar da global. Como exemplo, o código 
 *      anterior pode ser reescrito da seguinte maneira:
*/
function initUI() {
    var doc = document,
        bd = doc.body,
        links = doc.getElementsByTagName("a"),
        i = 0,
        len = links.length;
    while (i < len) {
        update(links[i++]);
    }
    doc.getElementById("go-btn").onclick = function () {
        start();
    };
    bd.className = "active";
}