<template>
  <div id="app">
    <header style="font-size: 20px;">
      <div style="height: 46px;">
        <button class="btn barras3" id="barras3" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></button>
        
        <a href="../PaginaInicial/PaginaInicial.html" style="vertical-align: 16px;">QREvents</a>

      </div>
      <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Buscar..." />
        <button class="btn btn-light"></button>
      </div>
      <div id="sair">
        <div class="switch__container">
          <input type="checkbox" id="tema" class="switch switch-escuro">
          <label for="tema"></label>
        </div>
        <a href="../PaginaInicial/PaginaInicial.html"
          style="vertical-align: -5px; margin-left: 13px; margin-right: 13px;">Sair</a>
      </div>
    </header>
    <!-- <div class="BarraLateral"> -->
    <!-- <div class="Quadrante1"> -->
    <div class="BarraLateral offcanvas offcanvas-start show" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
      id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div class="LateralTopo" style="height: 49px;">
        <button id="barras3F" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <div>
          
          <a href="../PaginaInicial/PaginaInicial.html" style="vertical-align: 16px;">QREvents</a>
        </div>
      </div>
      <div class="Quadrante1 offcanvas-header">
        <p style="width: 80%; margin: 0;">Nome e Sobrenome </p>
        <div class="btn-group dropend">
          <button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
            ...
          </button>
          <ul class="dropdown-menu" style="background-color: #f3f3f3;">
            <li><a class="dropdown-item" href="../configuracoes/config.html">Opção da Conta</a></li>
          </ul>
        </div>
        <br>
        <p id="e-mail" style="margin: 0;">souzaesdras@alu.ufc.br</p>
      </div>
      <div class="Quadrante2">
        <a href="../CriacaoEventos/CriacaoEventos.html"><Button>Criar novo evento</Button></a>
      </div>
      <div class="Historico">
        <a href="../Inicio/Inicio.html"><button class="btn btn-light">Inicio</button></a>
      </div>
      <div class="Historico">
        <a href="../Historico/Historico.html"><button class="btn btn-light">Historico</button></a>
      </div>
    </div>
    <div class="Conteudo" id="Conteudo">
      <h1>Historico</h1>
      <div class="column" id="todoConteudo">
        <div class="HistoricoMenu">
          <div>
            <p><a href="../Evento/Evento.html">jogos digitais</a>
              Descrição: data: 23/08<a href="../Evento/Evento.html"><button class="btn btn-light">ABRIR</button></a></p>
          </div>
        </div>
        <div class="HistoricoMenu">
          <div>
            <p><a href="../Evento/Evento.html">'Nome do Evento'</a> Descrição: Lorem ipsum dolor sit amet
              consectetur adipisicing elit. <a href="../Evento/Evento.html"><button
                  class="btn btn-light">ABRIR</button></a>
            </p>
          </div>
        </div>
        <div class="HistoricoMenu">
          <div>
            <p><a href="../Evento/Evento.html">'Nome do Evento'</a> Descrição: Lorem ipsum dolor sit amet
              consectetur adipisicing elit. <a href="../Evento/Evento.html"><button
                  class="btn btn-light">ABRIR</button></a>
            </p>
            <button id="Test">Teste Integração</button>
          </div>
        </div>
      </div>
    </div>
      
  </div>
</template>

<script>
export default {
  name: 'App',
}
const axios = require('axios');

axios.get('http://localhost:8080/organizador/3')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

const test = document.getElementById('Test');
test.addEventListener('click', function () {

  axios.post('http://localhost:8080/api/dados', {
    email: 'Test@testEsdras.com',
    senha: '!@#$%'
  })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
})
</script>

<style>
body {
  /* background-image: linear-gradient(rgb(78, 175, 255), white); */
  background-color: white;
}


.Conteudo {
  height: 100%;
  width: 74%;
  top: 49px;
  left: 224px;
  position: relative;
  margin: 4px;
}

.Conteudo h1 {
  font-weight: bold;
}

.Botaocollapshistorico p {
  font-size: 20px;
}

.column {
  display: flex;
  flex-direction: column;
}

.HistoricoMenu button {
  border: 1px solid black;
}

.HistoricoMenu {
  border-bottom: 1px solid black;
  margin-bottom: 10px;

}

.HistoricoMenu a,
.HistoricoMenu p {
  color: black;
  margin-right: 10px;
  font-size: 110%;
}

/* Tipos de Tela */
/* Mobile Styles */
@media only screen and (max-width: 500px) {
  .Conteudo {
    font-size: 30px;
  }

  .Botaocollapshistorico button {
    bottom: 51px;
    left: 94px;
    width: 43px;
    height: 43px;
  }
}

@media only screen and (min-width: 1500px) {
  .mostrarMais {
    width: 200px;
    height: 60px;
    font-size: 25px;
  }
}

#divBusca {
  background-color: #5998cc;
  border: solid 1px;
  border-radius: 15px;
  width: 300px;
  max-width: 500px;
  max-height: 150px
}

#txtBusca {

  float: left;
  background-color: transparent;
  position: relative;
  left: 7px;
  top: 4px;
  font-style: italic;
  font-size: 18px;
  border: none;
  height: 40px;
  width: 250px;

}

#divBusca button {
  width: 40px;
  height: 50px;
  
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: relative;
  background-color: initial;
  border: 0px;
}
</style>
