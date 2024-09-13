/**
 *      A seguir há um exemplo que demonstra como esse processo é 
 *      executado com alternação.
*/
/h(ello|appy) hippo/.test("hello there, happy hippo");

/**
 *      Essa expressão regular realiza testes de correspondência para 
 *      “hello hippo” ou “happy hippo”. Ela começa o teste buscando um 
 *      h, encontrado imediatamente no primeiro caractere da 
 *      string-alvo. A seguir, a subexpressão (ello|appy) oferece dois 
 *      caminhos a serem seguidos. A regex escolhe a opção à esquerda 
 *      (alternações sempre atuam da esquerda para a direita) e checa se 
 *      ello corresponde aos caracteres seguintes da string. De fato 
 *      correspondem, e a regex também é capaz de identificar o 
 *      caractere de espaço que vem em sequência. Nesse ponto, 
 *      entretanto, ela atinge um beco sem saída, já que o h em hippo 
 *      não corresponde ao t que vem a seguir na string. A expressão 
 *      regular não desiste, pois ainda não tentou todas as opções 
 *      disponíveis. Ela recua para o último ponto de decisão (logo após 
 *      a correspondência do h inicial) e tenta casar a segunda opção de 
 *      alternação. Isso também não dá certo e, uma vez que não existem 
 *      mais opções, a regex determina que uma correspondência não pôde 
 *      ser encontrada partindo do primeiro caractere da string. Seu 
 *      próximo passo é avançar para uma tentativa a partir do segundo 
 *      caractere. Lá, ela não encontra um h, o que faz com que continue 
 *      sua busca até que alcance o 14º caractere, onde confere o h em 
 *      “happy”. Repetem-se as alternativas. Dessa vez, ello não combina 
 *      com o texto da string, mas depois de recuar e tentar a segunda 
 *      alternativa, ela é capaz de continuar até que corresponda a 
 *      string completa “happy hippo” (veja a figura 5.4). Sucesso.
*/
