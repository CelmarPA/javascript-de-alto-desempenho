/**
 *      A quantidade de recursão aceita por engines JavaScript varia, 
 *      estando diretamente relacionada ao tamanho da pilha de chamadas 
 *      do JavaScript. Com exceção do Internet Explorer, onde a pilha de 
 *      chamadas está relacionada à memória disponível no sistema, todos 
 *      os outros navegadores apresentam limites estáticos da pilha de 
 *      chamadas.
 * 
 *      Talvez a parte mais interessante dos erros de estouro de pilha é 
 *      o fato de que, em alguns navegadores, eles são verdadeiramente 
 *      erros de JavaScript, podendo, portanto, serem capturados pela 
 *      utilização de uma instrução try-catch. O tipo de exceção varia 
 *      de acordo com o navegador utilizado. Isso faz com que possamos 
 *      tratar desses erros diretamente a partir do JavaScript:
*/
try {
    recurse();
} catch (ex) {
    alert("Too much recursion!")
}
