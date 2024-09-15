/**
 *      A comunicação entre um worker e o código da página web é 
 *      estabelecida por uma interface de evento. O código da página web 
 *      pode passar dados ao worker utilizando o método postMessage(), 
 *      que aceita um único argumento indicando os dados que devem ser 
 *      passados. Há também um manipulador de evento onmessage, que é 
 *      utilizado para receber informações do worker. Por exemplo:
*/
var worker = new Worker("code.js");
worker.onmessage = function (event) {
    alert(event.data);
};
worker.postMessage("Nicholas");

/**
 *      O worker recebe esses dados pelo disparo de um evento message. 
 *      Um manipulador onmessage é definido, sendo que o objeto event 
 *      tem uma propriedade data que contém todos os dados que foram 
 *      passados. O worker poderá, então, passar informações de volta à 
 *      página web utilizando seu próprio método postMessage():
*/
// Dentro de code.js
self.onmessage = function (event) {
    self.postMessage("Hello, " + event.data + "!");
}

/**
 *      A string final acaba no manipulador de evento onmessage para o 
 *      worker. Esse sistema de mensagens é a única forma pela qual o 
 *      worker e a página web podem se comunicar. Apenas determinados 
 *      tipos de dados podem ser passados utilizando o postMessage(). 
 *      Você pode passar valores primitivos (strings, números, 
 *      booleanos, null e undefined) assim como instâncias de Object e 
 *      Array; não é possível a transmissão de qualquer outro tipo de 
 *      dados.
*/
