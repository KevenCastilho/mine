<?php

if ( isset( $_POST['ajax'] ) ) {
    header( "Content-Type: text/html;  charset=ISO-8859-1", true );
    define( 's_page', true );
    include('../includes/config.inc.php');
    mysql_connect( HOST, USER, PASS );
    mysql_select_db( W_DB );
    $qry = mysql_query( 'SELECT * FROM news ORDER BY ID LIMIT 3' );
    if ( @mysql_num_rows( $qry ) == 0 ) {
        echo 'Nenhum News Disponivel';
    } else {
        while ( $ASOC = mysql_fetch_array( $qry ) ) {
            echo '<h2>' . $ASOC["m_Title"] . '</h2>';
            echo '<p>' . $ASOC["m_Message"] . '</p>';
            echo '<h6>Postado por ' . $ASOC["m_Actor"] . '</h6>';
        }
    }
} else {
    header( 'HTTP/1.0 404 Not Found' );
}
?>