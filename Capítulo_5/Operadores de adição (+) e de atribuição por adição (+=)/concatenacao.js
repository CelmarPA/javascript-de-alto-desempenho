/**
 *      Primeiro, um exemplo. Veja a seguir um modo comum de designarmos 
 *      uma string concatenada:
*/
str += "one" + "two";

/**
 *      Ao avaliar esse código, quatro passos serão dados:
 *          1. Uma string temporária será criada na memória.
 *          2. O valor concatenado “onetwo” será designado à string
 *             temporária.
 *          3. A string temporária será concatenada com o valor atual de
 *             str.
 *          4. O resultado será designado a str.
 * 
 *      O código seguinte evita a string temporária (passos 1 e 2 da 
 *      lista) anexando diretamente à str por meio de duas instruções 
 *      distintas. Isso acaba sendo executado com uma velocidade que é 
 *      10 a 40% mais rápida, na maioria dos navegadores:
*/
str += "one";
str += "two";

// Você pode receber a mesma melhora de desempenho utilizando apenas uma instrução, da seguinte maneira:
str =  str + "one" + "two";
// Equivalente a str = ((str + "one") + "two")
