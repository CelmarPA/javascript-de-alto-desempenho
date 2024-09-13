/**
 *      Uma fonte constante de debate acerca do desempenho dos loops é 
 *      sobre qual deles deve ser preferido. Dos quatro oferecidos pelo 
 *      JavaScript, apenas um é significativamente mais lento: o loop 
 *      for-in.
 * 
 *      Uma vez que cada iteração resulta em uma verificação de 
 *      propriedade na instância ou em um protótipo, o loop for-in 
 *      representa um custo de desempenho bem mais considerável, sendo 
 *      mais lento do que os outros tipos de loops. Por esse motivo, é 
 *      recomendado evitar o loop for-in a não ser que a intenção seja 
 *      iterar sobre um número desconhecido de propriedades do objeto. 
 *      Caso tenha um número conhecido e finito de propriedades sobre as 
 *      quais iterar, prefira a utilização de outros tipos de 
 *      loops:      
*/
var props = ["prop1", "prop2"],
    i = 0;

while (i < props.length) {
    process(object[props[i++]]);
}

/**
 *      Esse código produz um array cujos membros são nomes de 
 *      propriedades. O loop while é utilizado para iterar sobre esse 
 *      pequeno número de propriedades e processar o membro apropriado 
 *      em object. Em lugar de verificar cada propriedade em object, o 
 *      código enfoca apenas as propriedades de interesse, poupando 
 *      processamento e tempo.
 * 
 *      # Nunca utilize o for-in para iterar sobre membros de um array.
*/

/**
 *      A escolha de um tipo de loop deve ter como base suas 
 *      necessidades, e não preocupações de desempenho. Se o tipo do 
 *      loop não influencia seu desempenho, o que influencia? 
 *      Há, na verdade, dois fatores: 
 *          • O trabalho feito a cada iteração. 
 *          • O número de iterações.
 * 
 *      Ao reduzir qualquer um desses fatores, você pode afetar de modo 
 *      positivo o desempenho do loop
*/
