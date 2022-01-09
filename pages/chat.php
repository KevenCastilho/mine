<?php
if ( isset( $_POST['ajax'] ) ) {
    header( "Content-Type: text/html;  charset=ISO-8859-1", true );
    define( 's_page', true );
    include('../includes/config.inc.php');
    ?>
    <div id="TXAT"></div>
    <script>
        $(document).ready(function(){
            $('#TXAT').CreateXat({'ID':<?php echo XAT_ID ?>,'More':'<?php echo XAT_PGS ?>'});
        })
    </script>
    <?php
} else {
    header( 'HTTP/1.0 404 Not Found' );
}
?>