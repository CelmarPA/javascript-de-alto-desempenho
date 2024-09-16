/**
 *      Em vez de depender do navegador para cuidar do armazenamento 
 *      em cache, também é possível fazê-lo de modo manual, armazenando 
 *      as respostas recebidas a partir do servidor. Isso pode ser feito 
 *      colocando o texto da resposta dentro de um objeto, indicado pela 
 *      URL utilizada para adquiri-lo. Veja um exemplo de um envoltório 
 *      (wrapper) XHR que primeiro confere se uma URL já foi adquirida:
*/
var localCache = {};

function xhrRequest(url, callback) {
    // Confere o cache local em busca desta URL
    if (localCache[url]) {
        callback.success(localCache[url]);
        return
    }

    // Caso esta URL não esteja no cache, uma solicitação é feita
    var req = createXhrObject();
    req.onerror = function () {
        callback.error();
    };

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (req.responseText === "" || req.status === "404") {
                callback.error();
                return;
            }
            // Armazena a resposta no cache local
            localCache[url] = req.responseText;
            callback.success(req.responseText);
        }
    };
    req.open("GET", url, true);
    req.send(null);
}
