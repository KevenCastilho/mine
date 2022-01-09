<?php header("Content-type: text/css"); ?>
@charset "utf-8";
/* CSS Document */
        * {
            margin: 0;
            padding: 0;
            font-family: Calibri, Arial, sans-serif;
			outline:none;
        }
        
        body {
		<?php
		if($_GET['bg_id'] != '' && $_GET['bg_ops'] != ''){
		?>
            background: url("images/bg_<?php echo $_GET['bg_id'];?>.jpg")<?php echo $_GET['bg_ops'] ?>;
		<?php } else {
        ?>
		background: url("images/bg_4.jpg")bottom right fixed;
		<?php } ?>
            display:none;
            background-size:100%
        }
        
        a {
            text-decoration: none;
            color: #032FAE;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        #nav {            
            background: #EDEDED;
            text-align: center;
            border-bottom: 3px #032FAE solid;
        }
        
        #nav li {
            display: inline-block;
            height: 20px;
            padding: 9px 0;
        }
        
        #nav a {
            margin: 0 6px;
            color: #262626;
            padding: 10px 16px 10px 16px; 
            font-weight: bold;
            font-size: 16px;
			cursor:pointer;
        }
        
        #nav a:hover {
            background: #DFDFDF;
            color: #032FAE; 
            border-bottom: 3px #95080B solid;
            text-decoration: none;
        }
        
        #logo {        
            height: 200px;
            width: 800px;
            margin: auto;
            background: url("images/logo.jpg") top center;
        }
        
        #content {
            width: 800px;
            margin: auto;     
        }
        
        #left {
            float: left;
            width: 190px;  
            padding: 10px;
        }
        
        #center {
            float: right;
            width: 570px; 
            padding: 10px;
        }
        
        div.painel {
            margin-bottom: 10px;
            background: #FFF;
            width: 100%;
            padding: 6px;
            border: 2px #333 solid;
            border-radius: 6px;
        }
        div.painel h2 {
            padding-left: 6px;
            font-size: 16px;
            color: #111;
            border-bottom: 1px #666 dashed;
            margin-bottom: 4px;
        }
        
        div.painel  p {
            font-size: 12px;
            padding-top: 4px;
        }
        
        div.painel h6 {
            margin: 6px 0;
            text-align: right;
        }
        
        div.center {
            text-align: center;
        }
		#message,#login {
			font-size:12px;
		}
        input,select,option {
            border: 0;
            background: #222; 
        }
        
        input.text,select.text,option.text {        
            border-radius: 6px;
            padding: 6px;
            margin-top: 4px;
            color: #EEE;
        }
        
        input.submit {  
            font-size: 12px;
            border-radius: 6px;
            padding: 4px 16px;
            margin-top: 6px;        
            font-weight: bold;
            cursor: pointer;
            color: #EEE;
        }
        
        input.submit:hover {
            background: #95080B;
        }
		input:disabled{
		   background:red;
		   }