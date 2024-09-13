// Tipos de loops

/**
 *      O primeiro é o loop padrão, que compartilha sua sintaxe com 
 *      outras linguagens que têm C como base:
*/
for (var i = 0; i < 10; i++) {
    // corpo do loop
}

/**
 *      O loop for tende a ser a forma de loop JavaScript mais 
 *      utilizada. Existem quatro partes do loop for: inicialização, 
 *      condição pré-teste, pós-execução e corpo do loop. Quando um loop 
 *      é encontrado, o código de inicialização é executado primeiro, 
 *      seguido pela condição pré-teste. Caso essa condição seja 
 *      avaliada como verdadeira (true), o corpo do loop é executado. 
 *      Depois da execução do corpo, o código pós-execução é executado. 
 *      O encapsulamento do loop for acaba por torná-lo um favorito 
 *      entre desenvolvedores.
 * 
 *      O segundo tipo de loop é o loop while. Um loop while é um 
 *      simples loop pré-teste composto de uma condição pré-teste e de 
 *      um corpo:
*/
var i = 0; 
while (i < 10) {
    // corpo do loop
    i++;
}

/**
 *      Antes que o corpo do loop seja executado, a condição pré-teste é 
 *      avaliada. Caso a condição seja avaliada como verdadeira, o corpo 
 *      do loop será executado; caso contrário, pula-se o corpo do loop. 
 *      Todo loop for pode ser escrito como um loop while e vice-versa.
 * 
 *      O terceiro tipo de loop é o do-while. Um loop do-while é o único 
 *      loop pós-teste disponível em JavaScript e é formado de duas 
 *      partes, o corpo do loop e a condição pós-teste:
*/
var i = 0;
do {
    // corpo do loop
} while (i++ < 10);

/**
 *      Em um loop do-while o corpo será sempre executado ao menos uma 
 *      vez, sendo que a condição pós-teste servirá para determinar se o 
 *      loop será executado novamente.
 * 
 *      O quarto e último tipo de loop é o loop for-in. Ele tem um 
 *      propósito muito especial: enumerar as propriedades nomeadas de 
 *      qualquer objeto. O formato básico é o seguinte:
*/
for (var prop in object) {
    // corpo do loop
}

/**
 *      Cada vez que o loop é executado, a variável prop é preenchida 
 *      com o nome de outra propriedade (uma string) que existe no 
 *      objeto até que todas as propriedades tenham sido retornadas. As 
 *      propriedades retornadas são tanto as que existem na instância do 
 *      objeto quanto as herdadas pela cadeia de protótipos.
*/
