/**
 *      Até mesmo o mais rápido código no corpo de um loop representará 
 *      um problema quando iterado milhares de vezes. Além disso, há um 
 *      pequeno custo de desempenho associado à execução do corpo do 
 *      loop, o que apenas acresce ao tempo de execução geral. A 
 *      diminuição do número de iterações pelo loop pode conduzir a 
 *      ganhos de desempenho. A abordagem mais comum à limitação de 
 *      iterações é conhecida como Dispositivo de Duff (Duff’s Device).
 * 
 *      Uma implementação típica tem a seguinte aparência:
*/
// Crédito: Jeff Greenberg
var iterations = Math.floor(items.length / 8),
    startAt = items.length % 8,
    i = 0;

do {
    switch(startAt) {
        case 0: process(items[i++]);
        case 7: process(items[i++]);
        case 6: process(items[i++]);
        case 5: process(items[i++]);
        case 4: process(items[i++]);
        case 3: process(items[i++]);
        case 2: process(items[i++]);
        case 1: process(items[i++]);
    }
    startAt = 0;
} while (iterations--);

/**
 *      A ideia básica por trás da implementação do Dispositivo de Duff 
 *      é a de que cada viagem pelo loop deve conter um máximo de oito 
 *      chamadas a process(). O número de iterações pelo loop será 
 *      determinado pela divisão do número total de itens por oito. Uma 
 *      vez que nem todos os números podem ser divididos naturalmente 
 *      por oito, a variável startAt abriga o resto dessa divisão e 
 *      indica quantas chamadas a process() ocorrerão na primeira viagem 
 *      pelo loop. Caso existam 12 itens, a primeira passagem pelo loop 
 *      chamaria process() quatro vezes, enquanto a segunda chamaria 
 *      oito vezes. Teríamos um total de duas passagens pelo loop, em 
 *      lugar de 12. Uma versão um pouco mais rápida desse algoritmo 
 *      remove a instrução switch e separa o processamento do resto da 
 *      divisão do processamento principal:
*/
// Crédito: Jeff Greenberg
var i = items.length % 8;

while (i) {
    process(items[i--]);
}

i = Math.floor(items.length / 8);

while (i) {
    process(items[i--]);
    process(items[i--]);
    process(items[i--]);
    process(items[i--]);
    process(items[i--]);
    process(items[i--]);
    process(items[i--]);
    process(items[i--]);
}

/**
 *      Ainda que essa implementação contenha agora dois loops em vez de 
 *      um, ela executa mais rapidamente do que a original, devido à 
 *      remoção da instrução switch do corpo do loop.
 * 
 *      Em casos onde o número de iterações for menor que mil, 
 *      provavelmente teremos um ganho de desempenho praticamente 
 *      insignificante quando comparado à realização de um loop normal. 
 *      Entretanto, à medida que aumenta o número de iterações, aumenta 
 *      também a eficácia da técnica. Com 500 mil iterações, por 
 *      exemplo, o tempo de execução chega a ser 70% mais rápido do que 
 *      a execução por um loop regular.
*/
