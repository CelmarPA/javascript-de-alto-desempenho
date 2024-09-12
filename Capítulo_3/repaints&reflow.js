// Enfileiramento e esvaziamento das alterações à árvore de renderização

/**
 *      Devido aos custos computacionais associados a cada reflow, a 
 *      maioria dos navegadores otimiza esse processo enfileirando 
 *      alterações e executando-as em lotes. Entretanto, você pode 
 *      (muitas vezes involuntariamente) forçar o esvaziamento dessa 
 *      fila e demandar que todas as alterações agendadas sejam 
 *      aplicadas imediatamente. O esvaziamento da fila ocorre quando 
 *      você deseja acessar informações de layout, o que significa usar 
 *      qualquer um destes comandos:
 * 
 *          • offsetTop, offsetLeft, offsetWidth, offsetHeight
 *          • scrollTop, scrollLeft, scrollWidth, scrollHeight
 *          • clientTop, clientLeft, clientWidth, clientHeight
 *          • getComputedStyle() (currentStyle no IE)
 * 
 *      Considere o seguinte exemplo, onde temos a alteração da mesma 
 *      propriedade de estilo três vezes seguidas (isso provavelmente 
 *      não é   algo que você veria em um código real, mas é uma 
 *      ilustração isolada de um tópico importante):
*/
// Definição e recuperação dos estilos em sucessão
var computed,
    tmp = "",
    bodystyle = document.body.style;

if (document.body.currentStyle) { // IE, Opera
    computed = document.body.currentStyle;
} else { // W3C
    computed = document.defaultView.getComputedStyle(document.body, "");
}

// Modo ineficiente de modificação da mesma propriedade e da recuperação da informação de estilo logo em seguida
bodystyle.color = "red";
tmp = computed.backgroundColor;
bodystyle.color = "white";
tmp = computed.backgroundImage;
bodystyle.color = "green";
tmp = computed.backgroundAttachment;

/**
 *      Nesse exemplo, a cor do primeiro plano do elemento body sofre 
 *      três alterações, sendo que cada uma delas é seguida pelo acesso 
 *      à propriedade de estilo computada. As propriedades acessadas – 
 *      backgroundColor, backgroundImage e backgroundAttachment – não 
 *      têm relação com a cor sendo alterada. Ainda assim, o navegador 
 *      tem de esvaziar a fila de renderização, já que uma propriedade 
 *      de estilo computada foi solicitada.
 * 
 *      Uma abordagem preferível a esse exemplo ineficiente é nunca     
 *      solicitar informações de layout enquanto o layout sofre 
 *      alterações. Como mostrado a seguir:
*/
var computed,
    tmp = "",
    bodystyle = document.body.style;

if (document.body.currentStyle) { // IE, Opera
    computed = document.body.currentStyle;
} else { // W3C
    computed = document.defaultView.getComputedStyle(document.body, "");
}

bodystyle.color = "red";
bodystyle.color = "white";
bodystyle.color = "green";
tmp = computed.backgroundColor;
tmp = computed.backgroundImage;
tmp = computed.backgroundAttachment;

// Minimização de repaints e reflows

/**
 *      Reflows e repaints podem ser custosos. Assim, se quisermos 
 *      aplicações responsivas devemos reduzir a ocorrência dessas 
 *      operações. Para minimizar a frequência desses eventos, podemos 
 *      combinar várias alterações de estilo ao DOM em um único lote e 
 *      aplicá-las de uma vez só.
*/

// Alterações de estilo
// Considere o seguinte exemplo:
var el = document.getElementById("mydiv");
el.style.borderLeft = "1px";
el.style.borderRight = "2px";
el.style.padding = "5px";

/**
 *      Aqui temos três propriedades de estilo sendo alteradas, cada uma 
 *      delas afetando a geometria do elemento. Na pior das hipóteses, 
 *      isso fará com que o navegador execute três vezes o processo de 
 *      reflow. A maioria dos navegadores modernos contém otimizações 
 *      para esses casos, efetuando um único reflow, mas ainda podemos 
 *      encontrar ineficiências em navegadores mais antigos, ou caso 
 *      haja um processo assíncrono separado ocorrendo ao mesmo tempo 
 *      (p. ex., o uso de um timer). Se outro código solicitar 
 *      informações de layout enquanto esse código estiver em execução 
 *      podem ocorrer até três refluxos. Da mesma forma, o código está 
 *      acionando o DOM quatro vezes e pode ser otimizado.
 * 
 *      Um modo mais eficiente de se atingir o mesmo resultado é 
 *      combinar todas as alterações e depois aplicá-las de uma só vez, 
 *      modificando apenas uma vez o DOM. Podemos fazê-lo utilizando a 
 *      propriedade cssText:
*/
var el = document.getElementById("mydiv");
el.style.cssText = "boder-left: 1px; boder-right: 2px; padding: 5px;";

