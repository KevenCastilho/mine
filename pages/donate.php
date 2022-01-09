<?php

if ( isset( $_POST['ajax'] ) ) {
    header( "Content-Type: text/html;  charset=ISO-8859-1", true );
    define( 's_page', true );
    include('../includes/config.inc.php');
    echo '<p>' . DONATE_TEXT . '</p>';
} else {
    header( 'HTTP/1.0 404 Not Found' );
}
?>