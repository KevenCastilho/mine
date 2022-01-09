$(document).ready(function(){
function check_logged(){
$.ajax({
  url: "includes/check.inc.php",
  cache: false,
  type: 'POST',
  data: {'ajax':'true','check_opt':'session_exists'},
  success: function(html){
  if(html == 'true'){
 $.ajax({
  url: "includes/login.inc.php",
  cache: false,
  type: 'POST',
  data: {'ajax':'true'},
  success: function(shtml){
  if(shtml != ''){
  $('#login').html(shtml);
  } else {
  $('#login').AddMSG('Erro ao Logar! Tente Novamente Mais Tarde!','red');
  }
  },
  error: function(){
  $('#login').AddMSG('Erro ao Logar! Tente Novamente Mais Tarde!','red');
  }
});
  }else if(html == 'false'){
  $('#login').html('<div class="center"><h2>Login</h2>'+
'<input class="text" type="text" placeholder="Login" />'+
'<input class="text" type="password" placeholder="Senha" />'+
'<input class="submit" type="submit" value="Login!"/></br>'+
'<span id="message"></span></div>');
  } else {
  $('#login').AddMSG('Erro ao Checar! Tente Novamente Mais Tarde!','blue','input[value="Login!"]');
  }
  },
  error: function(){
  $('#login').AddMSG('Erro ao Checar! Tente Novamente Mais Tarde!','blue','input[value="Login!"]');
  }
});
}
check_logged();
function destroy_login_session(){
$.ajax({
  url: "includes/check.inc.php",
  cache: false,
  type: 'POST',
  data: {'ajax':'true','check_opt':'session_destroy'},
  success: function(html){
  if(html == 'true'){
  check_logged();
  }else if(html == 'false'){
  $('#login').AddMSG('Erro ao Checar! Tente Novamente Mais Tarde!','blue');

  } else {
  $('#login').AddMSG('Erro ao Checar! Tente Novamente Mais Tarde!','blue');
  }
  },
  error: function(){
  $('#login').AddMSG('Erro ao Checar! Tente Novamente Mais Tarde!','blue','input[value="Login!"]');
  }
});
}
check_logged();
$('input[value="Sair"]').live('click',function(){
destroy_login_session();
})
$('input[value="Trocar Senha"]').live('click',function(){
$('#center .painel').LoadPage({'Link':'./pages/cp.php','Title':'Trocar Senha','AjaxData':{'ajax':'true','cp_op':'ch_pass'},'AjaxType':'POST'});
})
$('input[value="Trocar Senha!"]').live('click',function(){
if($('#CH_OUSER').val() == ''){
$('#chpass_message').AddMSG('Digite seu Usuário!','red','input[value="Trocar Senha!"]');
}
else if($('#CH_OPASS').val() == ''){
$('#chpass_message').AddMSG('Digite sua Senha Atual!','red','input[value="Trocar Senha!"]');
}
else if($('#CH_NPASS').val() == ''){
$('#chpass_message').AddMSG('Digite sua Nova Senha!','red','input[value="Trocar Senha!"]');
}
else if($('#CH_RPASS').val() == ''){
$('#chpass_message').AddMSG('Repita sua Nova Senha!','red','input[value="Trocar Senha!"]');
}
else if($('#CH_OPASS').val().length < 3){
$('#chpass_message').AddMSG('A Senha Atual tem que ter no mínimo 3 Caracteres!','red','input[value="Trocar Senha!"]');
}
else if($('#CH_NPASS').val().length < 3){
$('#chpass_message').AddMSG('A Nova Senha tem que ter no mínimo 3 Caracteres!','red','input[value="Trocar Senha!"]');
}
else if($('#CH_OPASS').val().length > 16){
$('#chpass_message').AddMSG('A Senha Atual tem que ter no máximo 16 Caracteres!','red','input[value="Trocar Senha!"]');
}
else if($('#CH_NPASS').val().length > 16){
$('#chpass_message').AddMSG('A Nova Senha tem que ter no máximo 16 Caracteres!','red','input[value="Trocar Senha!"]');
}
else if($('#CH_RPASS').val() != $('#CH_NPASS').val()){
$('#chpass_message').AddMSG('Você não repitiu a nova senha!','red','input[value="Trocar Senha!"]');
}
else if($('#CH_OPASS').val() == $('#CH_NPASS').val()){
$('#chpass_message').AddMSG('A Nova Senha é igual a Senha Atual!','red','input[value="Trocar Senha!"]');
}
else {
$.ajax({
  url: "includes/cp.inc.php",
  cache: false,
  type: 'POST',
  data: {'ajax':'true','cp_opt':'ch_pass','O_PASS':$('#CH_OPASS').val(),'N_PASS':$('#CH_NPASS').val()},
  success: function(html){
  if(html == 'ch_pass_ok'){
  $('#chpass_message').AddMSG('Senha Trocada Com Sucesso!','green','input[value="Trocar Senha!"]');
  }else if(html == 'ch_pass_error_opass_fail'){
  $('#chpass_message').AddMSG('A Senha atual está incorreta!','red');
  } else if(html == 'ch_pass_error'){
  $('#chpass_message').AddMSG('Erro ao Trocar a Senha! Tente novamente mais tarde!','blue');
  } else if(html == 'ch_pass_null_error'){
  $('#chpass_message').AddMSG('Erro ao Pegar as Informações! Tente Novamente Mais Tarde!','blue');
  } else {
  $('#chpass_message').AddMSG('Erro ao Checar! Tente Novamente Mais Tarde!','blue');
  }
  },
  error: function(){
  $('#chpass_message').AddMSG('Erro ao Checar! Tente Novamente Mais Tarde!','blue','input[value="Trocar Senha!"]');
  }
});
}
})
$('input[value="Login!"]').live('click',function(){
if($('input[placeholder="Login"]').val() == ''){
$('#message').AddMSG('Digite seu Usuário!','red','input[value="Login!"]');
} 
else if($('input[placeholder="Senha"]').val() == ''){
$('#message').AddMSG('Digite Sua Senha!','red','input[value="Login!"]');
}
else if($('input[placeholder="Login"]').val().length < 3){
$('#message').AddMSG('O Usuário tem que ter no mínimo 3 Caracteres!','red','input[value="Login!"]');
}
else if($('input[placeholder="Senha"]').val().length < 3){
$('#message').AddMSG('A Senha tem que ter no mínimo 3 Caracteres!','red','input[value="Login!"]');
}
else if($('input[placeholder="Login"]').val().length > 16){
$('#message').AddMSG('O Usuário tem que ter no máximo 16 Caracteres!','red','input[value="Login!"]');
}
else if($('input[placeholder="Senha"]').val().length > 16){
$('#message').AddMSG('A Senha tem que ter no máximo 16 Caracteres!','red','input[value="Login!"]');
}
else {
$('#message').empty().html('<img src="./style/images/ajax-loader.gif" style="float:left;">Carregando...');
$.ajax({
  url: "includes/login.inc.php",
  cache: false,
  type: 'POST',
  data: {'ajax':'true','user':$('input[placeholder="Login"]').val(),'pass':$('input[placeholder="Senha"]').val()},
  success: function(html){
  if(html == 'acc_error'){
    $('#message').AddMSG('A Conta Solicitada Não Existe!','red','input[value="Login!"]');
	}
  else if(html == 'pass_error'){
  $('#message').AddMSG('Senha Incorreta!','red','input[value="Login!"]');
  } else if (html == 'login_ok') {
  $('#message').AddMSG('Login Feito com Sucesso!  Aguarde...','green',function(){
  check_logged();
  location.reload();
  })
  } else {
  $('#message').AddMSG('Erro ao Logar! Tente Novamente Mais Tarde!','red','input[value="Login!"]');
  }
  },
  error: function(){
  $('#message').AddMSG('Erro ao Logar! Tente Novamente Mais Tarde!','red','input[value="Login!"]');
  }
});
}
})
})