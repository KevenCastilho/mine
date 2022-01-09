<?php

if ( isset( $_POST['ajax'] ) ) {
    session_save_path( '../sessions/' );
    session_start();
    $R_USER = addslashes( $_POST['user'] );
    $R_PASS = addslashes( $_POST['pass'] );
    $R_NICK = addslashes( $_POST['nick'] );
    $R_SEX = addslashes( $_POST['sex'] );
    define( 's_page', true );
    include('config.inc.php');
    mysql_connect( HOST, USER, PASS );
    mysql_select_db( D_DB );
    $qry = mysql_query( "SELECT Count(*) as UCNT FROM Sys_Users_Detail WHERE UserName = '$R_USER'" );
    $nqy = mysql_query( "SELECT Count(*) as ECNT FROM Sys_Users_Detail WHERE NickName = '$R_NICK'" );
    $UASOC = mysql_fetch_array( $qry );
    $NASOC = mysql_fetch_array( $nqy );
    if ( $R_USER == null || $R_PASS == null || $R_NICK == null ) {
        echo 'null_error';
    } else if ( $NASOC['ECNT'] != 0 ) {
        echo 'nick_error';
    } else if ( $UASOC['UCNT'] != 0 ) {
        echo 'acc_error';
    } else if ( $UASOC['UCNT'] == 0 || $EASOX['ECNT'] == 0 ) {
        if ( mysql_query( "INSERT INTO Sys_Users_Detail (UserName, Password, NickName, Sex, IsFirst,State,Repute,Money,Gold,GiftToken) VALUES('" . $R_USER . "','" . strtoupper( md5( $R_PASS ) ) . "','" . $R_NICK . "','" . $R_SEX . "',31,90,90,'" . START_MONEY . "','" . START_GOLD . "','" . START_FREE_MONEY . "')" ) ) {
            $query2 = mysql_query( "SELECT * FROM Sys_Users_Detail WHERE UserName = '$R_USER'" );
            $UserID = mysql_fetch_array( $query2 );
            if ( mysql_query( "INSERT INTO Sys_Users_Fight (UserID,Attack,Defence,Luck,Agility,Delay,Honor,Map,`Directory`,IsExist) VALUES('" . $UserID['UserID'] . "',100,48,100,18,1,1,1,1,'True')" ) ) {
                echo "reg_ok";
            } else
                echo 'reg_error';
        } else {
            echo 'reg_error';
        }
    } else {
        echo 'acc_error';
    }
} else {
    header( 'HTTP/1.0 404 Not Found' );
}
?>