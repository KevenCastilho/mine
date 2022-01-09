<?php
if ( isset( $_POST['ajax'] ) ) {
    header( "Content-Type: text/html;  charset=ISO-8859-1", true );
    session_save_path( '../sessions/' );
    session_start();
    define( 's_page', true );
    include('config.inc.php');
    if ( !isset( $_SESSION['user'] ) ) {
        $L_USER = addslashes( $_POST['user'] );
        $L_PASS = addslashes( $_POST['pass'] );
        mysql_connect( HOST, USER, PASS );
        mysql_select_db( D_DB );
        $qry = mysql_query( "SELECT * FROM Sys_Users_Detail WHERE UserName = '$L_USER'" );
        echo mysql_error();
        $ASOC = @mysql_fetch_array( $qry );
        if ( @mysql_num_rows( $qry ) == 0 ) {
            echo 'acc_error';
        } else if ( $ASOC['Password'] != strtoupper( md5( $L_PASS ) ) ) {
            echo 'pass_error';
        } else {
            echo 'login_ok';
            $_SESSION['user'] = $L_USER;
            $_SESSION['pass'] = strtoupper( md5( $L_PASS ) );
            $_SESSION['nick'] = $ASOC['NickName'];
        }
    } else if ( isset( $_SESSION['user'] ) ) {
        echo '<div class="center">';
        echo '<h2>Bem Vindo ' . $_SESSION['nick'] . '</h2>';
        echo '<input class="submit" type="submit" value="Jogar o DDTank" href="' . sprintf( GAME_LINK, $_SESSION["user"], $_SESSION["pass"] ) . '"/></br>';
        echo '<input class="submit" type="submit" value="Trocar Senha"/></br>';
        echo '<input class="submit" type="submit" value="Sair"/></br>';
        echo '</div>';
    }
} else {
    header( 'HTTP/1.0 404 Not Found' );
}