<?php

if ( defined( 's_page' ) ) {
    define( 'HOST', '127.0.0.1' );
    //Insira o Host do SQL
    define( 'USER', 'ragnarok' );
    //Insira o Usuário do SQL ( Pardrão = sa )
    define( 'PASS', 'ragnarok' );
    //Insira a Senha do seu SQL
    //AVISO : CASO NAO INSIRA AS INFORMAÇÕES ACIMA, O SITE NAO IRA FUNCIONAR!
    define( 'D_DB', 'Db_Tank' );
    //Insira o nome da Database do DDTank (Geralmente é Db_tank)
    define( 'W_DB', 'WebDB' );
    //Nao Mude ! Essa DB é necessaria para as Informaçoes
    define( 'SV_IP', '127.0.0.1' );
    //Insira o IP do Server
    define( 'SV_PORT', '9202' );
    //Insira a porta do ROAD (Road.service.exe.config)
    define( 'XAT_ID', '77781766' );
    //Caso tenha um XAT! Insira o ID dele
    define( 'XAT_PGS', '&lg=Brazilian' );
    //Insira os FlashVars do Seu Xat
    define( 'GAME_LINK', 'http://127.0.0.1:8080/NewFlash/Loading.swf?user=%s&key=%s&v=2100&rand=0.735361468389333' );
    //Nao Mude o %s e o %d , eles irao mandar o usuário e a senha!
    define( 'DONATE_TEXT', 'Servico de Cash/Cupons' );
    //Use Tags HTML para editar o DONATE_TEXT , não se esqueça de fechar as tags para nao dar problema no site!
    define( 'START_MONEY', '250000' );
    //Insira a Quantidade de Cupons Adicionada ao Registrar
    define( 'START_GOLD', '250000' );
    //Insira a Quantidade de Gold Ao Registrar
    define( 'START_FREE_MONEY', '25000' );
    //Insira a Quantidade de Moedas Grátis ao Registrar
    define( 'SV_NAME', 'Minecraft' );
    //Insira o Nome Do Seu Servidor , ele será utilizado no titulo do site e do painel de status!
    define( 'TITLE_SEPARATOR', '.::.' );
    //Insira o Separador do Titulo (EX PADRAO : NOME DO SV .::. PAGINA)
} else {
    header( 'HTTP/1.0 404 Not Found' );
}
?>