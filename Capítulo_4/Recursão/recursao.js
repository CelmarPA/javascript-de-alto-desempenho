/**
 *      Algoritmos complexos são normalmente facilitados pelo uso de 
 *      recursão. Na verdade, há até alguns algoritmos tradicionais que 
 *      presumem a recursão como implementação, como uma função para 
 *      retorno de fatoriais:
*/
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

/**
 *      O problema com função recursivas é que se houver uma condição de 
 *      término mal definida ou ausente, teremos um tempo de execução 
 *      mais longo que poderá até travar a interface do usuário. Além 
 *      disso, funções recursivas têm maior probabilidade de se chocarem 
 *      com os limites de tamanho para as pilhas de chamadas dos 
 *      navegadores.
*/

// 