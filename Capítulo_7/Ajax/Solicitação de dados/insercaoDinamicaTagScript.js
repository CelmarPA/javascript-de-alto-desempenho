/**
 *      Essa técnica supera a principal limitação da XHR: ela permite a 
 *      solicitação de dados de um servidor em um domínio diferente. 
 *      Tratase de um hack1; em vez de instanciar um objeto construído 
 *      com um propósito, você utiliza JavaScript para criar uma nova 
 *      tag script e definir seu atributo src como uma URL em um domínio 
 *      diferente.
*/
var scriptElement = document.createElement("script");
scriptElement.src = "http://any-domain.com/javascript/lib.js";
document.getElementsByTagName("head")[0].appendChild(scriptElement);

/**
 *      Ainda assim, inserções dinâmicas da tag script oferecem um 
 *      controle muito menor do que o oferecido pela técnica XHR. Não se 
 *      pode enviar cabeçalhos com a solicitação. Parâmetros apenas 
 *      podem ser passados utilizando GET e não POST. Não é possível 
 *      definir limites de tempo ou realizar novas tentativas da 
 *      solicitação; na verdade, você nem necessariamente ficará sabendo 
 *      se sua solicitação falhar. Terá de esperar até que todos os 
 *      dados retornem antes que possa ter acesso a eles. Você também 
 *      não terá acesso aos cabeçalhos deresposta ou à resposta inteira 
 *      como uma string.
 * 
 *      Esse último ponto é especialmente importante. Uma vez que a 
 *      resposta está sendo utilizada como fonte de uma tag script, ela 
 *      tem de vir como JavaScript executável. Não se pode utilizar XML 
 *      cru, ou mesmo JSON cru; qualquer dado, independentemente do 
 *      formato, deverá estar envolto em um função callback.
*/
var scriptElement = document.createElement("script");
scriptElement.src = "http://any-domain.com/javascript/lib.js";
document.getElementsByTagName("head")[0].appendChild(scriptElement);
function jsonCallback(jsonString) {
    var data = eval("(" + jsonString + ")");
    // Processe os dados aqui...
}

// Nesse exemplo, o arquivo lib.js envolveria os dados na função jsonCallback:
jsonCallback({"status": 1, "colors":["#fff", "#000", "#ff0000"]});
