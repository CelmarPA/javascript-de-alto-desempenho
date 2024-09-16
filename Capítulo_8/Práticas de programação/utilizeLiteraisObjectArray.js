/**
 *      Há várias formas de criar objetos e arrays em JavaScript, mas 
 *      nada é mais rápido do que a criação de literais objetos e arrays. 
 *      Quando não utilizamos literais, a criação e designação típicas 
 *      dos objetos têm a seguinte aparência:
*/
// Cria um objeto
var myObject = new Object();
myObject.name = "Nicholas";
myObject.count = 50;
myObject.flag = true;
myObject.pointer = null;

// Cria um array
var myArray = new Array();
myArray[0] = "Nicholas";
myArray[1] = 50;
myArray[2] = true;
myArray[3] = null;

console.log(myObject);
console.log(myArray);

/**
 *      Ainda que tecnicamente não haja nada de errado com essa 
 *      abordagem, literais são sempre avaliados mais rapidamente. Como 
 *      bônus, ocupam um espaço menor no código, fazendo com que o 
 *      tamanho geral do arquivo também seja menor. O código precedente 
 *      pode ser reescrito com literais da seguinte maneira:
*/
// Cria um objeto
var myObject = {
    name: "Nicholas",
    count: 50,
    flag: true,
    pointer: null
};

// Crie um array
var myArray = ["Nicholas", 50, true, null];

console.log(myObject);
console.log(myArray);