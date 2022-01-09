<?php
if ( isset( $_POST['ajax'] ) ) {
    header( "Content-Type: text/html;  charset=ISO-8859-1", true );
    ?>
    <div class="center">
        <p>AVISO : Leia com atenção!</p>
        <p>Alguns jogos precisam do suporte flash ou java em seu navegador.</p>
        <p>Caso não consigo rodar algum dos jogos por falta do flash ou java faça o download de um navegador compativel.</p>
        <p><b>RECOMENDAÇÕES DE NAVEGADORES COMPATIVEIS</b><ul><li>Windows - Internet Explorer</li><li>Linux - Pale Moon</li></ul></p>
        <p>Como estou sozinho neste projeto,ainda faltam muito conteudo a ser adicionado,caso tenha interesse em ajudar,me procure em uma das redes sociais.</p>
        <p>O minecraft original faz o download de uma .minecraft compativel com o navegador antes de ser executado,então certifique-se de fazer um backup de sua .minecraft caso já exita uma na %APPDATA%,não nos responsabilizamos por qualquer dano causado em sua .minecraft pois já estamos avisando ! ! !</p>
        <h2></h2>
        <p>Template feito por Keven Castilho</p>
        <p>Scripts feito por Keven Castilho</p>
        <p><!-- Seu Texto Aqui --></p>
        <script> $('div #center .center').append(SV_NAME+' &copy; <?php echo date( 'Y' ); ?> | Todos os Direitos Reservados'); </script>
    </div>
    <?php
} else {
    header( 'HTTP/1.0 404 Not Found' );
}
?>