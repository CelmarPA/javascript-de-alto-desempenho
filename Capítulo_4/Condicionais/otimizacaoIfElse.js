/**
 *      Sempre que quisermos otimizar a instrução if-else, devemos
 *      minimizar o número de condições a serem avaliadas antes da
 *      escolha do caminho correto. Portanto, a otimização mais fácil é
 *      sempre a garantia de que as condições mais comuns venham
 *      primeiro. Considere o seguinte:
 */
if (value < 5) {
    // faça algo
} else if (value > 5 && value < 10) {
    // faça algo
} else {
    // faça algo
}

/**
 *      Esse código é ideal apenas se value frequentemente tiver um
 *      valor menor que cinco. Se value é geralmente maior ou igual a
 *      dez, duas condições terão de ser avaliadas antes que o caminho
 *      correto seja tomado, aumentando o tempo médio gasto nessa
 *      instrução. As condições em uma instrução if-else devem sempre
 *      ser ordenadas a partir da mais provável em direção à menos
 *      provável, para garantir que o tempo de execução seja o mais
 *      rápido possível.
 *
 *      Outra abordagem para a minimização das avaliações de condição é
 *      a organização do if-else em uma série de instruções if-else
 *      aninhadas. A utilização de um único e grande if-else geralmente
 *      conduz a um tempo de execução mais lento, conforme cada condição
 *      adicional é avaliada. Por exemplo:
 */
if (value == 0) {
    return result0;
} else if (value == 1) {
    return result1;
} else if (value == 2) {
    return result2;
} else if (value == 3) {
    return result3;
} else if (value == 4) {
    return result4;
} else if (value == 5) {
    return result5;
} else if (value == 6) {
    return result6;
} else if (value == 7) {
    return result7;
} else if (value == 8) {
    return result8;
} else if (value == 9) {
    return result9;
} else {
    return result10;
}

/**
 *      Com essa instrução if-else, o número máximo de condições a serem
 *      avaliadas é dez. Caso os valores possíveis estejam igualmente
 *      distribuídos entre zero e dez, o tempo médio de execução será
 *      desacelerado. Para minimizar o número de condições que deverão
 *      ser avaliadas, este código pode ser reescrito em uma série de
 *      instruções if-else aninhadas, da seguinte maneira:
 */
if (value < 6) {
    if (value < 3) {
        if (value == 0) {
            return result0;
        } else if (value == 1) {
            return result1;
        } else {
            return result2;
        }
    } else {
        if (value == 3) {
            return result3;
        } else if (value == 4) {
            return result4;
        } else {
            return result5;
        }
    }
} else {
    if (value < 8) {
        if (value == 6) {
            return result6;
        } else {
            return result7;
        }
    } else {
        if (value == 8) {
            return result8;
        } else if (value == 9) {
            return result9;
        } else {
            return result10;
        }
    }
}

/**
 *      Essa instrução if-else reescrita apresenta um número máximo de 
 *      quatro avaliações de condição por execução. Isso é realizado 
 *      pela aplicação de uma abordagem de tipo pesquisa-binária, 
 *      dividindo os valores possíveis em uma série de intervalos a 
 *      serem conferidos, seguidos pelo exame de cada uma dessas seções. 
 *      Quando os valores estão distribuídos por igual entre zero e dez, 
 *      o tempo médio gasto para a execução desse código é 
 *      aproximadamente metade do necessário para a execução da 
 *      instrução if-else prévia.
*/
