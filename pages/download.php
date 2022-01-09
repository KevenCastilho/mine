<?php

if ( isset( $_POST['ajax'] ) ) {
    header( "Content-Type: text/html;  charset=ISO-8859-1", true );
    define( 's_page', true );
    include('../includes/config.inc.php');
    mysql_connect( HOST, USER, PASS );
    mysql_select_db( W_DB );
    $qry = mysql_query( $conn, 'SELECT * FROM DOWNLOADS ORDER BY ID' );
    if ( mysql_num_rows( $qry ) == 0 ) {
        echo 'Nenhum Download Disponivel';
    } else {
        while ( $ASOC = mysql_fetch_array( $qry ) ) {
            echo '<p>' . $ASOC["d_Title"] . '</p>';
            echo '<a href="' . $ASOC["d_Url"] . '" target="' . $ASOC["d_Target"] . '">Clique Aqui para Baixar!</a></br>';
        }
    }
} else {
    header( 'HTTP/1.0 404 Not Found' );
}
?>