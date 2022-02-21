function verificar(){
    var data = new Date()
    var anoa = data.getFullYear()

    var anof = window.document.querySelector('input#ano')
    

    

    if (anof.value.length == 0 || anof.value > anoa){
        window.alert('Erro, Verifique e Tente Novamente')
    }else{
        var idade = anoa - anof.value

        var sexo = window.document.getElementsByName('sexo')
        var img = window.document.querySelector('img')
        var msg = window.document.querySelector('p')
        

        if(sexo[0].checked){
            genero = 'Homem'
        }else if(sexo[1].checked){
            genero = 'Mulher'
        }

        msg.innerText = `${genero} de ${idade} Anos`

        if (idade < 12 && genero == 'Homem'){
            img.src = 'img/01.jpg'
        }else if(idade < 12 && genero == 'Mulher'){
            img.src = 'img/02.jpg'
        }else if (idade > 11 && idade < 18 && genero == 'Homem'){
            img.src = 'img/03.jpg'
        }else if(idade > 11 && idade < 18 &&genero == 'Mulher'){
            img.src = 'img/04.jpg'
        }else if (idade > 17 && idade < 29 && genero == 'Homem'){
            img.src = 'img/05.jpg'
        }else if(idade > 17 && idade < 29 &&genero == 'Mulher'){
            img.src = 'img/06.jpg' 
        }else if (idade > 28 && idade < 50 && genero == 'Homem'){
            img.src = 'img/07.jpg'
        }else if(idade > 28 && idade < 50 &&genero == 'Mulher'){
            img.src = 'img/08.jpg'
        }else if (idade > 49 && idade < 70 && genero == 'Homem'){
            img.src = 'img/09.jpg'
        }else if(idade > 49 && idade < 70 &&genero == 'Mulher'){
            img.src = 'img/10.jpg'
        }else if (idade > 69 && genero == 'Homem'){
            img.src = 'img/11.jpg'
        }else if(idade > 69 && genero == 'Mulher'){
            img.src = 'img/12.jpg'
        }
    }



}