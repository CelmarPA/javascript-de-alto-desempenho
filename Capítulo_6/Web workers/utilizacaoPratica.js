/**
 *      Web workers são indicados para quaisquer scripts de longa 
 *      duração que funcionem com dados puros e que não tenham ligações 
 *      à UI do navegador. Pode não parecer muito, mas embutidas em 
 *      aplicações web, temos muitas abordagens que se beneficiariam do 
 *      uso de workers no lugar de temporizadores.
 * 
 *      Considere, por exemplo, o parsing de uma longa string JSON. 
 *      Suponha que os dados sejam grandes o bastante para que o 
 *      processo leve 500 milissegundos: tempo demais para permitirmos a 
 *      execução do JavaScript no cliente, já que isso interferiria na 
 *      experiência do usuário. Não é tão simples quebrarmos essa tarefa 
 *      específica em pedaços menores para que possamos utilizar os 
 *      temporizadores, assim, um worker é a solução ideal. O código 
 *      seguinte ilustra a utilização em uma página web:
*/
var worker = new Worker("jsonparser.js");

// Quando os dados estão disponíveis, esse manipulador de eventos é chamado
worker.onmessage = function(event) {
    // A estrutura JSON é passada de volta
    var jsonData = event.data;

    // A estrutura JSON é utilizada
    evaluateData(jsonData);
};
// Passe a longa string JSON a ser analisada
worker.postMessage(jsonText);

// O código para o worker responsável pelo parsing JSON é o seguinte:

// Dentro de jsonparser.js
// Esse manipulador de eventos é chamado quando os dados JSON estão disponíveis
self.onmessage = function (event) {
    // A string JSON vem como event.data
    var jsonText = event.data;

    // Faça o parsing da estrutura
    var jsonData = JSON.parse(jsonText);

    // Envie de volta os resultados
    self.postMessage(jsonData);
};

/**
 *      Observe que mesmo que JSON.parse() venha a levar por volta de 
 *      500 milissegundos para ser executada, não há necessidade de 
 *      redigirmos código adicional para dividir seu processamento. Essa 
 *      execução ocorrerá em um thread separado, por isso, podemos 
 *      deixar que leve o tempo necessário sem que venha a interferir na 
 *      experiência do usuário.
 * 
 *      A página repassa uma string JSON ao worker utilizando postMessage
 *      (). O worker recebe a string como event.data em seu manipulador 
 *      de evento onmessage, começando em seguida a realizar o parsing. 
 *      Quando termina, o objeto JSON resultante é repassado de volta à 
 *      página pelo método postMessage() do worker. Esse objeto torna-se 
 *      disponível como event.data no manipulador de evento onmessage da 
 *      página.
 * 
 *      O parsing de uma longa string é apenas uma das muitas tarefas 
 *      que podem ser realizadas pelos web workers. Algumas outras 
 *      possibilidades incluem:
 *          • A codificação e decodificação de uma grande string. 
 *          • A realização de cálculos matemáticos complexos (incluindo 
 *            o processamento de imagens ou vídeos).
 *          • A ordenação de um grande array.
*/
