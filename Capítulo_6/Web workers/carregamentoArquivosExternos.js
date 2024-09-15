/**
 *      O carregamento de arquivos JavaScript externos em um worker é 
 *      realizado pelo método importScripts(), que aceita uma ou mais 
 *      URLs para carregamento de arquivos JavaScript. A chamada a 
 *      importScripts() tem efeito bloqueador dentro do worker, fazendo 
 *      com que o script não continue até que todos os arquivos tenham 
 *      sido baixados e executados. Uma vez que o worker está sendo 
 *      executado fora do thread da UI, não há preocupações quanto à 
 *      responsividade quando ocorre esse tipo de bloqueio. Por exemplo:
*/
// Dentro de code.js
importScripts("file1.js", "file2.js");

self.onmessage = function (event) {
    self.postMessage("Hello, " + event.data + "!");
};

/**
 *      A primeira linha desse código inclui dois arquivos JavaScript 
 *      que serão disponibilizados no contexto do worker.
*/
