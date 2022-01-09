<?php
if ( isset( $_POST['ajax'] ) ) {
    header( "Content-Type: text/html;  charset=ISO-8859-1", true );
    define( 's_page', true );
    include('../includes/config.inc.php');
    ?>
    <style>
        div#Registro{
            text-align: center;
        }
    </style>
    <div id="Registro">
        <input class="text" type="text" id="R_USER" placeholder="Insira Seu Usuario"/></br>
        <input class="text" type="password" id="R_PASS" placeholder="Insira Sua Senha"/></br>
        <input class="text" type="password" id="R_PAS2" placeholder="Repita Sua Senha"/></br>
        <input class="text" type="text"  id="R_NICK" placeholder="Insira Seu Nick"/></br>
        <p>Sexo
            <select class="text" id="R_SEX">
                <option value="False">Feminino</option>
                <option value="True">Masculino</option>
            </select></p>
        <input class="submit" type="submit" value="Registrar!"/></br>
        <span id="reg_message"></span>
        <span id="reg_dialog" style="display:none;">Ao Clicar em "Aceito" , você concorda com os termos do <?php echo SV_NAME; ?>!</span>
    </div>
    <?php
} else {
    header( 'HTTP/1.0 404 Not Found' );
}
?>