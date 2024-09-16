var url = "/data.php";
var params = ["id=934875", "limit=20"];

var req = new XMLHttpRequest();
req.onreadystatechange = function () {
    if (req.readyState === 4) {
        var responseHeaders = req.getAllResponseHeaders(); // Pega os cabeçalhos de resposta
        var data = req.responseText; // Pega os dados
        // Processe os dados aqui...
    }
};
req.open("GET", url + "?" + params.join("&"), true);
req.setRequestHeader("X-Requested-With", "XMLHttpRequest"); // Define um cabeçalho de solicitação
req.send(null); // Envia a solicitação

/**
 *      Esse exemplo mostra como solicitar dados de uma URL com 
 *      parâmetros e como ler o texto e os cabeçalhos de resposta. Um 
 *      readyState de valor 4 indica que toda a resposta foi recebida e 
 *      está disponível para manipulação. 
 * 
 *      É possível interagir com a resposta do servidor conforme ela é 
 *      transferida escutando por um readyState valor 3. Isso é 
 *      conhecido como streaming e é uma poderosa ferramenta para 
 *      melhoria do desempenho de suas solicitações de dados:
*/
req.onreadystatechange = function () {
    if (req.readyState === 3) { // Alguns dados, mas não todos foram recebidos
        var dadaSoFar = req.responseText;
        // Processe os dados aqui...
    } else if (req.readyState === 4) { // Todos os dados foram recebidos
        var data = req.responseText;
        // Processe os dados aqui...
    }
}