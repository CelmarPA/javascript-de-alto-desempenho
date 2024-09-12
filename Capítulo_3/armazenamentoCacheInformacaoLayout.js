/**
 *      Navegadores tentam minimizar o número de reflows enfileirando 
 *      alterações e executando-as em lotes. Todavia, quando você 
 *      solicita informações de layout, como offsets, valores de scroll 
 *      ou de estilo computados, o navegador esvazia a fila e aplica 
 *      todas as alterações para que possa retornar o valor atualizado. 
 *      É sempre interessante minimizar o número de solicitações por 
 *      informações de layout, e quando elas tiverem de ser feitas, que 
 *      sejam designadas a variáveis locais, para que o trabalho seja 
 *      feito justamente sobre esses valores locais.
 * 
 *      Considere como exemplo a movimentação diagonal de um elemento 
 *      myElement, um pixel por vez, partindo da posição 100 x 100 px e 
 *      terminando em 500 x 500 px. No corpo de um loop de tempo limite  
 *      você pode utilizar:
*/
// Ineficiente
myElement.style.left = 1 + myElement.offsetLeft + "px";
myElement.style.top = 1 + myElement.offsetTop + 'px';
if (myElement.offsetLeft >= 500) {
    stopAnimation();
}

/**
 *      Toda vez que o elemento se mover, o código solicitará os valores 
 *      de offset, fazendo com que o navegador esvazie a fila de 
 *      renderização e não se beneficie de suas otimizações. Um modo 
 *      mais eficiente de fazer a mesma operação seria tomar o valor da 
 *      posição inicial e designar esse valor a uma variável como var 
 *      current = myElement.offsetLeft;. A seguir, dentro do loop de 
 *      animação, trabalharíamos com a variável atual, sem solicitar 
 *      offsets:
*/
current++;
myElement.style.left = current + "px";
myElement.style.top = current + "px";
if (current >= 500) {
    stopAnimation();
}
