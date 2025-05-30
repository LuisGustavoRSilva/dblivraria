function carregar_novidades(){
    const livros_novidades = document.getElementById("livrosnovidades")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/Produto/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida+= ` <div class="livro">
                <img src=" ${liv.foto1} " alt="Capa ${liv.nome}">
                <h3>${liv.nome}</h3>
                <p class="preco">R$ ${liv.preco}</p>
                <button>
                    <img src="img/carrinho3.png">
                    <p>Adicionar ao carrinho</p>
                </button>
            </div> ` 
        })
        livros_novidades.innerHTML = saida;
    })
    carregar_maisvenvidos();
}

function carregar_maisvenvidos(){
    const livros_maisvenvidos = document.getElementById("livrosmaisvendidos")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/Produto/listarmaisvendidos")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida+= ` <div class="livro">
                <img src=" ${liv.foto1} " alt="Capa ${liv.nome}">
                <h3>${liv.nome}</h3>
                <p class="quantidade">Qtd: ${liv.quantidade}</p>
                <button>
                    <img src="img/carrinho3.png">
                    <p>Adicionar ao carrinho</p>
                </button>
            </div> ` 
        })
        livros_maisvenvidos.innerHTML = saida;
    })
    carregar_autores();
}

function carregar_autores(){
    const livros_autores = document.getElementById("livrosautores")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/autor/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida+= ` <div class="autor">
                <img src=" ${liv.foto} " alt="Autor ${liv.nome}">
                <h3>${liv.nome}</h3>
            </div> ` 
        })
        livros_autores.innerHTML = saida;
    })
}



let pe = 0;
let pd = 0;
function rolarnovidadesesquerda(){
    if(pe < -900){
        pe = -1000;
    }
    else{
        pe-=200;
    }
    
    let livrosnovidades = document.getElementById("livrosnovidades")
    livrosnovidades.style.marginLeft=`${pe}px`

}

function rolarnovidadesdireita(){
    if(pe < 0){
        pe += 200;
    }
    else{
        pe=0;
    }
    
    let livrosnovidades = document.getElementById("livrosnovidades")
    livrosnovidades.style.marginLeft=`${pe}px`

}

function carregarlivrosesporte(){
    const lstlivros = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/Produto/listaporcategoria/esporte")
    .then( (res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=liveesporte>
            <img src="${li.foto1}"">
            <h3>${li.nome}</h3>
            <p class=livpreco>${li.preco}<p>
            <a href = detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}


function carregarlivrosficcao(){
    const lstlivros = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/Produto/listaporcategoria/ficcao")
    .then( (res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=liveficcao>
            <img src="${li.foto1}"">
            <h3>${li.nome}</h3>
            <p class=livpreco>${li.preco}<p>
            <a href = detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}

function carregarlivrosromance(){
    const lstlivros = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/Produto/listaporcategoria/romance")
    .then( (res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=liveromance>
            <img src="${li.foto1}"">
            <h3>${li.nome}</h3>
            <p class=livpreco>${li.preco}<p>
            <a href = detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}

function carregarlivrosfantasia(){
    const lstlivros = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/Produto/listaporcategoria/fantasia")
    .then( (res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livefantasia>
            <img src="${li.foto1}"">
            <h3>${li.nome}</h3>
            <p class=livpreco>${li.preco}<p>
            <a href = detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}

function carregarlivrosmanga(){
    const lstlivros = document.getElementById("lstlivros")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/Produto/listaporcategoria/manga")
    .then( (res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=livemanga>
            <img src="${li.foto1}"">
            <h3>${li.nome}</h3>
            <p class=livpreco>${li.preco}<p>
            <a href = detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`
        })
        lstlivros.innerHTML = saida;
    })
}

function carregardetalhes(){
    let idlivro = window.location.search.split('=')
    idlivro = idlivro[1];

    const div_detalhes = document.getElementById("detalhes")
}