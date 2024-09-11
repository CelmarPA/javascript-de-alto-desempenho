/**
 *      O protótipo de um objeto determina o tipo ou os tipos dos quais 
 *      ele é uma instância. Por padrão, todos os objetos são instância 
 *      de Object e herdam todos os métodos básicos, como toString(). 
 *      Você pode criar um protótipo de outro tipo definindo e 
 *      utilizando um construtor. Por exemplo:
*/
function Book(title, publisher) {
    this.title = title;
    this.publisher = publisher;
}

Book.prototype.sayTitle = function () {
    console.log(this.title);
};

var book1 = new Book("High Performance JavaScript", "Yahoo! Press");
var book2 = new Book("JavaScript: The Good Parts", "Yahoo! Press");

console.log(book1 instanceof Book); // true
console.log(book1 instanceof Object); // true

book1.sayTitle(); // "High Performance JavaScript"
console.log(book1.toString()); // "[object Object]"

/**
 *      O construtor Book é utilizado para criar uma nova instância de 
 *      Book. O protótipo da instância book1 (__proto__) é Book.
 *      prototype, e o protótipo de Book.prototype é Object. Isso cria 
 *      uma cadeia de protótipo da qual tanto book1 quanto book2 herdam 
 *      seus membros.
*/
