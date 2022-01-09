<?php

if ( isset( $_POST['ajax'] ) ) {
    define( 's_page', true );
    include( 'config.inc.php' );
    session_save_path( '../sessions/' );
    session_start();
    if ( $_POST['cp_opt'] == 'ch_pass' ) {
        $CH_HUSER = addslashes( $_SESSION['user'] );
        $CH_OPASS = strtoupper( md5( addslashes( $_POST['O_PASS'] ) ) );
        $CH_NPASS = strtoupper( md5( addslashes( $_POST['N_PASS'] ) ) );
        mysql_connect( HOST, USER, PASS );
        mysql_select_db( D_DB  );
        $qry = mysql_query( "SELECT * FROM Sys_Users_Detail WHERE UserName = '$CH_HUSER'" );
        $ASOC = mysql_fetch_array( $qry );
        if ( empty( $CH_OPASS ) || empty( $CH_NPASS ) ) {
            echo 'ch_pass_null_error';
        } else if ( $ASOC['Password'] != $CH_OPASS ) {
            echo 'ch_pass_error_opass_fail';
        } else if ( mysql_query( "UPDATE Sys_Users_Detail SET Password = '$CH_NPASS' WHERE UserName = '$CH_HUSER'" ) ) {
            echo 'ch_pass_ok';
        } else {
            echo 'ch_pass_error';
        }
    } else {
        header( 'HTTP/1.0 404 Not Found' );
    }
} else {
    header( 'HTTP/1.0 404 Not Found' );
}
?>