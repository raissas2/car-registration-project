console.log("o JS está linkado!");

function verificarInputs() {
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imglink").value;

    console.log({ titulo });
    console.log({ preco });
    console.log({ descricao });
    console.log({ plataforma });
    console.log({ imgLink });

    if (titulo == "" || preco == "" || descricao == "" || plataforma == "" || imgLink == "") {


        console.log("Os dados estão vazios");

        envieMsg("Preencha todos os campos", "erro");
        return true
    } else {
        console.log("Os dados não estão em branco");
        return false
    }
}

function envieMsg(msg, tipo) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    let msgParaTela = `
 <p class='${tipo}'>${msg}<p>
 `
    msgDiv.innerHTML += msgParaTela;

    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}

class Jogo {
    constructor(titulo, preco, descricao, plataforma, imgLink) {
        this.titulo = titulo;
        this.preco = preco;
        this.descricao = descricao;
        this.plataforma = plataforma;
        this.imgLink = imgLink;

    }
}

const jogoTeste = new Jogo("Teste", "12", "Desc", "steam", "link");
console.log(jogoTeste);

function comporJogo() {
    let titulo = document.getElementById("input-titulo").value;
    let preco = document.getElementById("input-preco").value;
    let descricao = document.getElementById("input-descricao").value;
    let plataforma = document.getElementById("input-plataforma").value;
    let imgLink = document.getElementById("input-imglink").value;

    const jogo = new Jogo(titulo, preco, descricao, plataforma, imgLink);

    console.log(jogo);

    bibliotecaJogos.add(jogo);

    renderizarConteudo();
}

class ListaJogo {
    constructor() {
        this.listaJogos = [];
    }

    add(param) {

        //  this.listaJogos.push(param); 

        if (verificarInputs()) {
            envieMsg("Preencha todos os campos", "erro");
        } else if(!isURLValida(param.imgLink)) {
            envieMsg("URL inválida", "erro")
            }else{
            this.listaJogos.push(param);
            limparImputs();
            envieMsg("Cadastrado com sucesso", "sucesso")
            console.log(this.listaJogos);
        }
    }

}

const bibliotecaJogos = new ListaJogo();
console.log(bibliotecaJogos);

function limparImputs() {
    document.getElementById("input-titulo").value = "";
    document.getElementById("input-preco").value = "";
    document.getElementById("input-descricao").value = "";
    document.getElementById("input-plataforma").value = "";
    document.getElementById("input-imglink").value = "";

}


function renderizarConteudo() {

    const listaHtml = document.getElementById('containerLista');
    listaHtml.innerHTML = '';
    let array = bibliotecaJogos.listaJogos;
    console.log(array)
    array.forEach(jogo => {
        const jogosDiv = ` 
         <div class='jogoDetalhe'>
         <h2>Título: ${jogo.titulo}</h2>
         <p>Preço: R$${jogo.preco}</p>
         <p>Descrição: ${jogo.descricao}</p>
         <p>Plataforma: ${jogo.plataforma}</p>
         <img src="${jogo.imgLink}" alt="${jogo.titulo}">

        </div>
        `;
        listaHtml.innerHTML += jogosDiv;
    });
}
function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}