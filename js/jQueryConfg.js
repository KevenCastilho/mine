$(document).ready(function(){
$(window).load(function(){
$('body:hidden').fadeIn(1500);
})
$('*').bind('contextmenu',function(){return false;});
$('#status h2').html('+'+SV_NAME);
function check_sv_status(){
$('#status p:first').CheckServerStatus();
$('#status p:first').next().GetTotalAccounts();
}
check_sv_status();
setInterval(function(){check_sv_status();},8000);
$('input[value="Jogar o DDTank"]').fancybox({
            'title'            : SV_NAME,
			'titlePosition'    : 'over',
            'width'            : '100%',
            'height'           : '100%',
            'autoDimensions'   : false,
            'overlayOpacity'   : 0.1,
			'padding'          : '10',
			'type'             : 'iframe',
			'beforeClose'      : function(){
			return confirm("Deseja Mesmo sair do Jogo?");
			}
            });

})