/**
 *      Quando uma expressão regular paralisa seu navegador por segundos 
 *      ou minutos, o problema geralmente se resume a um caso de 
 *      backtracking desenfreado. Para demonstrar uma dessas situações, 
 *      considere a seguinte regex, criada para buscar a correspondência 
 *      de um arquivo HTML inteiro. Diferentemente da maior parte das 
 *      outras regexes, o JavaScript não apresenta uma opção que 
 *      corresponde pontos a quaisquer caracteres, incluindo quebras de 
 *      linha. Dessa forma, esse exemplo utiliza [\s\S] para significar 
 *      a correspondência a qualquer caractere.
*/
/<html>[\s\S]*?<head>[\s\S]*?<title>[\s\S]*?<\/title>[\s\S]*?<\/head>[\s\S]*?<body>[\s\S]*?<\/body>[\s\S]*?<\/html>/

/**
 *      Essa expressão regular funciona bem quando se busca a 
 *      correspondência de uma string HTML adequada, mas pode resultar 
 *      em sérios problemas quando faltam uma ou mais tags necessárias 
 *      na string. Caso a tag </html> esteja ausente, o último [\s\S]*? 
 *      expandirá até o final da string, onde também não encontrará 
 *      nenhuma tag </html>. Nesse ponto, em vez de desistir, a regex vê 
 *      que as sequências prévias de [\s\S]*? recordam posições de 
 *      backtracking que permitem uma expansão ainda maior. Ela tenta 
 *      então expandir o penúltimo [\s\S]*? – utilizando-o para 
 *      corresponder à tag <\body>, anteriormente casada com o padrão 
 *      literal <\/body> na regex – e continua a fazê-lo em busca de uma 
 *      segunda tag desse tipo até que o final da string seja novamente 
 *      atingido. Quando nada disso dá certo, será a vez do 
 *      antepenúltimo [\s\S]*? expandir até o fim, e assim por diante.
*/

// A solução: seja específico

/**
 *      Uma forma de evitar um problema como esse é ser bem mais 
 *      específico quando definir quais caracteres podem ser comparados 
 *      entre os delimitadores necessários. Tome como exemplo o padrão ".
 *      *?". Ele serve para buscar a correspondência de uma string 
 *      delimitada por aspas duplas. Ao substituirmos o operador .*?, 
 *      que é exageradamente permissivo, por um mais específico, como o 
 *      [^"\r\n]*, eliminamos a possibilidade de que recuos forcem o 
 *      ponto a casar com as aspas duplas e a expandir para além dos 
 *      limites desejados.
 * 
 *      Já no exemplo com HTML, não podemos contornar com tanta 
 *      facilidade essa situação. Não se pode utilizar uma classe de 
 *      caractere negado como [^<] no lugar de [\s\S], já que podem 
 *      existir outras tags entre as que estamos buscando. Ainda assim, 
 *      podemos reproduzir o efeito repetindo um grupo de não captura 
 *      que contenha um lookahead negativo (bloqueando a próxima tag 
 *      necessária) e a metassequência [\s\S] (para qualquer caractere). 
 *      Isso garante que as tags que estamos buscando falhem em todas as 
 *      posições intermediárias. Além disso, e o que é ainda mais 
 *      importante, essa prática também impede que os padrões [\s\S] se 
 *      expandam para além das tags bloqueadas.
*/

// Emulação de grupos atômicos com lookaheads e referências anteriores

/**
 *      Algumas espécies de expressões regulares, incluindo as do tipo .
 *      NET, Java, Oniguruma, PCRE e Perl, aceitam um atributo chamado 
 *      agrupamento atômico. Grupos atômicos – escritos como (?>...), 
 *      onde a elipse representa qualquer padrão de regex – são grupos 
 *      de não captura com algo especial. Assim que a expressão regular 
 *      sai de um grupo atômico, todas as posições de backtracking 
 *      dentro do grupo são eliminadas. Isso oferece uma solução muito 
 *      melhor ao problema de backtracking das expressões regulares em 
 *      HTML: caso você venha a posicionar cada sequência [\s\S]*? e a 
 *      tag HTML seguinte juntas dentro de um grupo atômico, toda vez 
 *      que uma das tags HTML necessárias for encontrada a c
 *      orrespondência alcançada será aprisionada. Se uma parte futura 
 *      da expressão regular não encontrar correspondência, nenhuma 
 *      posição de backtracking será lembrada para os quantificadores 
 *      dentro dos grupos atômicos, fazendo com que as sequências [\s\S]
 *      *? não possam expandir para além do que já conseguiram 
 *      corresponder.
 * 
 *      Isso é ótimo, mas o JavaScript não aceita grupos atômicos nem 
 *      ferece qualquer outro tipo de função capaz de eliminar 
 *      backtracking desnecessário. Ainda assim, somos capazes de emular 
 *      grupos atômicos tirando proveito de um comportamento pouco 
 *      conhecido dos lookaheads: o fato de que eles mesmos são grupos 
 *      atômicos. A diferença é que lookaheads não consomem caracteres 
 *      como parte da correspondência geral: simplesmente conferem se o 
 *      padrão que contêm pode ser casado àquela posição. Entretanto, 
 *      podemos contornar esse fato envolvendo o padrão de um lookahead 
 *      dentro de um grupo de captura e adicionando a ele uma referência 
 *      anterior, fora do lookahead. Esta seria a aparência do resultado:
*/
(?=(pattern to make atomic))\1

/**
 *      Essa construção pode ser reutilizada em qualquer padrão no qual 
 *      você deseje utilizar um grupo atômico. Apenas não se esqueça de 
 *      que é preciso utilizar o número apropriado da referência 
 *      anterior caso sua expressão regular contenha mais do que um 
 *      grupo de captura. Confira a aparência que isso teria quando 
 *      aplicado à expressão regular HTML:
*/
/<html>(?=([\s\S]*?<head>))\1(?=([\s\S]*?<title>))\2(?=([\s\S]*?<\/title>))\3(?=([\s\S]*?<\/head>))\4(?=([\s\S]*?<body>))\5(?=([\s\S]*?<\/body>))\6[\s\S]*?<\/html>/

/**
 *      Agora, caso não haja uma tag </html> delimitadora e o último 
 *      [\s\S]*? puder expandir até o fim da string, a expressão regular 
 *      falhará imediatamente. Isso ocorre porque não existem pontos de 
 *      backtracking aos quais ela pode retornar. Cada vez que a regex 
 *      encontra uma tag intermediária e sai de um lookahead, ela 
 *      elimina todas as posições de backtracking de dentro do 
 *      lookahead. A referência anterior seguinte simplesmente faz uma 
 *      nova correspondência dos caracteres literais encontrados dentro 
 *      do lookahead, tornando-os parte da correspondência real.
*/
