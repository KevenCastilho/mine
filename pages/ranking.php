<?php

if ( isset( $_POST['ajax'] ) ) {
    header( "Content-Type: text/html;  charset=ISO-8859-1", true );
    define( 's_page', true );
    include('../includes/config.inc.php');
    mysql_connect( HOST, USER, PASS );
    mysql_select_db( D_DB );

    //Get Gender
    function getgender( $genderid ) {
        if ( $genderid == true ) {
            return "<img src='./style/images/male.png' alt='Male' title='Masculino' />";
        } else if ( $genderid == false ) {
            return "<img src='./style/images/female.png' alt='Female' title='Feminino' />";
        }
    }

    function getlevel( $lvl ) {
        $i = 1;
        while ( $i <= 51 ) {
            if ( $lvl == $i ) {
                return "<img src='./style/images/levels/" . $i . ".png' height=\"25\"/>";
            }
            $i++;
        }
    }

    echo '<div align="center">';
    echo '<p>Procurar Personagem:  <input class="text" type="text" id="rank_search" width="5%"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" class="submit" value="Procurar" id="rank_search_btn"/></p>';
    echo '<table width="65%" id="rank_table">';
    echo '<td width="5%"  style="padding-left:12px;"><b>Rank';
    echo '<td width="25%"  style="padding-left:12px;"><b>Nome';
    echo '<td width="25%"  style="padding-left:12px;"><b>Nivel';
    echo '<td width="25%"  style="padding-left:12px;"><b>Sexo';
    echo'</tr>';
    $qry = mysql_query( $conn, "SELECT * FROM Sys_Users_Detail  WHERE IsStaffMember = 0 AND NickName <> '' ORDER BY Grade DESC, OnlineTime DESC, Gold DESC" );
    $rank = 1;
    while ( $consulta = mysql_fetch_array( $qry ) ) {
        echo '<td id="player" class="' . $consulta['NickName'] . '" style="padding-left:12px;">' . $rank . '</td>';
        echo '<td id="player" class="' . $consulta['NickName'] . '" style="padding-left:12px;"><a>' . $consulta['NickName'] . '</a></td>';
        echo '<td id="player" class="' . $consulta['NickName'] . '" style="padding-left:12px;">' . getlevel( $consulta['Grade'] ) . '</td>';
        echo '<td id="player" class="' . $consulta['NickName'] . '" style="padding-left:12px;">' . getgender( $consulta['Sex'] ) . '</td></tr><tr>';
        $rank++;
    }
    echo '<span id="rank_table_message"></span>';
    echo '</table>';
} else {
    header( 'HTTP/1.0 404 Not Found' );
}
?>