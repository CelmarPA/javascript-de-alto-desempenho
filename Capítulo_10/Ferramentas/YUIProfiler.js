/**
 *      O YUI Profiler oferece um temporizador genérico que coleta os 
 *      dados de desempenho, além de apresentar métodos estáticos para 
 *      dar início e interromper os timings nomeados e recuperar os dados 
 *      de perfil.
*/
var count = 10000, i, element;

Y.Profiler.start("createElement");

for (i = 0; i < count; i++) {
    element = document.createElement("div");
}

Y.Profiler.stop("createElement");

alert("Create " + count + "Element in " + Y.Profiler.getAverage("createElement") + "ms");
