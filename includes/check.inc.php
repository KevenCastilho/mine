<?php

if ( isset( $_POST['ajax'] ) ) {
    header( "Content-Type: text/html;  charset=ISO-8859-1", true );
    define( 's_page', true );
    include('config.inc.php');
    session_save_path( '../sessions/' );
    session_start();
    if ( $_POST['check_opt'] == 'session_exists' ) {
        if ( isset( $_SESSION['user'] ) ) {
            echo 'true';
        } else {
            echo 'false';
        }
    } else if ( $_POST['check_opt'] == 'sv_status' ) {
        $status = array ( "OFFLINE", "ONLINE" );
        $fp = @fsockopen( SV_IP, SV_PORT, $errno, $errstr, 2 );
        if ( !$fp ) {
            echo $status[0];
        } else {
            echo $status[1];
        }
    } else if ( $_POST['check_opt'] == 'total_accounts' ) {
        mysql_connect( HOST, USER, PASS );
        mysql_select_db( D_DB );
        $qry = mysql_query( "SELECT Count(*) AS SCNT FROM Sys_Users_Detail" );
        $ASOC = mysql_fetch_array( $qry );
        if ( $ASOC['SCNT'] != '' ) {
            echo $ASOC['SCNT'];
        } else {
            echo 'fail';
        }
    } else if ( $_POST['check_opt'] == 'session_destroy' ) {
        if ( isset( $_SESSION['user'] ) ) {
            session_destroy();
            echo 'true';
        } else {
            echo 'false';
        }
    }
} else {
    header( 'HTTP/1.0 404 Not Found' );
}
?>