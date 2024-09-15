/**
 *      Temporizadores são criados em JavaScript utilizando setTimeout() 
 *      ou setInterval(), sendo que ambos aceitam os mesmos argumentos: 
 *      uma função a ser executada e o tempo que deverá ser aguardado 
 *      (em milissegundos) para sua execução. A função setTimeout() cria 
 *      um temporizador que executa apenas uma vez, enquanto a função 
 *      setInterval() cria um temporizador que se repete periodicamente.
 * 
 *      Chamadas a setTimeout() ou setInterval() dizem à engine que 
 *      espere certo tempo e, somente então, adicione uma tarefa 
 *      JavaScript à fila da UI. Por exemplo:
*/
function greeting() {
    console.log("Hello world!");
}

setTimeout(greeting, 250)

/**
 *      Esse código insere uma tarefa JavaScript que deverá executar a 
 *      função greeting() dentro da fila da UI após a passagem de 250 
 *      milissegundos.
 * 
 *      Tenha em mente que o segundo argumento indica apenas quando a 
 *      tarefa  deverá ser adicionada à fila da UI, o que não 
 *      necessariamente corresponde ao momento em que será executada; 
 *      primeiro, ela terá de aguardar a execução de todas as outras 
 *      tarefas já enfileiradas. Considere o seguinte:
*/
var button =  document.getElementById("my-button");
button.onclick = function () {
    oneMethod();

    setTimeout(function () {
        document.getElementById("notice").style.color = "red";
    }, 250);
};

/**
 *      Quando o botão desse exemplo é clicado ele chama um método e 
 *      define um temporizador. O código para alterar a cor do elemento  
 *      notice está contido em um temporizador que será enfileirado em 
 *      250 milissegundos. Esses 250 milissegundos começam a contar a 
 *      partir do momento em que setTimeout() é chamada, e não ao 
 *      término da execução da função geral. Assim, se setTimeout() é 
 *      chamada no ponto n, a tarefa JavaScript para execução do código 
 *      será adicionada à fila da UI em n + 250.
 * 
 *      Lembre-se que o código do temporizador nunca pode ser executado 
 *      antes que termine a execução da função na qual ele foi criado. 
 *      Por exemplo, caso façamos uma alteração ao código prévio de modo 
 *      que a espera do temporizador seja menor e que haja outra chamada 
 *      à função depois da criação do temporizador, é possível que o 
 *      código da função temporizada seja posto na fila antes que o 
 *      manipulador de evento onclick tenha terminado sua execução:
*/
var button =  document.getElementById("my-button");
button.onclick = function () {
    oneMethod();

    setTimeout(function () {
        document.getElementById("notice").style.color = "red";
    }, 50);

    anotherMethod();
};

/**
 *      Se a execução de anotherMethod() demorar mais do que 50 
 *      milissegundos, o código do temporizador será adicionado à fila 
 *      antes do término do manipulador onclick. O efeito será a 
 *      execução praticamente imediata do código, assim que o 
 *      manipulador tiver executado completamente, sem espera 
 *      perceptível.
 * 
 *      De qualquer maneira, a criação de um temporizador cria uma pausa 
 *      no processo de thread da UI conforme alterna de uma tarefa para 
 *      a próxima. Consequentemente, o código do temporizador zera todos 
 *      os limites relevantes do navegador, incluindo o tempo limite dos 
 *      scripts de longa duração. Além disso, nesse código, a pilha de 
 *      chamadas também é zerada. Essas características fazem dos 
 *      temporizadores a melhor alternativa, compatível com vários 
 *      navegadores, no que diz respeito à criação de uma solução para 
 *      código JavaScript de longa execução.
*/
