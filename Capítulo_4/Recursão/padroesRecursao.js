/**
 *      Quando se atinge um limite de pilha de chamadas (call stack), 
 *      sua primeira ação deve ser a identificação das instâncias de 
 *      recursão do código. Para isso, há dois padrões recursivos para 
 *      os quais devemos estar atentos. O primeiro é o padrão recursivo 
 *      direto representado na função factorial(), quando uma função= 
 *      chama a si própria. O padrão geral é o seguinte:
*/
function recurse() {
    recurse();
}
recurse();

/**
 *      Esse padrão é tipicamente mais fácil de identificar quando 
 *      ocorrem erros. Um segundo padrão, mais sutil, envolve duas 
 *      funções:
*/
function first() {
    second();
}

function second() {
    first();
}
first();

/**
 *      Nesse padrão de recursão, duas funções chamam a si mesmas
 *      formando um loop infinito. Esse é o padrão mais problemático e 
 *      muito mais difícil de identificar em grandes bases de código.
*/
