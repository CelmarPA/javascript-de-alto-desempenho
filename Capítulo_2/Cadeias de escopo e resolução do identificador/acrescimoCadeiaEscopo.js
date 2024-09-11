/**
 *      Em termos gerais, a cadeia de escopo de um contexto de execução 
 *      não se altera. Há, entretanto, duas instruções que 
 *      temporariamente acrescem à cadeia de escopo do contexto de 
 *      execução enquanto ela é executada. A primeira delas é with. A 
 *      instrução with é utilizada na criação de variáveis para todas 
 *      aspropriedades de um objeto. Isso se  compara a outras 
 *      linguagens com atributos similares e é normalmente visto como 
 *      uma conveniência que busca evitar a escrita repetitiva do mesmo 
 *      código.
*/
function initUI() {
    with (document) { // Evite!
        var bd = body,
            links = getElementByTagName("a"),
            i = 0,
            len = links.length;
        while (i < len) {
            update(links[i++]);
        }
        getElementById("go-on").onclick = function () {
            start();
        };
        bd.className = "active";
    }
}

/**
 *      Essa versão reescrita do initUI() utiliza uma instrução para que 
 *      não tenhamos de repetir document em outros locais. Ainda que 
 *      possa parecer mais eficiente, isso na verdade cria um problema  
 *      de desempenho.
 *  
 *      Quando a execução do código flui dentro de uma instrução with, a 
 *      cadeia de escopo do contexto da execução é temporariamente 
 *      acrescida. Um novo objeto variável é criado contendo todas as 
 *      propriedades do objeto especificado. Esse objeto, então, é 
 *      empurrado para frente da cadeia de escopo, o que significa que 
 *      todas as variáveis locais da função estão agora no segundo 
 *      objeto da cadeia de escopo, representando um acesso mais custoso.
 */