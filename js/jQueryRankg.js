$(document).ready(function(){
$('#rank_search_btn').live('click',function(){
if($('#rank_search').val() != ''){
var target = $('#rank_table .'+$('#rank_search').val());
$('#rank_table td#player').hide();
target.show();
if(!target.is(':visible')){
$('#rank_table_message').AddMSG('Personagem N&atilde;o Encontrado!','red','');
$('#rank_table td#player').show();
}
} else {
$('#rank_table td#player').show();
}
})
});