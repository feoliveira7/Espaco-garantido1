let temaClaro = true

function alternarTemaMobile(){
    if (temaClaro) {

    
        document.body.style.backgroundColor='#252b35'
        document.getElementById('header-mobile').style.backgroundColor='#272f3b';
        document.getElementById('divConta-mobile').style.backgroundColor='#272f3b';
        document.getElementById('bloco1').style.backgroundColor='#2b3441';
        document.getElementById('bloco2').style.backgroundColor='#2b3441';
        document.getElementById('imgHeadBloco1').src='images/calendarWhite.png';
        document.getElementById('imgBloco2').src='images/historyWhite.png';
        document.getElementById('titleBloco1').style.color='white';
        document.getElementById('dateBloco1').style.color='white';
        document.getElementById('txtBloco2').style.color='white';
  
        //css do menu slider
        document.getElementById('fundoBotoes').style.backgroundColor='#374150';
        
        document.getElementById('fundoPerfil').style.border='2px solid #29313d';
        document.getElementById('perfil-Button').style.color='rgb(212, 212, 212)';

        document.getElementById('fundoConfiguracoes').style.border='2px solid #29313d';
        document.getElementById('configuracoes-Button').style.color='rgb(212, 212, 212)';

        document.getElementById('fundoTema').style.border='2px solid #29313d';
        document.getElementById('tema-Button').style.color='rgb(212, 212, 212)';
        document.getElementById('tema-Button').innerHTML='Tema: Escuro';

        document.getElementById('fundoSairConta').style.border='2px solid #29313d';
        document.getElementById('exitConta-Button').style.color='rgb(212, 212, 212)';
        document.getElementById('exitConta-Image').src='images/exitWhite.png';


      } else {

        document.body.style.backgroundColor='white'
        document.getElementById('header-mobile').style.backgroundColor='#1c77ff';
        document.getElementById('divConta-mobile').style.backgroundColor='#1c77ff';
        document.getElementById('bloco1').style.backgroundColor='rgb(255, 255, 255)';
        document.getElementById('bloco2').style.backgroundColor='rgb(255, 255, 255)';
        document.getElementById('imgHeadBloco1').src='images/calendarBlack.png';
        document.getElementById('imgBloco2').src='images/historyBlack.png';
        document.getElementById('titleBloco1').style.color='rgb(68, 68, 68)';
        document.getElementById('dateBloco1').style.color='rgb(68, 68, 68)';
        document.getElementById('txtBloco2').style.color='rgb(68, 68, 68)';
  
        //css do menu slider
        document.getElementById('fundoBotoes').style.backgroundColor='#ffffff';
        
        document.getElementById('fundoPerfil').style.border='2px solid rgb(241, 241, 241)';
        document.getElementById('perfil-Button').style.color='rgb(36, 36, 36)';

        document.getElementById('fundoConfiguracoes').style.border='2px solid rgb(241, 241, 241)';
        document.getElementById('configuracoes-Button').style.color='rgb(36, 36, 36)';

        document.getElementById('fundoTema').style.border='2px solid rgb(241, 241, 241)';
        document.getElementById('tema-Button').style.color='rgb(36, 36, 36)';
        document.getElementById('tema-Button').innerHTML='Tema: Claro';

        document.getElementById('fundoSairConta').style.border='2px solid rgb(241, 241, 241)';
        document.getElementById('exitConta-Button').style.color='rgb(36, 36, 36)';
        document.getElementById('exitConta-Image').src='images/exitBlack.png';
        

      }
      temaClaro = !temaClaro;
      localStorage.setItem('temaClaro', JSON.stringify(temaClaro));
}


function verificarTema(){
  const temaClaro = JSON.parse(localStorage.getItem('temaClaro'));

  if(temaClaro){

    document.body.style.backgroundColor='#252b35'
        document.getElementById('header-mobile').style.backgroundColor='#272f3b';
        document.getElementById('divConta-mobile').style.backgroundColor='#272f3b';
        document.getElementById('bloco1').style.backgroundColor='#2b3441';
        document.getElementById('bloco2').style.backgroundColor='#2b3441';
        document.getElementById('imgHeadBloco1').src='images/calendarWhite.png';
        document.getElementById('imgBloco2').src='images/historyWhite.png';
        document.getElementById('titleBloco1').style.color='white';
        document.getElementById('dateBloco1').style.color='white';
        document.getElementById('txtBloco2').style.color='white';
  
        //css do menu slider
        document.getElementById('fundoBotoes').style.backgroundColor='#374150';
        
        document.getElementById('fundoPerfil').style.border='2px solid #29313d';
        document.getElementById('perfil-Button').style.color='rgb(212, 212, 212)';

        document.getElementById('fundoConfiguracoes').style.border='2px solid #29313d';
        document.getElementById('configuracoes-Button').style.color='rgb(212, 212, 212)';

        document.getElementById('fundoTema').style.border='2px solid #29313d';
        document.getElementById('tema-Button').style.color='rgb(212, 212, 212)';
        document.getElementById('tema-Button').innerHTML='Tema: Escuro';

        document.getElementById('fundoSairConta').style.border='2px solid #29313d';
        document.getElementById('exitConta-Button').style.color='rgb(212, 212, 212)';
        document.getElementById('exitConta-Image').src='images/exitWhite.png';

  }else{
    document.body.style.backgroundColor='white'
        document.getElementById('header-mobile').style.backgroundColor='#1c77ff';
        document.getElementById('divConta-mobile').style.backgroundColor='#1c77ff';
        document.getElementById('bloco1').style.backgroundColor='rgb(255, 255, 255)';
        document.getElementById('bloco2').style.backgroundColor='rgb(255, 255, 255)';
        document.getElementById('imgHeadBloco1').src='images/calendarBlack.png';
        document.getElementById('imgBloco2').src='images/historyBlack.png';
        document.getElementById('titleBloco1').style.color='rgb(68, 68, 68)';
        document.getElementById('dateBloco1').style.color='rgb(68, 68, 68)';
        document.getElementById('txtBloco2').style.color='rgb(68, 68, 68)';
  
        //css do menu slider
        document.getElementById('fundoBotoes').style.backgroundColor='#ffffff';
        
        document.getElementById('fundoPerfil').style.border='2px solid rgb(241, 241, 241)';
        document.getElementById('perfil-Button').style.color='rgb(36, 36, 36)';

        document.getElementById('fundoConfiguracoes').style.border='2px solid rgb(241, 241, 241)';
        document.getElementById('configuracoes-Button').style.color='rgb(36, 36, 36)';

        document.getElementById('fundoTema').style.border='2px solid rgb(241, 241, 241)';
        document.getElementById('tema-Button').style.color='rgb(36, 36, 36)';
        document.getElementById('tema-Button').innerHTML='Tema: Claro';

        document.getElementById('fundoSairConta').style.border='2px solid rgb(241, 241, 241)';
        document.getElementById('exitConta-Button').style.color='rgb(36, 36, 36)';
        document.getElementById('exitConta-Image').src='images/exitBlack.png';
  }
}


setInterval(verificarTema, 10);
