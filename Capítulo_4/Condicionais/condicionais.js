/**
 *      Semelhante em natureza aos loops, condicionais determinam como a 
 *      execução flui pelo JavaScript. O argumento tradicional, presente 
 *      na ciência da computação, quanto à escolha entre a utilização de 
 *      instruções if-else ou switch, também se aplica em JavaScript.
*/

// if-else versus switch

/**
 *      A teoria prevalente quanto à utilização do if-else versus o 
 *      switch tem como base o número de condições que será testado: 
 *      quanto maior o número de condições, mais indicada será a escolha 
 *      do switch em lugar do if-else. Isso tipicamente se resume a qual 
 *      código terá uma leitura mais fácil. O argumento é o de que 
 *      instruções if-else são mais fáceis de serem lidas quando existem 
 *      menos condições, enquanto instruções switch são mais fáceis de 
 *      serem lidas quando há um grande número de condições. Considere o 
 *      seguinte:
*/
if (found) {
    // faça algo
} else {
    // faça algo diferente
}

switch (found) {
    case true:
        // faça algo
        break;
    
    default:
        // faça algo diferente
}

/**
 *      Ainda que esses dois pedaços de código executem a mesma tarefa, 
 *      muitos argumentariam que a instrução if-else é de leitura muito 
 *      mais fácil do que o switch. Entretanto, ao aumentar o número de 
 *      condições, nós normalmente invertemos essa opinião:
*/
if (color == "red") {
    // faça algo
} else if (color == "blue") {
    // faça algo
} else if (color == "brown") {
    // faça algo
} else if (color == "black") {
    // faça algo
} else {
    // faça algo
}

switch (color) {
    case "red":
        // faça algo
        break;
    case "blue":
        // faça algo
        break;
    case "brown":
        // faça algo
        break;
    case "black":
        // faça algo
        break;
    default:
        // faça algo
        break;
}   

/**
 *      A maioria das pessoas consideraria que a instrução switch desse 
 *      código é de leitura mais fácil do que a instrução if-else. Na 
 *      realidade, a instrução switch é mais rápida na maioria dos casos 
 *      quando comparada a if-else, sendo significativamente mais rápida 
 *      quando é grande o número de condições. A principal diferença 
 *      quanto ao desempenho das duas é a de que o custo incremental de 
 *      uma condição adicional é maior em if-else do que em switch.
*/
