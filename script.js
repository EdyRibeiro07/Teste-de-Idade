function verificar(){
    var data = new Date()
    var anoatual = data.getFullYear

    var ano = window.document.querySelector('input#ano')
    var sexo = window.document.querySelector('.lopc')
    var img = window.document.querySelector('img')
    var msg = window.document.querySelector('div.msg')


    if ((anoatual - ano) <= 11 && sexo == 'Masculino'){
        img.src = 'img/01.jpg'
        msg.textContent = `Identificamos uma Criança, Homem, de ${ano} anos`
    }else if ((anoatual - ano) <= 11 && sexo == 'Femenino'){
        img.src = 'img/02.jpg'
        msg.textContent = `Identificamos uma Criança, Mulher, de ${ano} anos`
    }
    
}

/*
0 - 11
12 - 16
17 - 28
29 - 49
50 - 69
70
*/