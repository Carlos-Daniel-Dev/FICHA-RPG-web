function carregarInfoPerfil() {

  // Pegar informaçoes do localStorage
  let PersonagemPerfil = localStorage.getItem("FichaPerfil")
  if (PersonagemPerfil != null){ //So carregar se tiver algo

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

    
    // Adicionando na tela os valores
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
  // setCookie('FichaPerfil', PersonagemPerfil, 360)
  // PersonagemPerfil = getCookie('FichaPerfil')
  console.log(PersonagemPerfil)
  localStorage.setItem("FichaPerfil", PersonagemPerfil)

}

carregarInfoPerfil()
setInterval(() => {
  salvarInfoPerfil()
}, 500);
