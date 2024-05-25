const img = document.querySelector('img')
const titulo = document.querySelector('.titulo')
const subtitulo = document.querySelector('.sub-titulo')
const bio = document.querySelector('.bio')
const qtdSeguidores = document.querySelector('.qtd-seguidores')
const qtdSeguindo = document.querySelector('.qtd-seguindo')
const qtdRepositorios = document.querySelector('.qtd-repositorios')

 const url = 'https://api.github.com/users/Mistzin07'
const getData = async() =>{ 
    const response =await fetch(url)
    const data =await response.json()
    img.setAttribute('src','data.avatar_url')
    console.log(data)
    titulo.innerHTML = data.name
    subtitulo.innerHTML = data.login
    bio.innerHTML = data.bio
    qtdSeguidores.innerHTML = data.followers
    qtdSeguindo.innerHTML = data.following
    qtdRepositorios.innerHTML = data.public_repos

}
getData()


