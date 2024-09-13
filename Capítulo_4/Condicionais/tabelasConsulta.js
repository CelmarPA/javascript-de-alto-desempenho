/**
 *      Por vezes, a melhor abordagem às instruções condicionais é
 *      simplesmente evitarmos por completo sua utilização. Quando há um
 *      grande número de valores distintos que devem ser testados, tanto
 *      if-else quanto switch são significativamente mais lentos do que
 *      uma tabela de verificação. Tabelas de consulta (lookup tables)
 *      podem ser criadas utilizando arrays ou objetos regulares em
 *      JavaScript. O acesso a seus dados é muito mais rápido do que a
 *      utilização de ifelse ou switch, especialmente se o número de
 *      condições for grande.
 *
 *      Tabelas de consulta não apenas são mais rápidas quando
 *      comparadas a instruções if-else ou switch como também facilitam
 *      a leitura de seu código quando há um grande número de valores
 *      distintos que devem ser testados. Por exemplo, instruções switch
 *      costumam se tornar de difícil administração quando apresentam um
 *      tamanho extenso, como podemos ver a seguir:
 */
switch (value) {
    case 0:
        return result0;
    case 1:
        return result1;
    case 2:
        return result2;
    case 3:
        return result3;
    case 4:
        return result4;
    case 5:
        return result5;
    case 6:
        return result6;
    case 7:
        return result7;
    case 8:
        return result8;
    case 9:
        return result9;
    default:
        return result10;
}

/**
 *      A quantidade de espaço que essa instrução switch ocupa no código 
 *      provavelmente não é proporcional à sua importância. Toda a 
 *      estrutura pode ser substituída pelo uso de um array como tabela 
 *      de consulta:
*/
// Defina o array de resultados
var results = [result0, result1, result2, result3, result4, result5, result6,result7, result8, result9, result10]

// Retorne o valor correto
return results[value];

/**
 *      Ao utilizar uma tabela de consulta, todas as avaliações de 
 *      condição são eliminadas por completo. A operação se torna uma 
 *      consulta por item de array ou uma consulta por membro de objeto. 
 *      Essa é uma grande vantagem das tabelas de consulta: uma vez que 
 *      não existem condições que devem ser avaliadas, há pouco ou 
 *      nenhum prejuízo adicional sobre o desempenho conforme aumenta o 
 *      número de valores possíveis.
 * 
 *      Tabelas de consulta são especialmente úteis quando há um 
 *      mapeamento lógico entre uma única chave e um único valor (como 
 *      no exemplo prévio). Uma instrução switch é mais apropriada 
 *      quando cada chave demanda a execução de uma ação ou série de 
 *      ações específicas.
*/
