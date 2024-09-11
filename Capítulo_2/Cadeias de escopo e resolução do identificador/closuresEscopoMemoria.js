/**
 *      Closures1 representam um dos aspectos mais poderosos do 
 *      JavaScript, permitindo que uma função acesse dados externos a 
 *      seu escopo local. A utilização de closures foi popularizada 
 *      pelos textos de Douglas Crockford e encontra-se presente na 
 *      maioria das aplicações web complexas. Há, entretanto, um impacto 
 *      sobre o desempenho associado à utilização de closures.
*/
function assignEvents() {
    var id = "xdi9592";
    document.getElementById("save-btn").onclick = function(event) {
        saveDocument(id);
    };
}
