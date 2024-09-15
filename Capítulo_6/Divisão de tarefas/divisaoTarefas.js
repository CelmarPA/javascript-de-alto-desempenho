/**
 *      O processo que normalmente imaginamos como uma só tarefa pode 
 *      muitas vezes ser dividido em uma série de tarefas menores. Caso 
 *      uma única função esteja demorando demais para ser executada, 
 *      verifique se ela não pode ser quebrada em uma série de funções 
 *      menores que sejam completadas mais rapidamente. Isso costuma ser 
 *      tão simples quanto considerar uma única linha do código como uma 
 *      tarefa atômica, mesmo que várias linhas também possam 
 *      seragrupadas em uma única tarefa. Algumas funções, por natureza, 
 *      são facilmente divisíveis com base nas outras funções que 
 *      chamam. Por exemplo:
*/
function saveDocument(id) {
    // Salve o documento
    openDocument(id);
    writeText(id);
    closeDocument(id);

    // Atualize a Ui indicando sucesso
    updateUI(id);
}

/**
 *      Caso essa função esteja demorando demais, ela pode facilmente 
 *      ser dividida em uma série de passos menores pela divisão dos  
 *      métodos individuais em temporizadores separados. Isso pode ser 
 *      feito adicionando cada função a um array e, depois, utilizando 
 *      um padrão semelhante ao processamento de array
*/
function saveDocument(id) {
    var tasks = [openDocument, writeText, closeDocument, updateUI];

    setTimeout(function () {
        // Execute a próxima tarefa
        var task = tasks.shift();
        task(id);

        // Determine se existem outras
        if (tasks.length > 0) {
            setTimeout(arguments.callee, 25);
        }
    }, 25);
}

/**
 *      Essa versão da função posiciona cada método no array tasks, 
 *      executando apenas um método por temporizador. Fundamentalmente, 
 *      esse exemplo se transforma em um padrão de processamento de 
 *      array, tendo como única diferença o fato de que o processamento 
 *      de um item envolverá a execução da função contida nele. Esse 
 *      padrão também pode ser encapsulado, facilitando seu uso futuro:
*/
function multistep(steps,args, callback) {
    var tasks = steps.concat(); // Clona o array

    setTimeout(function () {
        // Executa a tarefa seguinte
        var task = tasks.shift();
        task.apply(null, args || []);

        // Deternina se existem outras tarefas
        if (tasks.length > 0) {
            setTimeout(arguments.callee, 25);
        } else {
            callback();
        }
    }, 25);
}

/**
 *      A função multistep() aceita três argumentos: um array de funções 
 *      a ser executado, um array de argumentos a ser passado a cada 
 *      função durante sua execução e uma função de callback a ser 
 *      chamada quando o processo estiver completo. A função pode ser 
 *      utilizada da seguinte maneira:
*/
function saveDocument(id) {
    var tasks = [openDocument, writeText, closeDocument, updateUI];

    multistep(tasks, [id], function () {
        alert("Save completed!");
    });
}
