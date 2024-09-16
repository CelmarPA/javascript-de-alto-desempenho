/**
 *      O fato de o JSON poder ser executado de modo nativo tem várias 
 *      implicações importantes sobre o desempenho. Quando XHR é 
 *      utilizado, dados JSON são retornados como uma string. Essa string 
 *      é então avaliada usando eval() para ser convertida em um objeto 
 *      nativo. Entretanto, quando é utilizada a inserção dinâmica da tag 
 *      script, dados JSON são tratados como qualquer outro tipo de 
 *      arquivo JavaScript, sendo executados como código nativo. Para 
 *      fazê-lo, os dados devem estar envoltos em uma função callback. 
 *      Isso é conhecido como “JSON com enchimento” (JSON with padding) 
 *      ou JSON-P. A seguir temos a lista de usuários formatada como 
 *      JSON-P:
*/
parseJSON([
    { "id": 1, "username": "alice", "realname": "Alice Smith", "email": "alice@alicesmith.com" },
    { "id": 2, "username": "bob", "realname": "Bob Jones", "email": "bob@bobjones.com" },
    { "id": 3, "username": "carol", "realname": "Carol Williams", "email": "carol@carolwilliams.com" },
    { "id": 4, "username": "dave", "realname": "Dave Johnson", "email": "dave@davejohnson.com" }
]);

/**
 *      O JSON-P acresce um pouco ao tamanho do arquivo com a utilização 
 *      do envoltório (wrapper) callback, mas tal acréscimo é 
 *      insignificante quando comparado ao melhor tempo de parsing. Uma 
 *      vez que os dados são tratados como JavaScript nativo, seu parsing 
 *      também é feito com velocidade de JavaScript nativo.
*/
