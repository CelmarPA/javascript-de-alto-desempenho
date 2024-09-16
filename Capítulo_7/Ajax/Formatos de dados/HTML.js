/**
 *      Muitas vezes os dados que você solicita serão transformados em 
 *      HTML para exibição na página. A conversão de uma grande estrutura 
 *      de dados em HTML simples ocorre com relativa rapidez em 
 *      JavaScript, mas pode ser mais rápida no servidor. Uma técnica a 
 *      ser considerada é a formação de todo o HTML no servidor, seguida 
 *      por sua transmissão de modo intacto ao cliente. Dessa forma, o 
 *      JavaScript é capaz de simplesmente encaixar o código utilizando a 
 *      propriedade innerHTML. Veja um exemplo da lista de usuários 
 *      codificada como HTML:
*/
<ul class="users">
    <li class="user" id="1-id002">
        <a href="http://www.site.com/alice/" class="username">alice</a>
        <span class="realname">Alice Smith</span>
        <a href="mailto:alice@alicesmith.com" class="email">alice@alicesmith.com</a>
    </li>
    <li class="user" id="2-id002">
        <a href="http://www.site.com/bob/" class="username">bob</a>
        <span class="realname">Bob Jones</span>
        <a href="mailto:bob@bobjones.com" class="email">bob@bobjones.com</a>
    </li>
    <li class="user" id="3-id002">
        <a href="http://www.site.com/carol/" class="username">carol</a>
        <span class="realname">Carol Williams</span>
        <a href="mailto:carol@carolwilliams.com"
        class="email">carol@carolwilliams.com</a>
    </li>
    <li class="user" id="4-id002">
        <a href="http://www.site.com/dave/" class="username">dave</a>
        <span class="realname">Dave Johnson</span>
        <a href="mailto:dave@davejohnson.com"
        class="email">dave@davejohnson.com</a>
    </li>
</ul>

/**
 *      O problema dessa técnica é que o HTML é um formato de dados muito 
 *      verboso, até mais que o XML. Imagine que sobre os dados que vimos 
 *      você poderia ainda ter aninhado tags HTML, cada uma com suas IDs, 
 *      classes e outros atributos. É possível que a formatação HTML 
 *      chegue a ocupar mais espaço do que os dados em si, ainda que isso 
 *      possa ser mitigado pelo uso do mínimo possível de tags e 
 *      atributos. Justamente por isso, adote essa técnica apenas quando 
 *      a CPU do lado cliente for mais limitada que a largura de banda.
*/
