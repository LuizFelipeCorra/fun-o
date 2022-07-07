//1 - crie uma função que exiba uma mensagem no console


function msg(){
    console.log("Olá, boa noite.")
}

msg()


//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function myName(nome){
    console.log('Bem vindo(a), ${nome}!')
}

myName("Luiz Felipe")


//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function about(name,age,music){
    console.log('Meu nome é ${name}, eu tenho${age} anos e amo ouvir ${music}')
}
about("Luiz Felipe", 26,"Samba")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function filme(vingadores, batman,){
    console.log('Meu filme favorito é: ${vingadores} e o secundário é: ${batman}.')
}

esportes("vingadores", "batman")