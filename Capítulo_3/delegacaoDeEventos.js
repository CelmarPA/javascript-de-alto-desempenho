/**
 *      Uma técnica simples e elegante para a manipulação de eventos DOM 
 *      é a delegação de eventos. Ela tem como base o fato de que 
 *      eventos vêm à tona e podem ser manipulados por um elemento-pai. 
 *      Com a delegação de eventos, apenas um manipulador é anexado ao 
 *      elemento envoltório (wrapper). Esse manipulador lidará com todos 
 *      os eventos que ocorram com os descendentes do pai.
 * 
 *      Segundo o padrão DOM, cada evento tem três fases:
 * 
 *          • Captura
 *          • No alvo
 *          • Borbulhamento
 * 
 *      Utilizando a delegação de eventos, você pode anexar um detector 
 *      de cliques ao elemento “menu” de UL que envolve todos os links e 
 *      inspeciona todos os cliques para ver se eles vêm de um link.
*/
document.getElementById("menu").onclick = function (e) {
    // Target do navegador-x
    e = e || window.event;
    var target = e.target || e.srcElement;
    var pageid, hrefparts;
    // Estamos interessados em hrefs
    // Saia da função em cliques que não venham de links
    if (target.nodeName !== "A") {
        return;
    }
    // Identifique o ID da página a partir do link
    hrefparts = target.href.split("/");
    pageid = hrefparts[hrefparts.length - 1];
    pageid = pageid.replace(".html", "");
    // Atualize a página
    ajaxRequest('xhr.php?page=' + id, updatePageContents);
    // Navegador-x impede a ação normal e cancela o borbulhamento
    if (typeof e.preventDefault === "function") {
        e.preventDefault();
        e.stopPropagation();
    } else {
        e.returnValue = false;
        e.cancelBubble = true
    }
};
