var i = 0;

const AreaPergunta = document.getElementById("PerguntasArea");


function AddPerguntaUnica() {
    let div = document.createElement('div');
    div.innerHTML = `<div class="perguntasUnicaEscolha">
                Pergunta de Unica Escolha
                <div class= "form-check">
                    <input class="form-check-input" type="checkbox" value="" id="RespostaAnonima${i}">
                    <label class="form-check-label" for="RespostaAnonima${i}">
                        Resposta Anonima?
                    </label>
                </div>
                <div class="Pergunta">
                    <input class="form-control" type="text" aria-label="default input example" placeholder="Pergunta"
                        id="NomePergunta${i}">
                </div>
                <div class="Perguntas">
                    <div class="respostas">
                        <table id="Tabela${i}">
                        </table>
                    </div>
                    <button style="margin-right: 30%;" type="button" class="btn btn-primary" onclick="addResposta(${i})">+ Adicionar
                        Respostas</button>
                    <button type="button" class="btn btn-danger" onclick="removerTabela(${i})">x Excluir Tabela</button>
                </div>
            </div >
            <hr>`;
    AreaPergunta.appendChild(div);
    div.id = `Pergunta${i}`
    i++;
}

function AddPerguntaMultpla() {
    let div = document.createElement('div');
    div.innerHTML = `<div class="perguntasMultplaEscolha">
                Pergunta de Multipla Escolha
                <div class= "form-check">
                    <input class="form-check-input" type="checkbox" value="" id="RespostaAnonima${i}">
                    <label class="form-check-label" for="RespostaAnonima${i}">
                        Resposta Anonima?
                    </label>
                </div>
                <div class="Pergunta">
                    <input class="form-control" type="text" aria-label="default input example" placeholder="Pergunta"
                        id="NomePergunta${i}">
                </div>
                <div class="Perguntas">
                    <div class="respostas">
                        <table id="Tabela${i}">
                        </table>
                    </div>
                    <button style="margin-right: 30%;" type="button" class="btn btn-primary" onclick="addResposta(${i})">+ Adicionar
                        Respostas</button>
                    <button type="button" class="btn btn-danger" onclick="removerTabela(${i})">x Excluir Tabela</button>
                </div>
            </div >
            <hr>`;
    AreaPergunta.appendChild(div);
    div.id = `Pergunta${i}`
    i++;
}

function AddPerguntaAberta() {
    let div = document.createElement('div');
    div.innerHTML = `<div class="perguntasAbertas">
                Pergunta Aberta
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="RespostaAnonima${i}">
                    <label class="form-check-label" for="RespostaAnonima${i}">
                        Resposta Anonima?
                    </label>
                </div>
                <div class="Pergunta">
                    <input class="form-control" type="text" aria-label="default input example" placeholder="Pergunta"
                        id="NomePergunta${i}">
                </div>
                <div class="Perguntas">
                    <p>Quantidade Maxima de caracter: <input type="number" id="QtdMaxCar${i}" value="500"></p>
                    <button type="button" class="btn btn-danger" onclick="removerTabela(${i})">x Excluir Tabela</button>
                </div>
            </div>
            <hr>`;
    AreaPergunta.appendChild(div);
    div.id = `Pergunta${i}`
    i++;
}

const UnicaE = document.getElementById("UnicaEscolha");
UnicaE.addEventListener("click", function () { AddPerguntaUnica() });
const PAberta = document.getElementById("Aberta");
PAberta.addEventListener("click", function () { AddPerguntaAberta() });
const Multpla = document.getElementById("MultplaEscolha");
Multpla.addEventListener("click", function () { AddPerguntaMultpla() });

// Alternar DIVS
const botao1 = document.getElementById('agora')
botao1.addEventListener('click', function () { alternarDivs() })

function alternarDivs() {
    let div1 = document.getElementById('div1');
    let div2 = document.getElementById('div2');

    div1.style.display = 'none';
    div2.style.display = 'block';
}

const botao2 = document.getElementById('agora2')
botao2.addEventListener('click', function () { alterar2() })

function alterar2() {
    let div1 = document.getElementById('div1');
    let div2 = document.getElementById('div2');

    div2.style.display = 'none';
    div1.style.display = 'block';
}




