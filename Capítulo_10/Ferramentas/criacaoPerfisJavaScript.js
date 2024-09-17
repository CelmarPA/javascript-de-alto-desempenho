/**
 *      A ferramenta que acompanha todas as implementações JavaScript é a 
 *      linguagem em si. Utilizando o objeto Date, podemos fazer uma 
 *      medição do script a qualquer momento. Antes que outras 
 *      ferramentas existissem, essa era uma forma comum de cronometrar a 
 *      execução do script, continuando a ser útil em alguns casos. Por 
 *      padrão, o objeto Date retorna o tempo atual, fazendo com que ao 
 *      subtrairmos uma instância de Date de outra tenhamos acesso ao 
 *      tempo transcorrido em milissegundos. Considere o seguinte 
 *      exemplo, que compara a criação de elementos do zero com a 
 *      clonagem de um elemento existente:
*/
var start = new Date(),
    count = 10000,
    i, element, time;

for  (i = 0; i < count; i++) {
    element = document.createElement("div");
}

time = new Date() - start;
alert("created" + count + "in" + time + "ms");

start = new Date();

for (i = 0; i < count; i++) {
    element = element.cloneNode(false);
}

time = new Date() -  start;
alert("created" + count + "in" + time + "ms");

/**
 *      Como demanda a instrumentação manual de seu próprio código de   
 *      cronometragem, esse tipo de criação de perfis é excessivamente 
 *      trabalhoso. A inclusão de um objeto Timer para lidar com os 
 *      cálculos de tempo e armazenar os dados seria um bom próximo passo.
*/

var count = 10000,
    i, element;

var Timer = {
    _data: {},
    start: function (key) {
        Timer._data[key] = new Date();
    },
    stop: function (key) {
        var time = Timer._data[key];
        if (time) {
            Timer._data[key] = new Date() - time;
        }
    },
    getTime: function (key) {
        return Timer._data[key];
    }
};

Timer.start("createElement");
for (i=0; i < count; i++) {
    element = document.createElement("div");
}

Timer.stop("createElement");

alert("created" + count + "in" + Timer.getTime("createElement") + "ms");