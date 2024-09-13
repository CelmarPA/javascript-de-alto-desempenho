/**
 *      O próximo exemplo mostra como funciona o backtracking com 
 *      quantificadores de repetição.
*/
var str = "<p>Para 1.</p>" + 
    "<img scr='smiley.jpg'>" +
    "<p>Para 2.</p>" +
    "<div>Divb.</div>";
/<p>.*<\/p>/i.test(str);

/**
 *      Aqui, a regex começa comparando os três caracteres literais <p> 
 *      no início da string. Em seguida vem .*. O ponto corresponde a 
 *      qualquer caractere excetuando-se quebras de linhas, e o 
 *      quantificador “guloso” asterisco realiza a repetição por zero ou 
 *      mais vezes – o maior número de vezes possível. Uma vez que não 
 *      existem quebras de linhas na string, abrange-se a string 
 *      inteira. Entretanto, ainda há mais para ser conferido no padrão 
 *      da expressão regular. Por isso, a regex busca por 
 *      correspondências a <. Ela não obtém sucesso até o final da 
 *      string, o que faz com que recue um caractere por vez, 
 *      continuamente buscando correspondências até retornar ao 
 *      caractere <, presente no início da tag </div>. Segue-se uma 
 *      busca pela correspondência de \/ (uma barra invertida escapada), 
 *      com sucesso, e de p, com fracasso. Mais uma vez a regex recua, 
 *      repetindo o processo até que finalmente encontra o </p> ao final 
 *      do segundo parágrafo. A correspondência retorna com sucesso, 
 *      desde o início do primeiro parágrafo, até o término do último. 
 *      Esse provavelmente não era o resultado desejado. Podemos alterar 
 *      a regex fazendo com que ela confira parágrafos isolados, 
 *      substituindo o quantificador guloso * pelo “preguiçoso” 
 *      (não-guloso) *?. O recuo em quantificadores desse tipo funciona 
 *      de modo oposto. Quando a expressão regular /<p>.*?<\/p>/ 
 *      alcança .*?, ela primeiro tenta simplesmente pulá-lo e avança 
 *      para a correspondência de <\/p>. Isso ocorre porque *? repete 
 *      seu elemento precedente por zero ou mais vezes, sempre o mínimo 
 *      de vezes possível. O menor número possível sempre é zero. 
 *      Entretanto, quando a opção de seguir < falha nesse ponto da 
 *      string, a regex recua e tenta corresponder o menor número 
 *      seguinte de caracteres: um. Ela continua a recuar dessa forma 
 *      até que o <\/p> que acompanha o quantificador encontra uma 
 *      correspondência completa ao final do primeiro parágrafo. Podemos 
 *      ver que mesmo que haja apenas um parágrafo na stringalvo, as 
 *      versões .* e .*? dessa expressão regular realizarão seu trabalho 
 *      de modo diferente.
*/
