/**
 *      Os web workers poderiam introduzir erros na interface ao 
 *      realizarem alterações no DOM a partir de um thread externo, mas 
 *      cada web worker tem seu próprio ambiente global, que apresenta 
 *      apenas um subgrupo de atributos JavaScript disponíveis. O 
 *      ambiente dos workers é composto da seguinte forma: 
 *          • Um objeto navigator que contém apenas quatro propriedades: 
 *            appName, appVersion, userAgent e plataform. 
 *          • Um objeto location (semelhante a window, exceto pelo fato 
 *            de que todas as suas propriedades são apenas para 
 *            leitura). 
 *          • Um objeto self que aponta para o objeto worker global. 
 *          • Um método importScripts(), utilizado no carregamento de 
 *            JavaScript externo para utilização no worker. 
 *          • Todos os objetos ECMAScrip, como Object, Array, Date etc. 
 *          • O construtor XMLHttpRequest. 
 *          • Os métodos setTimeout() e setInterval(). 
 *          • Um método close() que interrompe imediatamente o worker.
 * 
 *      Uma vez que os web workers têm um ambiente global diferente,    
 *      você não pode criar um a partir de qualquer código JavaScript. 
 *      Na verdade, para criarmos um worker, temos antes de criar um 
 *      arquivo JavaScript inteiramente separado que contenha apenas o 
 *      código que ele deverá executar. Para criar um web worker, você 
 *      deve passar a URL do arquivo JavaScript:
*/
var worker = new Worker("code.js");

/**
 *      Uma vez que isso tenha sido executado, um novo thread com um 
 *      novo ambiente será criado para o arquivo específico. Esse 
 *      arquivo é baixado de modo assíncrono, e o worker não começará 
 *      seu trabalho até que o arquivo tenha sido completamente baixado 
 *      e executado.
*/
