$(document).ready(function(){
$('a[navid="Home"]').live('click',function(){
$('#center .painel').LoadPage({'Link':'./pages/home.php','Title':'Home','AjaxData':{'ajax':'true'},'AjaxType':'POST'});
})
$('a[navid="Download"]').live('click',function(){
$('#center .painel').LoadPage({'Link':'./pages/download.php','Title':'Download','AjaxData':{'ajax':'true'},'AjaxType':'POST'});
})
$('a[navid="1_5_2"]').fancybox({
            'title':    'Minecraft 1.5.2 JAVA EDITION',
			'titlePosition': 'outside',
			'href':     './1_5_2/',
            'width':    '100%',
            'height':   '100%',
            'autoDimensions': true,
            'overlayOpacity': 0.1,
			'padding' : '3',
			'type'  : 'iframe',
			'beforeClose' : function(){
			return confirm("Deseja Mesmo sair do Jogo?");
			}
            });
$('a[navid="mineroom"]').fancybox({
            'title':    'Mine Room | ADR Game Based',
			'titlePosition': 'outside',
			'href':     './mineroom/',
            'width':    '100%',
            'height':   '100%',
            'autoDimensions': true,
            'overlayOpacity': 0.1,
			'padding' : '3',
			'type'  : 'iframe',
			'beforeClose' : function(){
			return confirm("Deseja Mesmo sair do Jogo?");
			}
            });
$('a[navid="classicmine"]').fancybox({
            'title':    'Minecraft HTML5 | By Mojang & Micro$oft',
			'titlePosition': 'outside',
			'href':     'https://classic.minecraft.net/',
            'width':    '100%',
            'height':   '100%',
            'autoDimensions': true,
            'overlayOpacity': 0.1,
			'padding' : '3',
			'type'  : 'iframe',
			'beforeClose' : function(){
			return confirm("Deseja Mesmo sair do Jogo?");
			}
            });
$('a[navid="papercraft"]').fancybox({
            'title':    'Paper Craft | By scratch',
			'titlePosition': 'outside',
			'href':     'https://scratch.mit.edu/projects/10128407/embed?v1=&locale=pt_BR',
            'width':    '100%',
            'height':   '100%',
            'autoDimensions': true,
            'overlayOpacity': 0.1,
			'padding' : '3',
			'type'  : 'iframe',
			'beforeClose' : function(){
			return confirm("Deseja Mesmo sair do Jogo?");
			}
            });
$('a[navid="mineio"]').fancybox({
            'title':    'Minecraft HTML5 | By Unknown Author',
			'titlePosition': 'outside',
			'href':     'https://mine-craft.io/?v20190909174803=&locale=pt_BR',
            'width':    '100%',
            'height':   '100%',
            'autoDimensions': true,
            'overlayOpacity': 0.1,
			'padding' : '3',
			'type'  : 'iframe',
			'beforeClose' : function(){
			return confirm("Deseja Mesmo sair do Jogo?");
			}
            });
$('a[navid="grindcraft"]').fancybox({
            'title':    'GrindCraft | By Kizi',
			'titlePosition': 'outside',
			'href':     'https://html5.gamedistribution.com/92a81cc3a9da4cde89a418ae6bd4b4c4/?v1=&locale=pt_BR',
            'width':    '100%',
            'height':   '100%',
            'autoDimensions': true,
            'overlayOpacity': 0.1,
			'padding' : '3',
			'type'  : 'iframe',
			'beforeClose' : function(){
			return confirm("Deseja Mesmo sair do Jogo?");
			}
            });
$('a[navid="zombiecraft"]').fancybox({
            'title':    'Zombiecraft | By zombiecraft',
			'titlePosition': 'outside',
			'href':     'https://zombiecraft.io/',
            'width':    '100%',
            'height':   '100%',
            'autoDimensions': true,
            'overlayOpacity': 0.1,
			'padding' : '3',
			'type'  : 'iframe',
			'beforeClose' : function(){
			return confirm("Deseja Mesmo sair do Jogo?");
			}
            });
$('a[navid="Ranking"]').live('click',function(){
$('#center .painel').LoadPage({'Link':'./pages/ranking.php','Title':'Ranking','AjaxData':{'ajax':'true'},'AjaxType':'POST'});
})
})