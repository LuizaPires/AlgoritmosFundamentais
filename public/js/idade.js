    var idade;
    
    var anoNascimento=1973;
    var mesNascimento = 9;
    var diaNascimento = 14;

    var data = new Date();

    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var str_data = dia + '/' + (mes+1) + '/' + ano;

    if ((mes + 1) < mesNascimento){
        idade = ano - anoNascimento - 1;
    } else if ((mes + 1) == mesNascimento){
        if (dia < diaNascimento){
            idade = ano - anoNascimento - 1;
        } else {
            idade = ano - anoNascimento;
        }
    } else if ((mes + 1)> mesNascimento){
        idade = ano - anoNascimento;
    }
        
document.write(idade);

    /*alert('Hoje é ' + str_data);*/
