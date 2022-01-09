$(document).ready(function(){

jQuery.fn.AddMSG = function(e,c,bt){
if(c == ''){
   c = 'black';
}
if(bt == ''){
$(this).fadeIn(250).css({'color':c}).html(e).delay(2550).hide('slow');
} else {
$(this).fadeIn(250,function(){$(bt).hide();}).css({'color':c}).html(e).delay(2550).hide('slow',function(){$(bt).show();});
}
}
jQuery.CheckIeVersion = function() {
   var rv = -1;
   if (navigator.appName == 'Microsoft Internet Explorer')
   {
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
         rv = parseFloat( RegExp.$1 );
   }
   return rv;
   }
jQuery.fn.LoadPage = function(settings){
	var ID = this;
	var config = {'Link':'','Title':'','AjaxData':'','AjaxType':''};
	if(settings){$.extend(config,settings);}
	return this.each(function(){
	$(this).empty().html('<img src="./style/images/ajax-loader.gif" style="float:left;">Carregando...');
$.ajax({
	url:config.Link,
	cache: false,
	type: config.AjaxType,
	data: config.AjaxData,
	timeout: 20000,
	success:function(html){
		$(ID).html(html);
		$(document).attr('title',SV_NAME+' '+TITLE_SEPARATOR+' '+config.Title);
	},
	 error : function(XMLHttpRequest, textStatus, errorThrown) {
	  if (textStatus == "timeout") {
		$(ID).html('Erro ao Carregar a Página! Verifique sua conexão e tente novamente mais tarde!')
		$(document).attr('title',SV_NAME+' '+TITLE_SEPARATOR+' ERRO');
		} else {
		$(ID).html('Erro ao Carregar a Página! Tente Novamente Mais Tarde')
		$(document).attr('title',SV_NAME+' '+TITLE_SEPARATOR+' ERRO');
		}
	}
})
})
}
jQuery.fn.IsValidEmail = function(){
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(this.val());
}
jQuery.fn.CheckServerStatus = function(){
var ID = this;
$(this).empty().html('<img src="./style/images/ajax-loader.gif" style="float:left;">Carregando...');
$.ajax({
  url: "includes/check.inc.php",
  cache: false,
  type: 'POST',
  data: {'ajax':'true','check_opt':'sv_status'},
  success: function(html){
  if(html == 'OFFLINE'){
  $(ID).html('Status do Servidor: <span style="color:Green;">Online</span>');
  } else if(html == 'ONLINE') {
  $(ID).html('Status do Servidor: <span style="color:red;">Offline</span>');
  } else {
 
  }
  },
  error: function(){
  
  }
});
}
jQuery.fn.GetTotalAccounts = function(){
var ID = this;
$(this).empty().html('<img src="./style/images/ajax-loader.gif" style="float:left;">Carregando...');
$.ajax({
  url: "includes/check.inc.php",
  cache: false,
  type: 'POST',
  data: {'ajax':'true','check_opt':'total_accounts'},
  success: function(html){
  if(html != 'fail'){
  $(ID).html('Total de Players: '+html);
  } else {
  $(ID).html('Status do Servidor:Erro ao Checar!');
  }
  },
  error: function(){
  $(ID).html('Status do Servidor:Erro ao Checar!');
  }
});
}
jQuery.fn.CreateXat = function(settings){
        var config = {
            'ID': '',
			'More': ''
        };
        if (settings){$.extend(config, settings);}
        return this.each(function(){
            if(config.ID == ''){
          $(this).html('Erro ao Carregar o XAT! Insira o ID');
        } else {
      $(this).html('<embed src="http://www.xatech.com/web_gear/chat/chat.swf" quality="high" bgcolor="#FFFFFF" width="565" height="325" name="chat" FlashVars="id='+config.ID+config.More+'" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" wmode="transparent" pluginspage="http://xat.com/update_flash.shtml" />');
}
        });
    };
})