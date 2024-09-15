/**
 *      Utilizando expressões regulares, podemos implementar um método 
 *      trim com um volume relativamente pequeno de código. Isso será 
 *      especialmente importante em bibliotecas JavaScript voltadas ao 
 *      tamanho dos arquivos. Talvez a melhor solução disponível seja a 
 *      utilização de duas substituições – uma para remoção do espaço em 
 *      branco inicial e outra para o final. Dessa forma, mantemos as 
 *      coisas simples e rápidas, especialmente quando estivermos 
 *      lidando com strings mais longas.
*/
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+/, "").replace(/\s+$/, "");
    }
}

// Teste o novo método caracteres tab (\t) e line feed (\n) estão inclusos no espaço em branco inicial
var str = " \t\n test string ".trim();
console.log(str === "test string"); // true

/**
 *      A seguir veremos várias outras implementações de trimming 
 *      utilizando expressões regulares. Elas representam algumas das 
 *      alternativas mais comuns que você poderá encontrar.
*/
// Aparo 2
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
}

// Aparo 3
String.prototype.trim = function () {
    return this.replace(/^\s*([\s\S]*?)\s*$/, "$1");
}

// Aparo 4
String.prototype.trim = function () {
    return this.replace(/^\s*([/s/S]*\S)?\s*$/, "$1");
}

// Aparo 5
String.prototype.trim = function () {
    return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1");
}

// Aparo sem a utilização de expressões regulares

/**
 *      Ainda que expressões regulares sejam rápidas, vale a pena 
 *      considerar o desempenho de aparos efetuados sem sua ajuda.
*/

// Aparo 6
String.prototype.trim = function () {
    var start = 0,
        end = this.length - 1,
        ws = " \n\r\t\f\x0b\xa0\u1680\u180e\u2000\u2001\u2002\u2003 \u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u202f\u205f\u3000\ufeff";

    while (ws.indexOf(this.charAt(start)) > -1) {
        start ++;
    }
    while (end > start && ws.indexOf(this.charAt(end)) > -1) {
        end--;
    }
    return this.slice(start, end + 1);
}

/**
 *      A variável ws desse código inclui todos os caracteres de espaço 
 *      em branco conforme definidos pelo ECMAScript 5. Por motivo de 
 *      eficiência, evitamos a cópia de qualquer parte da string até que 
 *      as posições de início e fim sejam conhecidas.
*/

// Uma solução híbrida

/**
 *      A abordagem final, é a combinação daeficiência universal de uma 
 *      regex no aparo dos espaços em branco iniciais combinada à 
 *      velocidade característica do método sem expressão regular no 
 *      aparo dos espaços em branco finais.
*/

// Aparo 7
String.prototype.trim = function () {
    var str =  this.replace(/^\s+/, ""),
        end = str.length - 1,
        ws = /\s/;

    while (ws.test(str.charAt(end))) {
        end--;
    }
    return str.slice(0, end + 1);
}
