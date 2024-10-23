class telaprincipal {
    constructor() {

    }

    static alimentaTabela(projetos) {
        let contador = 1;
        let resultado = "";
        let imagemStatus = "";
        let nomeComURL = "";
        for (const projeto of projetos) {
            if (this.naoExisteCampoVazioProjeto(projeto)) {
                imagemStatus = this.incluirImagem(projeto.status);
                nomeComURL = this.incluirNomeProjeto(projeto);
                resultado += "<tr>" +
                    "<td>" + contador + "</td>" +
                    "<td id='projeto" + contador + "'>" + nomeComURL + " </td>" +
                    "<td id='status" + contador + "' class = status >" + imagemStatus + " </td>" +
                    "</tr>"
                contador++;
            }
        }
        return resultado;
    }
    static incluirImagem(statusProjeto) {
        let status = "";
        if (statusProjeto === "OK") {
            status = "<img src=Img/OK.png  class = 'status'/>"
        } else {
            status = "<img src='Img/NOK.png' class = 'status'/>"
        }
        return status
    }
    static incluirNomeProjeto(projeto) {
        let nome = projeto.nome;
        let link = projeto.link;
        let resposta = "";
        if (nome != "") {
            resposta = "<a href=" + link + " target ='_blank'>" + nome + "</a>"
        }

        return resposta;
    }
   static naoExisteCampoVazioProjeto(projeto) {
        return projeto.name != "" && projeto.link != "" && projeto.status != ""
    }
}

let projetos = [
    { nome: "Criando sua Primeira Landing Page com HTML e CSS", link: "http:www.google.com", status: "NOK" },
    { nome: "", link: "", status: "OK" },
    { nome: "", link: "", status: "NOK" }
]

function tabela() {
    let listaHTML = document.getElementById("listaProjetos");
    let listaJS = telaprincipal.alimentaTabela(projetos);
    listaHTML.innerHTML += listaJS;

}