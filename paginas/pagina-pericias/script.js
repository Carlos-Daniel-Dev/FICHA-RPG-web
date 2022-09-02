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
function carregarInfoPericias() {
  
      //Pegar o Cookie
    let PersonagemPericias = getCookie('FichaPericia')
    PersonagemPericias = JSON.parse(PersonagemPericias);

    //Pegar o endereço dos inputs
    let Eletronica = document.getElementById('eletronica')
    let Mecanica = document.getElementById('mecanica')
    let Presdigit = document.getElementById('presdigit')
    let Ciencia = document.getElementById('ciencia')
    let Pilotar = document.getElementById('pilotar')
    let Encontrar = document.getElementById('encontrar')
    let Lutar = document.getElementById('lutar')
    let Escutar = document.getElementById('escutar')
    let Intimidar = document.getElementById('intimidar')
    let Labia = document.getElementById('labia')
    let Lingnat = document.getElementById('lingnat')
    let Medicina = document.getElementById('medicina')
    let Arma = document.getElementById('arma')
    let Programar = document.getElementById('program')
  
    //Colocando os valores do cookie nos inputs
    Eletronica.value = PersonagemPericias.eletronica
    Mecanica.value = PersonagemPericias.mecanica
    Presdigit.value = PersonagemPericias.presdigit
    Ciencia.value = PersonagemPericias.ciencia
    Pilotar.value = PersonagemPericias.pilotar
    Encontrar.value = PersonagemPericias.encontrar
    Lutar.value = PersonagemPericias.lutar
    Escutar.value = PersonagemPericias.escutar
    Intimidar.value = PersonagemPericias.intimidar
    Labia.value = PersonagemPericias.labia
    Lingnat.value = PersonagemPericias.lignat
    Medicina.value = PersonagemPericias.medicina
    Arma.value = PersonagemPericias.arma
    Programar.value = PersonagemPericias.programar


    console.log(PersonagemPericias); //Mostrando o conteudo do cookie
  
}

function salvarInfoPericias() {

  //Pegando valores dos inputs
  let Eletronica = document.getElementById('eletronica').value
  let Mecanica = document.getElementById('mecanica').value
  let Presdigit = document.getElementById('presdigit').value
  let Ciencia = document.getElementById('ciencia').value
  let Pilotar = document.getElementById('pilotar').value
  let Encontrar = document.getElementById('encontrar').value
  let Lutar = document.getElementById('lutar').value
  let Escutar = document.getElementById('escutar').value
  let Intimidar = document.getElementById('intimidar').value
  let Labia = document.getElementById('labia').value
  let Lingnat = document.getElementById('lingnat').value
  let Medicina = document.getElementById('medicina').value
  let Arma = document.getElementById('arma').value
  let Programar = document.getElementById('program').value


  PersonagemPerfil = { //Colocando os valores em um objeto
      
    eletronica: Eletronica,
    mecanica: Mecanica,
    presdigit: Presdigit,
    ciencia: Ciencia,
    pilotar: Pilotar,
    encontrar: Encontrar,
    lutar: Lutar,
    escutar: Escutar,
    intimidar: Intimidar,
    labia: Labia,
    lignat: Lingnat,
    medicina: Medicina,
    arma: Arma,
    programar: Programar

  } 

      PersonagemPerfil = JSON.stringify(PersonagemPerfil);
      console.log(PersonagemPerfil)
      console.log(typeof(PersonagemPerfil))
      setCookie('FichaPericia', PersonagemPerfil, 10)
      console.log('Salvo com sucesso')
      PersonagemPerfil = getCookie('FichaPericia')
      console.log(PersonagemPerfil)

}

carregarInfoPericias()

setInterval(() => {
  salvarInfoPericias()
}, 500);
