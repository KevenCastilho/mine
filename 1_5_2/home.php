<?php

?>
<html>
	<head>
		<title>Minecraft</title>
		<script src="https://cjrtnc.leaningtech.com/1.4/loader.js"></script>
		<style>
		applet {
		position:fixed;
		left:0px;
		top:0px;
		width:100%;
		height:100%;
		}
		@import url('https://fonts.googleapis.com/css?family=Press+Start+2P|VT323&display=swap');
		body {
		font-family: 'VT323', monospace;
		color:#FFFFFF;
		background-image:url('img/bg.jpg');
		}
		</style>
	</head>
	<body>
		<applet code="net.minecraft.Launcher" archive="./includes/MinecraftLauncher.jar" >
			<param name="userName" value="<?php echo $_POST['nick'];?>">
			<param name="separate_jvm" value="true">
			<param name="java_arguments" value="-Dsun.java2d.noddraw=true -Dsun.awt.noerasebackground=true -Dsun.java2d.d3d=false -Dsun.java2d.opengl=false -Dsun.java2d.pmoffscreen=false -Xms1024M -Xmx1024M">
			<param name="downloadTicket" value="">
			<param name="sessionId" value="">
			<param name="IsDemo" value="<?php echo $_POST['demo'];?>">
		</applet>
	</body>
</html>