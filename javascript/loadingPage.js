const contaLogada = localStorage.getItem('contaLogada');
  if (contaLogada === '1') {
    const nomeUsuario = localStorage.getItem('nomeUsuario'); 
    const fotoUsuario = localStorage.getItem('fotoUsuario'); 
    document.getElementById('loadingPage-Title2').innerText = nomeUsuario; 
    document.getElementById('profileImage-LoadingPage').src = fotoUsuario; 
  } else {
    document.getElementById('loadingPage-Title1').innerText = ' ';
    document.getElementById('profileImage-LoadingPage').src = 'images/profile-user.png'; 
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


delay(1000).then(() => {
  document.getElementById('loadingIcon').style.opacity='100%'
});

delay(6000).then(() => {

  document.getElementById('loadingIcon').style.opacity='0%'

  delay(2200).then(() => {window.location.href='paginaInicial.html'})

});


