function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa =document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma sting sem nada:
    if (!campoPesquisa) {
        section.innerHTML = "<p> DIGITE ALGO </p>"
        return

    }

   campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados)  {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
       tags = dado.tags.toLocaleLowerCase()
        //se titulo includes campoPesquisa
        if ( titulo.includes(campoPesquisa)  ||descricao.includes(campoPesquisa) || tags.includes (campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="https://www.youtube.com/watch/v=cWGE9Gi0bB0" target="_blank">${dado.titulo}</a>
              </h2>
              <P class="descricao-meta">${dado.descricao}</P>
              <a href=${dado.link} target="_blank">SAIBA MAIS SOBRE A BANDA</a>
            </div>
          `;
        }

       if (!resultados){
            resultados = "<p> Nada foi encontrado <p>"
       }


      // Constrói o HTML para um item de resultado, incluindo o título, descrição e link
      
    }
  
    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultados;
  }