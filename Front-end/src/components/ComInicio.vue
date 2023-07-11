<template>
    <header style="font-size: 20px;">
        <div style="height: 46px;">
            <button class="btn barras3" id="barras3" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></button>
            <img id="logo" src="../Imagens/Teste Logo QREvents loginho.jpg" alt="QREvents">
            <a href="../Inicio/Inicio.html" style="vertical-align: 16px;">QREvents</a>
        </div>
        <div id="sair">
            <div class="switch__container">
                <input type="checkbox" id="tema" class="switch switch-escuro">
                <label for="tema"></label>
            </div>
            <a href="../cadastro/cadastro.html"
                style="vertical-align: -5px; margin-left: 13px; margin-right: 13px;">Sair</a>
        </div>
    </header>
    <!-- <div class="BarraLateral"> -->
    <!-- <div class="Quadrante1"> -->
    <div class="BarraLateral offcanvas offcanvas-start show" data-bs-scroll="true" data-bs-backdrop="false"
        tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="LateralTopo" style="height: 49px;">
            <button id="barras3F" type="button" class="btn-close" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            <div>
                <img id="logo" src="../Imagens/Teste Logo QREvents loginho.jpg" alt="QREvents">
                <a href="../Inicio/Inicio.html" style="vertical-align: 16px;">QREvents</a>
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
            <button class="btn btn-light"><a href="../Inicio/Inicio.html">Inicio</a></button>
        </div>
        <div class="Historico">
            <button class="btn btn-light"><a href="../Historico/Historico.html">Historico</a></button>
        </div>
    </div>
    <div class="Conteudo" id="Conteudo">
        <h1>QREvents</h1>
        <a href="../CriacaoEventos/CriacaoEventos.html"><Button class="btn btn-primary">Criar novo evento</Button></a>
        <div class="flex">
            <h3>Eventos Criados</h3>
            <button style="border: 1px black solid;" class="btn btn-light" id="coluna">Coluna</button>
            <button style="border: 1px black solid;" class="btn btn-light" id="grid">Grade</button>
        </div>
        <div class="grid" id="todoConteudo">
            <div class="CriadosMenu">
                <div class="Botaocollapshistorico">
                    <p>'Nome do Evento'</p>
                    <button class="expansivo btn" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseEvento" aria-expanded="false" aria-controls="collapseEvento">
                    </button>
                </div>
                <!-- collapse -->
                <div class="eventos collapse" id="collapseEvento">
                    <div class="tabelas">
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qual o Seu Nome?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Esdras</td>
                                    </tr>
                                    <tr>
                                        <td>Luan</td>
                                    </tr>
                                    <tr>
                                        <td>Caua</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 1</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qual o seu E-mail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>souzaesdras@alu.ufc.br</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sim ou Não?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>25% - Sim</td>
                                    </tr>
                                    <tr>
                                        <td>75% - Não</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <center><a class="mostrarMais" href="../Evento/Evento.html">Mostrar mais</a></center>
                </div>
            </div>
            <div class="CriadosMenu">
                <div class="Botaocollapshistorico">
                    <p>'Nome do Evento'</p>
                    <button class="expansivo btn" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseEvento3" aria-expanded="false" aria-controls="collapseEvento">
                    </button>
                </div>
                <div class="eventos collapse" id="collapseEvento3">
                    <div class="tabelas">
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qual o Seu Nome?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Esdras</td>
                                    </tr>
                                    <tr>
                                        <td>Luan</td>
                                    </tr>
                                    <tr>
                                        <td>Caua</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 1</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qual o seu E-mail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>souzaesdras@alu.ufc.br</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sim ou Não?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>25% - Sim</td>
                                    </tr>
                                    <tr>
                                        <td>75% - Não</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <center><a class="mostrarMais" href="../Evento/Evento.html">Mostrar mais</a></center>
                </div>
            </div>
            <div class="CriadosMenu">
                <div class="Botaocollapshistorico">
                    <p>'Nome do Evento'</p>
                    <button class="expansivo btn" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseEvento4" aria-expanded="false" aria-controls="collapseEvento">
                    </button>
                </div>
                <div class="eventos collapse" id="collapseEvento4">
                    <div class="tabelas">
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qual o Seu Nome?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Esdras</td>
                                    </tr>
                                    <tr>
                                        <td>Luan</td>
                                    </tr>
                                    <tr>
                                        <td>Caua</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 1</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qual o seu E-mail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>souzaesdras@alu.ufc.br</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sim ou Não?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>25% - Sim</td>
                                    </tr>
                                    <tr>
                                        <td>75% - Não</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <center><a class="mostrarMais" href="../Evento/Evento.html">Mostrar mais</a></center>
                </div>
            </div>
            <div class="CriadosMenu">
                <div class="Botaocollapshistorico">
                    <p>'Nome do Evento'</p>
                    <button class="expansivo btn" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseEvento5" aria-expanded="false" aria-controls="collapseEvento">
                    </button>
                </div>
                <div class="eventos collapse" id="collapseEvento5">
                    <div class="tabelas">
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qual o Seu Nome?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Esdras</td>
                                    </tr>
                                    <tr>
                                        <td>Luan</td>
                                    </tr>
                                    <tr>
                                        <td>Caua</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 1</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qual o seu E-mail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>souzaesdras@alu.ufc.br</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sim ou Não?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>25% - Sim</td>
                                    </tr>
                                    <tr>
                                        <td>75% - Não</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <center><a class="mostrarMais" href="../Evento/Evento.html">Mostrar mais</a></center>
                </div>
            </div>
            <div class="CriadosMenu">
                <div class="Botaocollapshistorico">
                    <p>'Nome do Evento'</p>
                    <button class="expansivo btn" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseEvento2" aria-expanded="false" aria-controls="collapseEvento">
                    </button>
                </div>
                <div class="eventos collapse" id="collapseEvento2">
                    <div class="tabelas">
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qual o Seu Nome?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Esdras</td>
                                    </tr>
                                    <tr>
                                        <td>Luan</td>
                                    </tr>
                                    <tr>
                                        <td>Caua</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 1</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                    <tr>
                                        <td>Resposta 2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Qual o seu E-mail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>souzaesdras@alu.ufc.br</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                    <tr>
                                        <td>email@test.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sim ou Não?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>25% - Sim</td>
                                    </tr>
                                    <tr>
                                        <td>75% - Não</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <center><a class="mostrarMais" href="../Evento/Evento.html">Mostrar mais</a></center>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js"
        integrity="sha256-WCzAhd2P6gRJF9Hv3oOOd+hFJi/QJbv+Azn4CGB8gfY=" crossorigin="anonymous"></script>
    <script src="../ModoEscuro.js"></script>
    <script src="Inicio.js"></script>
</template>
