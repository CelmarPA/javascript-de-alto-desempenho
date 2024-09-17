/**
 *      A execução de seu código JavaScript no YUI Compressor resulta em 
 *      uma economia tremenda quando comparada ao JSMin, sem que seja 
 *      necessária nenhuma ação adicional.
 * 
 *      Considere a seguinte função, projetada para “ativar/desativar” 
 *      (toggle) a classe selected no elemento especificado do DOM (220 
 *      bytes):
*/
function toggle (element) {
    if (YAHOO.util.Dom.hasClass(element, "selected")){
        YAHOO.util.Dom.removeClass(element, "selected");
    } else {
        YAHOO.util.Dom.addClass(element, "selected");
    }
}

// O YUI Compressor transformará esse código no seguinte (de 147 bytes):
function toggle(a){if(YAHOO.util.Dom.hasClass(a,"selected")){
    YAHOO.util.Dom.removeClass(a,"selected")}else{YAHOO.util.Dom.
    addClass(a,"selected")}};

/**
 *      Caso você refatore a versão original armazenando uma referência 
 *      local a YAHOO.util.Dom e utilizando uma constante para o valor 
 *      "selected", o código terá a seguinte aparência (de 232 bytes):
*/
function toggle (element) {
    var YUD = YAHOO.util.Dom, className = "selected";
    if (YUD.hasClass(element, className)){
        YUD.removeClass(element, className);
    } else {
        YUD.addClass(element, className);
    }
}

// Essa versão mostra uma economia ainda maior depois de ter sido minificada pelo YUI Compressor (resultando em 115 bytes):
function toggle(a){var c=YAHOO.util.Dom,b="selected";if(c.hasClass(a,b)){
    c.removeClass(a,b)}else{c.addClass(a,b)}};

/**
 *      A razão de compactação avançou de 33% para 48%, um resultado  
 *      espantoso, dada a pequena quantidade de trabalho necessário. 
 *      Entretanto, é importante notar que a compressão em gzip, que 
 *      ocorre no downstream, pode produzir resultados conflitantes; em 
 *      outras palavras, o menor arquivo minificado pode nem sempre 
 *      resultar no menor arquivo depois de comprimido pelo gzip. Esse 
 *      resultado estranho é uma consequência direta da diminuição da 
 *      redundância no arquivo original. Além disso, esse tipo de 
 *      microotimização apresenta um pequeno custo sobre o tempo de 
 *      execução, já que agora variáveis serão utilizadas no lugar dos 
 *      valores literais, exigindo verificações adicionais. Dessa forma, 
 *      recomendo que você não abuse dessas técnicas, mesmo que valha à 
 *      pena levá-las em consideração quando conteúdo estiver 
 *      sendoentregue a usuários que não aceitam (ou não tornam pública 
 *      sua aceitação) a compressão gzip.
*/
