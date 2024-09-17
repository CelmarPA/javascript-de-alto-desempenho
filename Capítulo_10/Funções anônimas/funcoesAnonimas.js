/**
 *      Dependendo do mecanismo utilizado para criação do perfil, alguns 
 *      dados podem ser omitidos pela presença de funções anônimas ou de 
 *      tarefas de funções. Como se trata de um padrão comum em 
 *      JavaScript, muitas das funções avaliadas podem ser anônimas, o 
 *      que dificulta, ou até impossibilita, sua medição e análise. A m
 *      elhor forma de habilitar a criação de perfis para funções 
 *      anônimas é renomeando-as. A utilização de ponteiros a métodos de 
 *      objetos, no lugar de closures, permitirá a mais ampla cobertura 
 *      na criação de perfis. Compare a utilização de uma função embutida:
*/
myNode.onclick = function () {
    myApp.loadData();
};

// Com uma chamada de método:
myApp._onClick = function () {
    myApp.loadData();
};
myNode.onclick = myApp._onClick;

/**
 *      Para profilers que automaticamente instrumentam funções
 *      anônimas, a adição de um nome interno torna os relatórios mais  
 *      legíveis:
*/
myNode.onclick = function myNodeClickHandler() {
    myApp.loadData();
};

/**
 *      Isso também funciona em funções que são declaradas como 
 *      variáveis. Alguns criadores de perfis encontram dificuldades ao 
 *      tentar atribuir nomes a esse tipo de funções:
*/
var onClick = function myNodeClickHandler() {
    myApp.loadData();
};
