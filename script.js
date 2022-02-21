function verificar(){
    var data = new Date()
    var anoa = data.getFullYear()

    var anof = window.document.querySelector('input#ano')
    

    

    if (anof.value.length == 0 || anof.value > anoa){
        window.alert('Erro, Verifique e Tente Novamente')
    }else{
        var idade = anoa - anof.value

        var sexo = window.document.querySelector('input.lopc')
        var img = window.document.querySelector('img')
        var msg = window.document.querySelector('p')
        

        if(sexo[0] == True){

        }

        msg.innerText = ` de ${idade} Anos`
    }

}