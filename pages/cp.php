<?php
if ( isset( $_POST['ajax'] ) ) {
    header( "Content-Type: text/html;  charset=ISO-8859-1", true );
    session_save_path( '../sessions/' );
    session_start();
    if ( $_POST['cp_op'] == 'ch_pass' ) {
        ?>
        <div class="center">
            <input type="password" class="text" id="CH_OPASS" placeholder="Insira Sua Senha Atual"/></br>
            <input type="password" class="text" id="CH_NPASS" placeholder="Insira Sua Senha Nova"/></br>
            <input type="password" class="text" id="CH_RPASS" placeholder="Repita Sua Senha Nova"/></br>
            <input class="submit" type="submit" value="Trocar Senha!"/></br>
            <span id="chpass_message"></span>
        </div>
        <?php
    } else {
        header( 'HTTP/1.0 404 Not Found' );
    }
} else {
    header( 'HTTP/1.0 404 Not Found' );
}
?>