/**
 *      A modificação da propriedade cssText, como mostra o exemplo, 
 *      substitui informações de estilo existentes. Desse modo, se 
 *      desejar manter os estilos existentes, você pode anexar o 
 *      seguinte fragmento à string cssText:
*/
el.style.cssText += "; border-left: 1px;";

/**
 *      A alteração do nome da classe CSS é mais limpa e de manutenção 
 *      mais fácil; também ajuda a manter seus scripts livres de código 
 *      de apresentação, ainda que possa envolver um leve impacto no 
 *      desempenho devido ao fato da cascata ter de ser conferida quando 
 *      as classes são alteradas.
*/
var el = document.getElementById("mydiv");
el.className = "active";

// Realização em lotes de alterações ao DOM

/**
 *      Quando há um grande volume de mudanças a serem feitas ao 
 *      elemento DOM, você pode reduzir a quantidade de repaints e 
 *      reflows seguindo os seguintes passos:
 * 
 *          1. Remova o elemento do fluxo do documento.
 *          2. Aplique as várias alterações.
 *          3. Traga o elemento de volta ao documento.
 * 
 *      Esse processo causa dois reflows – um no passo número 1, outro 
 *      no número 3. Caso omita passos desse processo, toda mudança 
 *      efetuada no passo 2 poderá provocar seus próprios reflows.
 * 
 *      Há três modos básicos de modificar o DOM fora do documento:
 *          
 *          • Oculte o elemento, aplique as alterações e exiba-o       
 *            novamente.
 *          • Utilize um fragmento de documento para criar uma subárvore
 *            externa ao DOM e copie-a ao documento.
 *          • Copie o elemento original em um nodo externo ao documento,
 *            faça as modificações necessárias e substitua o elemento 
 *            original quando terminar.
 * 
 *      Para ilustrar as manipulações externas ao documento, considere 
 *      uma lista de links que deve ser atualizada com mais informações:
*/
<ul id="mylist">
    <li><a href="http://phpied.com">Stoyan</a></li>
    <li><a href="http://julienlecomte.com">Julien</a></li>
</ul>

/**
 *      Suponha que dados adicionais, já contidos em um objeto, devam   
 *      ser inseridos nessa lista. Os dados são definidos da seguinte 
 *      forma:
*/
var data = [
    {
        "name": "Nicholas",
        "url": "http://nczonline.net"
    },
    {
        "name": "Ross",
        "url": "http://techfoolery.com"
    }
];

// A seguir, temos uma função genérica para atualização de um nodo com os novos dados:
function appendDataToElement(appendToElement, data) {
    var a, li;
    for (var i = 0, max = data.length; i < max; i++) {
        a = document.createElement("a");
        a.href = data[i].url;
        a.appendChild(document.createTextNode(data[i].name));
        li = document.createElement("li");
        li.appendChild(a);
        appendToElement.appendChild(li);
    }
};

// O modo mais óbvio de efetuarmos a atualização da lista com osdados, sem nos preocuparmos com reflows, seria o seguinte:
var ul = document.getElementById("mydiv");
appendDataToElement(ul, data);

/**
 *      Entretanto, com essa abordagem, cada nova entrada a partir do 
 *      array de dados será anexada à árvore DOM ativa e causará um 
 *      reflow. Como discutimos anteriormente, um modo de reduzirmos os 
 *      reflows é a remoção temporária do elemento <ul> do fluxo do 
 *      documento alterando a propriedade display, seguida por sua 
 *      reversão:
*/
var ul = document.getElementById("mylist");
ul.style.display = "none";
appendDataToElement(ul, data);
ul.style.display= "block";

/**
 *      Também podemos minimizar o número de reflows criando e 
 *      atualizando um fragmento de documento fora do documento e, 
 *      depois, anexando-o à lista original.
*/
var fragment = document.createDocumentFragment();
appendDataToElement(fragment, data);
document.getElementById("mydiv").appendChild(fragment);

/**
 *      Uma terceira solução seria a criação de uma cópia do nodo que 
 *      você deseja atualizar, o trabalho sobre ela e, então, quando 
 *      tiver terminado, a substituição do nodo anterior pela nova 
 *      cópia atualizada:
*/
var old = document.getElementById("mylist");
var clone = old.cloneNode(true);
appendDataToElement(clone, data);
old.parentNode.replaceChild(clone, old);

/**
 *      Recomenda-se que você utilize fragmentos de documento (a segunda 
 *      solução) sempre que possível, uma vez que envolvem o menor 
 *      número de reflows e de manipulações ao DOM.
*/
