function setCookie(cname,cvalue,exdays) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays*24*60*60*1000))
  let expires = "expires=" + d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
  let name = cname + "="
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return "";
}

function carregarInfoPerfil() {

  //pegar o que tem no cookie
  let PersonagemPerfil = getCookie('FichaPerfil')
  console.log('AQUI' + PersonagemPerfil)

  if(PersonagemPerfil != ''){ //So carregar se tiver algo

    PersonagemPerfil = JSON.parse(PersonagemPerfil); //Transformando a string em objeto

    //Pegar o endereço dos inputs
    let NomePersonagem = document.getElementById('nome')
    let OcupacaoPersonagem = document.getElementById('ocupacao')
    let IdadePersonagem = document.getElementById('Idade')
    let NivelPersonagem = document.getElementById('Nivel')
    let GeneroPersonagem = document.getElementById('Genero')
    let VidaAtualPersonagem = document.getElementById('vida-atual')
    let VidaMaximaPersonagem = document.getElementById('vida-maxima')
    let CDPersonagem = document.getElementById('cd')

    //Adicionando na tela os valores
    NomePersonagem.value = PersonagemPerfil.nome
    OcupacaoPersonagem.value = PersonagemPerfil.ocupacao
    IdadePersonagem.value = PersonagemPerfil.idade
    NivelPersonagem.value = PersonagemPerfil.nivel
    GeneroPersonagem.value = PersonagemPerfil.genero
    VidaAtualPersonagem.value = PersonagemPerfil.vida_atual
    VidaMaximaPersonagem.value = PersonagemPerfil.vida_max
    CDPersonagem.value = PersonagemPerfil.cd


    console.log('carregado com sucesso!')

  }

}

function salvarInfoPerfil() {

  //Pegando valores dos inputs
  let NomePersonagem = document.getElementById('nome').value
  let OcupacaoPersonagem = document.getElementById('ocupacao').value
  let IdadePersonagem = document.getElementById('Idade').value
  let NivelPersonagem = document.getElementById('Nivel').value
  let GeneroPersonagem = document.getElementById('Genero').value
  let VidaAtualPersonagem = document.getElementById('vida-atual').value
  let VidaMaximaPersonagem = document.getElementById('vida-maxima').value
  let CDPersonagem = document.getElementById('cd').value


  PersonagemPerfil = { //Colocando os valores em um objeto
      nome: NomePersonagem,
      ocupacao: OcupacaoPersonagem,
      idade: IdadePersonagem,
      nivel: NivelPersonagem,
      genero: GeneroPersonagem,
      vida_atual: VidaAtualPersonagem,
      vida_max: VidaMaximaPersonagem,
      cd: CDPersonagem
  } 
  // PersonagemPerfil['Genero'] = GeneroPersonagem
  // PersonagemPerfil['VidaAtual'] = VidaAtualPersonagem
  // PersonagemPerfil['VidaMaxima'] = VidaMaximaPersonagem
  // PersonagemPerfil['CD'] = CDPersonagem
  
  PersonagemPerfil = JSON.stringify(PersonagemPerfil);
  console.log(PersonagemPerfil)
  console.log(typeof(PersonagemPerfil))
  setCookie('FichaPerfil', PersonagemPerfil, 10)
  console.log('Salvo com sucesso')
  PersonagemPerfil = getCookie('FichaPerfil')
  console.log(PersonagemPerfil)

}

carregarInfoPerfil()
setInterval(() => {
  salvarInfoPerfil()
}, 500);
