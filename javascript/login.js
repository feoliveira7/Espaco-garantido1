let contaLogada = 0;

const contasRegistradas = [
    { login: '0001', password: 'bruno', name: 'Bruno Messias', cargo: 'Professor', foto: 'images/BrunoMessias.png'},
    { login: '0002', password: 'silas', name: 'Silas Bastianelli', cargo: 'Professor', foto: 'images/SilasBastianelli.jpeg'},
    { login: 'admin', password: 'adm123', name: 'Administrador', cargo: 'ADM', foto: 'images/profile-user.png'}
];

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

 function loginDesktop() {
    const userInput = document.getElementById('usernameInput').value;
    const passInput = document.getElementById('passwordInput').value;

    const contaValida = contasRegistradas.find(user => user.login === userInput && user.password === passInput);

    if (contaValida) {
        contaLogada = 1;

        localStorage.setItem('contaLogada', contaLogada);
        localStorage.setItem('nomeUsuario', contaValida.name);
        localStorage.setItem('fotoUsuario', contaValida.foto);
        console.log(contaLogada);

        window.location.href='paginaInicial.html'

      } else {
        contaLogada = 0;
        localStorage.setItem('contaLogada', contaLogada);
        console.log(contaLogada);
      }
}


function loginMobile() {
  const userInput = document.getElementById('usernameInput').value;
  const passInput = document.getElementById('passwordInput').value;

  const contaValida = contasRegistradas.find(user => user.login === userInput && user.password === passInput);


  if (contaValida) {
    
    document.getElementById('loginButtonText-Mobile').style.display='none'
    document.getElementById('loadingIcon-Mobile').style.display='flex'
    document.getElementById('warnErro-Mobile').style.display='none'

    delay(1900).then(() => {

      // alert('Login feito pelo APP');
      contaLogada = 1;
      localStorage.setItem('contaLogada', contaLogada);
      localStorage.setItem('nomeUsuario', contaValida.name);
      localStorage.setItem('fotoUsuario', contaValida.foto);
      console.log(contaLogada);

      window.location.href='loadingPage.html'

    });



    } else {

      document.getElementById('loginButtonText-Mobile').style.display='none'
      document.getElementById('loadingIcon-Mobile').style.display='flex'


      delay(2000).then(() => {

        contaLogada = 0;
        localStorage.setItem('contaLogada', contaLogada);
        console.log(contaLogada);

        document.getElementById('loginButtonText-Mobile').style.display='flex'
        document.getElementById('loadingIcon-Mobile').style.display='none'
        document.getElementById('warnErro-Mobile').style.display='flex'
  
      });



    }
}
