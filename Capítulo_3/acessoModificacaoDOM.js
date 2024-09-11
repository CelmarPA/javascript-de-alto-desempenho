/**
 *      O simples acesso a um elemento DOM envolve um preço. Por sua 
 *      vez, a modificação de elementos é ainda mais cara, já que muitas 
 *      vezes significa que o navegador terá de recalcular alterações à 
 *      geometria da página. Naturalmente, o pior caso de acesso e 
 *      modificação de elementos ocorre quando isso é feito em loops, 
 *      especialmente em loops sobre coleções HTML.Considere este 
 *      simples exemplo:
*/
function innerHTMLLoop() {
    for (var count = 0; count < 15000; count++) {
        document.getElementById("here").innerHTML += "a";
    }
}

/**
 *      Essa é uma função que atualiza o conteúdo de um elemento da 
 *      página em um loop. O problema com esse código é que, para cada 
 *      iteração do loop, o elemento é acessado duas vezes: uma para 
 *      leitura do valor da propriedade innerHTML e outra para sua 
 *      escrita. Uma versão mais eficiente dessa função utilizaria uma 
 *      variável local para armazenar o conteúdo atualizado, escrevendo 
 *      o valor apenas uma vez no final do loop:
*/
function innerHTMLLoop2() {
    var content = "";
    for (var count = 0; count < 15000; count++) {
        content += "a";
    }
    document.getElementById("here").innerHTML += content;
}
