/**
 *      Objetos em JavaScript tem como base protótipos. Um protótipo é 
 *      um objeto que serve como base para outro, definindo e 
 *      implementando membros que um novo objeto deve ter. Esse é um 
 *      conceito completamente diferente do conceito tradicional de 
 *      classes da programação orientada a objetos, que define o 
 *      processo para a criação de um novo objeto. Objetos protótipos 
 *      são compartilhados por todas as instâncias de um dado tipo de 
 *      objeto, de modo que todas elas também compartilhem seus membros.
 * 
 *      Um objeto é preso a seu protótipo por uma propriedade interna. O 
 *      Firefox, o Safari e o Chrome expõem essa propriedade aos 
 *      desenvolvedores como __proto__: outros navegadores não permitem 
 *      o acesso por scripts a essa propriedade. Sempre que criar uma 
 *      nova instância de tipo incluso, como Object ou Array, essas 
 *      instâncias automaticamente terão uma instância de Object como 
 *      seu protótipo.
 * 
 *      Objetos podem ter dois tipos de membros: membros de instância 
 *      (também chamados de membros “próprios”) e membros de protótipo. 
 *      Membros de instância existem diretamente na instância do objeto 
 *      em si, enquanto membros de protótipo são herdados do protótipo 
 *      do objeto.
*/
var book = {
    title: "High Performance JavaScript",
    publisher: "Yahoo! Press"
};
console.log(book.toString()); // "[object Object]"

/**
 *      Uma vez que book não tem um membro chamado toString, a busca 
 *      flui para o objeto protótipo, onde o método toString() é 
 *      encontrado e executado. Dessa maneira, book tem acesso a todas 
 *      as propriedades ou métodos de seu protótipo.
 * 
 *      Você pode determinar se um objeto tem um membro de instância com 
 *      um dado nome utilizando o método hasOwnProperty() e passando a 
 *      ele o nome do membro. Para determinar se um objeto tem acesso a  
 *      uma propriedade com um dado nome, você pode utilizar o operador 
 *      in. Por exemplo:
*/
var book = {
    title: "High Performance JavaScript",
    publisher: "Yahoo! Press" 
};

console.log(book.hasOwnProperty("title")); // true
console.log(book.hasOwnProperty("toString")); // true
console.log("title" in book); // true
console.log("toString" in book); // true