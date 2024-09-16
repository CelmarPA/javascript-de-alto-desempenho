/**
 *      Quando os dados têm apenas de ser enviados ao servidor, há duas 
 *      técnicas amplamente utilizadas: XHR e beacons.
 * 
 *      XMLHttpRequAinda que seja mais utilizada para recuperação de 
 *      dados do servidor, a XHR também pode ser aplicada no envio de 
 *      dados. Dados podem ser enviados como GET ou POST, assim como com 
 *      outros cabeçalhos HTTP, o que confere uma grande flexibilidade a 
 *      essas operações. A técnica XHR é especialmente útil quando a 
 *      quantidade de dados enviados de volta ao servidor excede o 
 *      comprimento máximo da URL em um navegador. Nessa situação, você 
 *      pode enviar os dados de volta como POST:
*/
var url = "/data.php";
var params = [
    "id=934875",
    "limit=20"
];

var req = new XMLHttpRequest();

req.onerror = function() {
    // Erro
};

req.onreadystatechange = function () {
    if (req.readyState === 4) {
        // Sucesso
    }
};

req.open("POST", url, true);
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.setRequestHeader("Content-Length", params.length);
req.send(params.join("&"));

/**
 *      Como podemos ver no exemplo, nada será feito caso a postagem 
 *      falhe. Não há problema nisso quando a XHR é usada para capturar 
 *      estatísticas abrangentes, mas se for crucial que os dados 
 *      cheguem até o servidor, deve-se acrescentar códigos adicionais 
 *      que provoquem novas tentativas em caso de fracasso:
*/
function xhrPost(url, params, callback) {
    var req = new XMLHttpRequest();

    req.onerror = function () {
        setTimeout(function () {
            xhrPost(url, params, callback);
        }, 1000);
    };

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            if (callback && typeof callback === "function") {
                callback();
            }
        }
    };

    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.setRequestHeader("Content-Length", params.length);
    req.send(params.join("&"));
}

/**
 *      Quando utilizar XHR no envio de dados de volta ao servidor, 
 *      prefira o GET. Para pequenas quantidades de dados, uma 
 *      solicitação GET será enviada ao servidor em um único pacote. Uma 
 *      solicitação POST, por outro lado, será enviada em ao menos dois 
 *      pacotes, um para os cabeçalhos e outro para o corpo do POST. Um 
 *      POST é mais adequado para envio de grandes quantidades de dados 
 *      ao servidor, casos em que o pacote extra não será tão 
 *      significativo.
*/

// Beacons
/**
 *      Essa técnica é muito semelhante à inserção dinâmica da tag 
 *      script. Nela, JavaScript é utilizado para criar um novo objeto 
 *      Image, com a propriedade src definida como a URL de um script em 
 *      seu servidor. Essa URL contém os dados que desejamos enviar de 
 *      volta no formato GET de pares chave-valor. Observe que nenhum 
 *      elemento img tem de ser criado ou inserido no DOM.
*/
var url = "/status_tracker.php";
var params = [
    "step=2",
    "time=1248027314"
];
(new Image()).src = url + "?" + params.join("&");

/**
 *      O servidor toma esses dados e os armazena; ele não tem de enviar 
 *      nada de volta ao cliente, já que a imagem não é exibida. Esse é 
 *      o modo mais eficiente para envio de informações de volta ao 
 *      servidor. Há pouco custo, e os erros que venham a ocorrer no 
 *      lado servidor não afetam de modo algum o lado cliente.
 * 
 *      A simplicidade dos beacons de imagem também indica a presença de 
 *      restrições quanto ao que pode ser feito. Você não pode enviar 
 *      dados POST, ficando limitado a um número bem pequeno de 
 *      caracteres antes que alcance o limite máximo de tamanho da URL. 
 *      Dados podem ser recebidos de volta, mas apenas por meios 
 *      limitados. A escuta pelo evento load do objeto Image, que 
 *      sinalizará o recebimento bem-sucedido dos dados, é possível. 
 *      Você também pode verificar a largura e altura da imagem que o 
 *      servidor retorna (caso seja retornada) e utilizar esses números 
 *      para informar o estado do servidor. Por exemplo, uma largura de 
 *      1 pode ser  “sucesso”, enquanto um valor 2 pode representar 
 *      “tente novamente”.
 * 
 *      Caso você não tenha de retornar dados em sua resposta, envie um 
 *      código 204 No Content e nenhum corpo na mensagem. Isso impedirá 
 *      que o cliente fique esperando por um corpo de mensagem que nunca 
 *      chegará:
*/
var url = "/status_tracker.php";
var params = [
    "step=2",
    "time=1248027314"
];

var beacon = new Image();
beacon.src = url + "?" + params.join("&");

beacon.onload = function () {
    if (this.width === 1) {
        // Sucesso
    } else if (this.width === 2) {
        // Fracasso, crie um novo beacon e tente novamente
    }
};

beacon.onerror = function () {
    // Erro, espere um pouco, crie outro beacon e tente novamente
};
