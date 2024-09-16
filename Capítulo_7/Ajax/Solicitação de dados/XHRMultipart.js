/**
 *      A mais nova das técnicas mencionadas aqui, a XHR multiparte 
 *      (multipart XHR, ou MXHR) permite repassar diversos recursos do 
 *      lado servidor para o lado cliente com apenas uma solicitação 
 *      HTTP. Isso é feito pelo empacotamento dos recursos (sejam 
 *      arquivos CSS, fragmentos HTML, código JavaScript ou imagens 
 *      codificadas base64) no lado servidor seguido de seu envio ao 
 *      cliente como uma longa sequência de caracteres, separados por 
 *      alguma string previamente conhecida. O código JavaScript 
 *      processa essa longa string e faz o parsing de cada recurso de 
 *      acordo com seu tipo MIME e com qualquer outro “cabeçalho” 
 *      repassado junto a ela.
 * 
 *      Vamos acompanhar esse processo do início ao fim. Primeiro, uma 
 *      solicitação é feita ao servidor por vários recursos de imagens:
*/
var req = new XMLHttpRequest();

req.open("GET", "rollup_images.php", true);
req.onreadystatechange = function () {
    if (req.readyState === 4) {
        splitImages(req.responseText);
    }
};
req.send(null);

/**
 *      Trata-se de uma solicitação bem simples. Você pede dados 
 *      referentes a rollup_images.php e, quando os recebe, envia-os 
 *      para a função splitImages. 
 * 
 *      Em seguida, no servidor, as imagens são lidas e convertidas em 
 *      strings:
*/
// Lê as imagens e convertendo as em string codificadas em base64
$images = array("kitten.jpg", "sunset.jpg", "baby.jpg");
foreach ($images as $image) {
    $image_fh = fopen($image, 'r');
    $image_data = fread($image_fh, filesize($image));
    fclose($image_fh);
        $payloads[] = base64_encode($image_data);
}
// Agrupa essas strings em uma longa string e apresenta como resultado
$newline = chr(1); // Esse caractere não será exibido naturalmente em nenhuma string base64
echo implode($newline, $payloads);

/**
 *      Esse pedaço de código lê três imagens e faz sua conversão em 
 *      longas strings de base com 64 caracteres. Elas são concatenadas 
 *      utilizando um único caractere, o Unicode 1, e entregues ao 
 *      cliente. Uma vez no lado cliente, os dados são processados pela 
 *      função splitImages:
*/
function splitImages(imageString) {
    var imageData = imageString.split("\u0001");
    var imageElement;
    
    for (var i = 0, len = imageData.length; i < len; i++) {
        imageElement = document.createElement("img");
        imageElement.src = "data:image/jpeg;base64," + imageData[i];
        document.getElementById("container").appendChild(imageElement);
    }
}

/**
 *      Essa função toma a string concatenada dividindo-a novamente em 
 *      três partes. Cada parte é então utilizada para criar um elemento 
 *      de imagem, que é inserido na página. A imagem não é convertida a 
 *      partir de uma string base64 de volta a dados binários; em vez 
 *      disso, ela é repassada ao elemento imagem utilizando uma URL 
 *      data: e o tipo MIME image/jpeg.
 * 
 *      O resultado final faz com que três imagens sejam repassadas ao 
 *      navegador como uma única solicitação HTTP. Isso poderia ser 
 *      feito para 20 imagens, ou mesmo para 100; a reposta seria maior, 
 *      mas continuaríamos precisando apenas de uma única solicitação 
 *      HTTP. Também podemos expandir essa técnica para outros tipos de 
 *      recursos. Arquivos JavaScript, arquivos CSS, fragmentos HTML e 
 *      imagens de vários tipos podem ser combinados em uma única 
 *      resposta.
 * 
 *      Qualquer tipo de dados que possa ser manipulado como uma string 
 *      em JavaScript pode ser enviado. Aqui temos funções que tomarão 
 *      strings para código JavaScript, estilos CSS e imagens, 
 *      convertendo-as em recursos que o navegador possa usar:
*/
function handleImageData(data, mimeType) {
    var img = document.createElement("img");
    img.src = "data:" + mimeType + ";base64," + data;
    return img;
}

function handleCss(data) {
    var style = document.createElement("style");
    style.type = "text/css";
    var node = document.createTextNode(data);
    style.appendChild(node);
    document.getElementsByTagName("head")[0].appendChild(style);
}

function handleJavaScript(data) {
    eval(data);
}

/**
 *      Conforme as respostas MXHR tornam-se maiores, passa a ser 
 *      necessário que cada recurso seja processado conforme é recebido, 
 *      em vez de esperarmos pela resposta inteira. Isso pode ser feito 
 *      detectando um readyState de valor 3: 
*/
var req = new XMLHttpRequest();
var getLatestPacketInterval, lastLength = 0;

req.open("GET", "rollup_images.php", true);
req.onreadystatechange = readyStateHandler;
req.send(null);

function setRequestHeader() {
    if (req.readyState === 3 && getLatestPacketInterval === null) {
        // Começa a checagem
        getLatestPacketInterval = window.setInterval(function () {
            getLatestPacket();
        }, 15);
    }

    if (req.readyState === 4) {
        // Interrompe a checagem
        clearInterval(getLatestPacketInterval);

        // Pega o último pacote
        getLatestPacket();
    }
}

function getLatestPacket() {
    var length = req.responseText.length;
    var packet = req.responseText.substring(lastLength, length);

    processPacket(packet);
    lastLength = length;
}

/**
 *      Assim que o readyState 3 for disparado pela primeira vez, um    
 *      temporizador será iniciado. A cada 15 milissegundos a resposta  
 *      será conferida pela presença de novos dados. Cada pedaço de 
 *      dados será coletado até que um caractere delimitador seja 
 *      encontrado. Ao término, tudo será processado como um recurso 
 *      completo.
*/
