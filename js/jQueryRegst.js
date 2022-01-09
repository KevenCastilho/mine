$(document).ready(function(){
$('input[value="Registrar!"]').live('click',function(){
if($('#R_USER').val() == ''){
$('#reg_message').AddMSG('Insira seu Usuario!','red','input[value="Registrar!"]');
} 
else if($('#R_PASS').val() == ''){
$('#reg_message').AddMSG('Insira Sua Senha!','red','input[value="Registrar!"]');
}
else if($('#R_NICK').val() == ''){
$('#reg_message').AddMSG('Insira seu Nick!','red','input[value="Registrar!"]');
}
else if($('#R_USER').val().length < 3){
$('#reg_message').AddMSG('O Usuario tem que ter no mínimo 3 Caracteres!','red','input[value="Registrar!"]');
}
else if($('#R_PASS').val().length < 3){
$('#reg_message').AddMSG('A Senha tem que ter no mínimo 3 Caracteres!','red','input[value="Registrar!"]');
}
else if($('#R_USER').val().length > 16){
$('#reg_message').AddMSG('O Usuario tem que ter no máximo 16 Caracteres!','red','input[value="Registrar!"]');
}
else if($('#R_PASS').val().length > 16){
$('#reg_message').AddMsg('A Senha tem que ter no máximo 16 Caracteres!','red','input[value="Registrar!"]');
}
else if($('#R_NICK').val().length < 3){
$('#reg_message').AddMSG('O Nickname tem que ter no mínimo 3 Caracteres!','red','input[value="Registrar!"]');
}
else if($('#R_NICK').val().length > 16){
$('#reg_message').AddMSG('O NickName tem que ter no máximo 16 Caracteres!','red','input[value="Registrar!"]');
}
else if($('#R_PASS').val() != $('#R_PAS2').val()){
$('#reg_message').AddMSG('As Senhas não estão iguais!','red','input[value="Registrar!"]');
}
else {
$( "#dialog:ui-dialog" ).dialog( "destroy" );
$('#reg_dialog').dialog({show: "blind",hide: "explode",resizable: false,modal: true,
buttons: {"Aceito": function() {
$('#reg_message').empty().html('<img src="./style/images/ajax-loader.gif" style="float:left;">Carregando...');
$.ajax({
  url: "includes/registry.inc.php",
  cache: false,
  type: 'POST',
  data: {'ajax':'true','user':$('#R_USER').val(),'pass':$('#R_PASS').val(),'nick':$('#R_NICK').val(),'sex':$('#R_SEX option:selected').val()},
  success: function(html){
  if(html == 'reg_ok'){
  $('#reg_message').AddMSG('Registro feito com Sucesso! Bem Vindo '+$('#R_NICK').val(),'green','input[value="Registrar!"]');
  } else if(html == 'null_error'){
  $('#reg_message').AddMSG('Você deixou algo em Branco!','red','input[value="Registrar!"]');
  } else if(html == 'acc_error'){
  $('#reg_message').AddMSG('O Usuário Já Existe','red','input[value="Registrar!"]');
  } else if(html == 'nick_error'){
  $('#reg_message').AddMSG('O NickName Já existe!','red','input[value="Registrar!"]');
  } else if(html == 'reg_error'){
  $('#reg_message').AddMSG('Erro ao Registrar! Tente Novamente Mais Tarde','blue');
  } else {
  $('#reg_message').AddMSG('Erro ao Registrar! Tente Novamente Mais Tarde','blue');
  }
  },
  error: function(){
  $('#reg_message').AddMSG('Erro ao Registrar! Tente Novamente Mais Tarde','blue');
  }})
  $( this ).dialog( "close" );},"Discordo": function() {$( this ).dialog( "close" );}}}).draggable('disable').delay(3000).dialog('open');
  }
})
})  
  