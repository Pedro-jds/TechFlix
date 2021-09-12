const btnPesquisa = document.getElementById('btn-pesquisar')

//função que verifica cada letra digitada e retorna os dados de filmes
$('#pesquisa').keyup(function () {
    //armazena o valor digitado no campo de pesquisa
    const filmesPesquisados = document.getElementById('pesquisa').value
    let exibirFilme = ''
    //verifica se o texto digitado no campo pesquisa tem pelo menos 3 caracteres antes de realizar uma requisição para a api
    if (filmesPesquisados.length > 2 === true) {
        //faz uma requisição para api omdb no modo busca que devolve uma array de 10 objetos de filmes
        $.getJSON(`http://www.omdbapi.com/?`, {s: filmesPesquisados, apikey: 'eef5e1d2',type:'movie' }, function (filmesInfo, statusText, xhr) {
            //verifica e o status da requisição é 200(ok)
            if (xhr.status === 200) {
                //compara se o valor devolvido não é undefined antes de executar o proximo passo
                if (filmesInfo.Search !== undefined) {
                    //percorre o array de objetos devolvidos pela requisição filmes info
                    $.each(filmesInfo.Search, function (index, value) {

                        $.getJSON(`https://www.omdbapi.com/?`,{apikey:'eef5e1d2',i:value.imdbID, },function(dadosFilmes){
                            if(dadosFilmes.Poster!=="N/A"){
                            exibirFilme += `<figure class="col-2">`
                            exibirFilme += `<img src="${dadosFilmes.Poster}" class="col-12" id="pic" alt="">`
                            exibirFilme += `<figcaption>${dadosFilmes.Title}</figcaption>`
                            exibirFilme += `</figure>`
                            console.log(dadosFilmes.Type)
                            $('.img-container').html(exibirFilme)
                            }
                        }
                        )
                    })
                }
            }
        });
    }
})


