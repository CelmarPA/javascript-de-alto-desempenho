/**
 *      O formato ideal deve incluir o mínimo de estrutura possível, mas 
 *      ainda ser capaz de permitir que você separe os campos individuais 
 *      entre si. Tal formato pode ser criado com facilidade simplesmente 
 *      concatenando seus dados com um caractere separador:
*/
Jacob;Michael;Joshua;Matthew;Andrew;Christopher;Joseph;Daniel;Nicholas;
Ethan;William;Anthony;Ryan;David;Tyler;John

/**
 *      Tais separadores criam essencialmente um array de dados,  
 *      semelhante a uma lista separada por vírgulas. Utilizando 
 *      separadores diferentes, você é capaz de criar arrays 
 *      multidimensionais. Veja nossa lista de usuários quando codificada 
 *      em um formato personalizado delimitado por caracteres:
*/
/*
        1:alice:Alice Smith:alice@alicesmith.com;
        2:bob:Bob Jones:bob@bobjones.com;
        3:carol:Carol Williams:carol@carolwilliams.com;
        4:dave:Dave Johnson:dave@davejohnson.com
*/

/**
 *      Esse tipo de formato é extremamente conciso e oferece uma razão 
 *      dados-estrutura bem elevada (consideravelmente maior que qualquer 
 *      outro formato, com exceção de texto puro). Formatos 
 *      personalizados são mais rápidos de baixar e mais rápidos e fáceis 
 *      de analisar e processar: basta chamar split() sobre a string, 
 *      utilizando o separador como argumento. Formatos personalizados 
 *      mais complexos, com vários separadores, exigem loops para separar 
 *      todos os dados (mas lembre-se de que esses loops são extremamente 
 *      rápidos em JavaScript). O split() é uma das operações sobre 
 *      strings mais ágeis, sendo capaz de lidar com listas delimitadas 
 *      por separadores formadas com mais de 10.000 elementos em questão 
 *      de milissegundos. Confira um exemplo do parsing do formato 
 *      precedente:
*/
function parseCustomFormat(responseText) {
    var users = [];
    var usersEncoded = responseText.split(";");
    var userArray;

    for (var i = 0, len = usersEncoded.length; i < len; i++) {
        userArray = usersEncoded[i].split(":");

        users[i] = {
            id: userArray[0],
            username: userArray[1],
            realname: userArray[2],
            email: userArray[3]
        };
    }
    return users;
}

/**
 *      Ao criar seu próprio formato personalizado, uma das decisões mais 
 *      importantes que devem ser tomadas é a escolha do separador. 
 *      Idealmente, cada separador deve ser um único caractere, não 
 *      encontrado naturalmente em seus dados. Caracteres ASCII de número 
 *      baixo funcionam bem e são facilmente representados na maioria das 
 *      linguagens do lado servidor. Por exemplo, veja como você 
 *      utilizaria caracteres ASCII em PHP:
*/
function build_format_custom($users) {
    $row_delimiter = chr(1); // \u0001 em JavaScript
    $field_delimiter = chr(2); // \u0002 em JavaScript
    $output = array();
    foreach ($users as $user) {
        $fields = array($user['id'], $user['username'], $user['realname'], $user['email']);
        $output[] = implode($field_delimiter, $fields);
    }
    return implode($row_delimiter, $output);
}
