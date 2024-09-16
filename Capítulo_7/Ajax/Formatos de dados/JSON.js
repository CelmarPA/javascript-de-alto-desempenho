/**
 *      Formalizado e popularizado por Douglas Crockford, o JSON é um 
 *      formato de dados leve e de parsing facilitado que utiliza uma 
 *      sintaxeliteral de objetos e arrays JavaScript. Confira um 
 *      exemplo da lista de usuários escrita em JSON:
*/
[
    {"id": 1, "username": "alice", "realname": "Alice Smith", "email": "alice@alicesmith.com"},
    { "id": 2, "username": "bob", "realname": "Bob Jones", "email": "bob@bobjones.com" },
    { "id": 3, "username": "carol", "realname": "Carol Williams", "email": "carol@carolwilliams.com" },
    { "id": 4, "username": "dave", "realname": "Dave Johnson", "email": "dave@davejohnson.com" }
]

/**
 *      Os usuários são representados como objetos e a lista de usuários 
 *      é um array, assim como qualquer outro array ou objeto seria 
 *      escrito em JavaScript. Isso significa que, quando utilizados 
 *      junto a um método eval() ou envoltos em uma função callback, 
 *      dados JSON são código JavaScript executável. Fazer o parsing de 
 *      uma string JSON em JavaScript é tão simples quanto usar a função 
 *      eval():
*/
function parseJSON(responseText) {
    return eval("(" + responseText + ")");
}

/**
 *      # Uma nota sobre JSON e eval: o uso do eval em seu código é 
 *      perigoso, especialmente na avaliação de dados JSON de terceiros 
 *      (que podem conter código malicioso ou defeituoso). Sempre que 
 *      possível, prefira o método JSON.parse() para fazer o  parsing da 
 *      string de modo nativo. Esse método detectará erros de sintaxe 
 *      dentro do JSON e permitirá a passagem de uma função capaz de 
 *      filtrar ou transformar os resultados.
*/

/**
 *      Assim como no caso do XML, podemos destilar esse formato em uma 
 *      versão ainda mais simples. Neste caso, substituímos os nomes dos 
 *      atributos por versões abreviadas (menos inteligíveis):
*/
[
    { "i": 1, "u": "alice", "r": "Alice Smith", "e": "alice@alicesmith.com" },
    { "i": 2, "u": "bob", "r": "Bob Jones", "e": "bob@bobjones.com" },
    { "i": 3, "u": "carol", "r": "Carol Williams","e": "carol@carolwilliams.com" },
    { "i": 4, "u": "dave", "r": "Dave Johnson", "e": "dave@davejohnson.com" }
]

/**
 *      Temos os mesmos dados como resultado, com uma estrutura umpouco 
 *      menor e menos bytes a serem transmitidos para o navegador. 
 *      Podemos ainda ir um passo adiante, removendo completamente os 
 *      nomes dos atributos. A inteligibilidade desse formato será menor 
 *      se comparada à dos outros dois, mas o tamanho do arquivo será bem 
 *      mais diminuto: quase metade do tamanho apresentado pelo JSON 
 *      detalhado.
*/
[
    [ 1, "alice", "Alice Smith", "alice@alicesmith.com" ],
    [ 2, "bob", "Bob Jones", "bob@bobjones.com" ],
    [ 3, "carol", "Carol Williams", "carol@carolwilliams.com" ],
    [ 4, "dave", "Dave Johnson", "dave@davejohnson.com" ]
]

/**
 *      A realização do parsing com sucesso desses dados exige que a 
 *      ordem dos termos seja mantida. Dito isso, podemos facilmente 
 *      convertê-lo em um formato que contenha os mesmos nomes de 
 *      atributos apresentados no primeiro formato JSON:
*/
function parsingJSON(responseText) {
    var users = [];
    var usersArray = eval("(" + responseText + ")");
    for (var i = 0, len = usersArray.length; i < len; i++) {
        users[i] = {
            id: usersArray[0],
            username: usersArray[1],
            realname: usersArray[2],
            email: usersArray[3]
        };
    }
    return users;
}
