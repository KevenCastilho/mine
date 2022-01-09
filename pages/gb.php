<style>
body {
	padding:0px;
	margin:0px;
	 overflow: hidden;
}
</style>
<?php

$pt1 = "<div>
    <div id='emulator'>
        <p>To play this game, please, download the latest Flash player!</p>
        <br>
        <a href='http://www.adobe.com/go/getflashplayer'>
            <img src='//www.adobe.com/images/shared/download_buttons/get_adobe_flash_player.png' alt='Get Adobe Flash player'/>
        </a>
    </div>
</div>

<script src='//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
<script src='//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js'></script>

<script type='text/javascript'>

    var resizeOwnEmulator = function(width, height)
    {
        var emulator = $('#emulator');
        emulator.css('width', width);
        emulator.css('height', height);
    }

    $(function()
    {
        function embed()
        {
            var emulator = $('#emulator');
            if(emulator)
            {
                var flashvars = 
                {";
$pt2= "system : 'gb',";
$pt3 ="url : '../emulador/rom/gb/ki.gb";
$pt4 = "'
                };
                var params = {};
                var attributes = {};

                params.allowscriptaccess = 'sameDomain';
                params.allowFullScreen = 'true';
                params.allowFullScreenInteractive = 'true';

                swfobject.embedSWF('../emulador/Nesbox.swf', 'emulator', '640', '480', '11.2.0', 'flash/expressInstall.swf', flashvars, params, attributes);
            }
        }

        embed();
    });

</script>";
echo "$pt1$pt2$pt3$pt4";
?>