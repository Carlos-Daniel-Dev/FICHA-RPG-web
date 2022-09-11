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
  let PersonagemMochila = getCookie('FichaMochila')
  PersonagemMochila = JSON.parse(PersonagemMochila); //Transformando a string em objeto

    //Pegar o endereço dos inputs
    let Item1 = document.getElementById('item1')
    let Item2 = document.getElementById('item2')
    let Item3 = document.getElementById('item3')
    let Item4 = document.getElementById('item4')
    let Item5 = document.getElementById('item5')
    let Item6 = document.getElementById('item6')
    let Item7 = document.getElementById('item7')
    let Item8 = document.getElementById('item8')

    //Adicionando na tela os valores
    Item1 = document.getElementById('item1').value = PersonagemMochila.item1
    Item2 = document.getElementById('item2').value = PersonagemMochila.item2
    Item3 = document.getElementById('item3').value = PersonagemMochila.item3
    Item4 = document.getElementById('item4').value = PersonagemMochila.item4
    Item5 = document.getElementById('item5').value = PersonagemMochila.item5
    Item6 = document.getElementById('item6').value = PersonagemMochila.item6
    Item7 = document.getElementById('item7').value = PersonagemMochila.item7
    Item8 = document.getElementById('item8').value = PersonagemMochila.item8


    console.log('carregado com sucesso!')

}

function salvarInfoMochila() {

    //Pegando valores dos inputs
    let Item1 = document.getElementById('item1').value
    let Item2 = document.getElementById('item2').value
    let Item3 = document.getElementById('item3').value
    let Item4 = document.getElementById('item4').value
    let Item5 = document.getElementById('item5').value
    let Item6 = document.getElementById('item6').value
    let Item7 = document.getElementById('item7').value
    let Item8 = document.getElementById('item8').value


    PersonagemMochila = { //Colocando os valores em um objeto
        
        item1: Item1,
        item2: Item2,
        item3: Item3,
        item4: Item4,
        item5: Item5,
        item6: Item6,
        item7: Item7,
        item8: Item8

    } 

    PersonagemMochila = JSON.stringify(PersonagemMochila);
    setCookie('FichaMochila', PersonagemMochila, 360)
    PersonagemMochila = getCookie('FichaMochila')
  
}

carregarInfoPerfil()

//Salvar automaticamente
setInterval(() => {
  salvarInfoMochila()
}, 500);
