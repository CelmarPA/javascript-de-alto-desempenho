/**
 *      Evitar a realização excessiva de trabalho é a melhor técnica 
 *      para otimizar o desempenho. Quanto menos trabalho seu código 
 *      tiver de realizar, mais rápido ele será executado. Dentro desse 
 *      raciocínio, também faz sentido evitar a realização de trabalhos 
 *      repetitivos. A efetuação das mesmas tarefas repetidas vezes é 
 *      sempre um desperdício de tempo de execução. Para prevenir a 
 *      execução de trabalho repetitivo, a memoização (memoization) é 
 *      uma das abordagens disponíveis. Ela atua valendo-se do 
 *      armazenamento em cache de cálculos prévios para uso futuro, o 
 *      que a torna uma técnica especialmente útil em algoritmos 
 *      recursivos.
 * 
 *      Quando funções recursivas são chamadas várias vezes durante a 
 *      execução do código, é comum que haja muita duplicação de ações. 
 *      A função factorial(), é um ótimo exemplo de como ações podem ser 
 *      repetidas várias vezes em funções recursivas. Considere o 
 *      seguinte código:
*/
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

var factorial6 = factorial(6);
var factorial5 = factorial(5);
var factorial4 = factorial(4);

/**
 *      Esse código produz três fatoriais e faz com que a função 
 *      factorial() seja chamada 18 vezes. Sua desvantagem é o fato de 
 *      que todo o trabalho necessário é realizado logo na primeira 
 *      linha. Uma vez que o fatorial de 6 é igual a 6 multiplicado pelo 
 *      fatorial de 5, o fatorial de 5 está sendo calculado duas vezes. 
 *      Para piorar, o fatorial de 4 está sendo calculado três vezes. 
 *      Faz muito mais sentido salvar e reutilizar esses cálculos em vez 
 *      de começar do zero sempre que a função for chamada.
 * 
 *      Utilizando a memoização, podemos reescrever a função factorial()
 *      da seguinte maneira:
*/
function memFactorial(n) {
    if (!memFactorial.cache) {
        memFactorial.cache = {
            "0": 1,
            "1": 1,
        };
    }
    if (!memFactorial.cache.hasOwnProperty(n)) {
        memFactorial.cache[n] = n * memFactorial(n - 1)
    }
    return memFactorial.cache[n];
}

/**
 *      A chave para essa versão memoizada da função fatorial é a criação
 *      de um objeto cache. Esse objeto é armazenado na função em si, 
 *      sendo preenchido previamente com os dois fatoriais mais simples: 
 *      0 e 1. Antes de calcular um fatorial, esse cache é conferido 
 *      para verificar se o cálculo já foi realizado. A inexistência de 
 *      um valor no cache significa que o cálculo deve ser feito pela 
 *      primeira vez, sendo seu resultado armazenado para uso futuro. 
 *      Essa função é utilizada da mesma maneira que a factorial() 
 *      original:
*/
var fact6 = memFactorial(6);
var fact5 = memFactorial(5);
var fact4 = memFactorial(4);
/**
 *      Esse código retorna três fatoriais diferentes, mas realiza um 
 *      total de oito chamadas a memfactorial(). Uma vez que todos os 
 *      cálculos necessários são efetuados na primeira linha, as duas 
 *      seguintes não têm de efetuar nenhuma recursão, já que valores 
 *      armazenados em cache é que serão retornados.
 * 
 *      O processo de memoização pode ser levemente diferente para cada 
 *      função recursiva, mas em geral sempre se aplica o mesmo padrão. 
 *      Para tornar mais fácil a memoização de uma função, podemos 
 *      definir uma função memoize() que encapsula a funcionalidade 
 *      básica que buscamos. Por exemplo:
*/
function memoize(fundamental, cache) {
    cache = cache || {};
    var shell = function(arg) {
        if (!cache.hasOwnProperty(arg)) {
            cache[arg] = fundamental(arg);
        }
        return cache[arg];
    };
    return shell;
}

/**
 *      Essa função memoize() aceita dois argumentos: uma função a ser 
 *      memoizada e um objeto cache opcional. O objeto cache pode ser 
 *      passado caso você queira preencher alguns valores 
 *      antecipadamente: caso contrário, um novo objeto cache será 
 *      criado. Uma função shell é então criada, envolvendo a original 
 *      (fundamental) e garantindo que um novo resultado seja calculado 
 *      apenas se nunca tiver sido calculado antes. Essa função shell é 
 *      retornada para que possa ser chamada diretamente, da seguinte 
 *      maneira:
*/
// Memoize a função factorial
var memfactorial = memoize(factorial, {"0": 1, "1": 1});

// Chama a nova função
var facto6 = memfactorial(6);
var facto5 = memfactorial(5);
var facto4 = memfactorial(4);
