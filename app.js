function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if(campoPesquisa.trim().length === 0) {
        section.innerHTML = "<p class='nao-encontrado'>Nada foi encontrado. Você precisa digitar o nome ou gênero de um jogo</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `            
            <div class="item-resultado">
                <img src="${dado.img}">
                <h2>
                    <a href = ${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">
                    <span class="destaque">Sobre o jogo: </span> ${dado.descricao}
                </p>
                <p class="descricao-meta">
                    <span class="destaque">Gêneros: </span> ${dado.tags}
                </p>
                <a href = ${dado.link} target="_blank">Mais informações</a>
            </div>
`
        }
    }

    if(!resultados) {
        resultados = "<p class='resultados'>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados
}

