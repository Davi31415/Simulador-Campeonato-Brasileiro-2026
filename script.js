const times = [
  { nome: "Athletico-PR", cor: "#D01119", corTexto: "#edede9", escudo: "times/Athletico_Paranaense.png", ataque: 74, defesa: 75, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Atlético-MG", cor: "#000000", corTexto: "#edede9", escudo: "times/Atletico_Mineiro.png", ataque: 84, defesa: 83, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Bahia", cor: "#006CB5", corTexto: "#edede9", escudo: "times/Bahia.png", ataque: 75, defesa: 74, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Botafogo", cor: "#000000", corTexto: "#edede9", escudo: "times/Botafogo.png", ataque: 82, defesa: 84, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Chapecoense", cor: "#159322", corTexto: "#edede9", escudo: "times/Chapecoense.png", ataque: 63, defesa: 62, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Corinthians", cor: "#000000", corTexto: "#edede9", escudo: "times/Corinthians.png", ataque: 80, defesa: 83, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Coritiba", cor: "#003928", corTexto: "#edede9", escudo: "times/Coritiba.png", ataque: 62, defesa: 61, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Cruzeiro", cor: "#2B519F",  corTexto: "#edede9", escudo: "times/Cruzeiro.png", ataque: 83, defesa: 83, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Flamengo", cor: "#C22A1E", corTexto: "#edede9", escudo: "times/Flamengo.png", ataque: 88, defesa: 86, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Fluminense", cor: "#A0002B", corTexto: "#edede9", escudo: "times/Fluminense.png", ataque: 84, defesa: 81, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Grêmio", cor: "#0581C0", corTexto: "#252422", escudo: "times/Gremio.png", ataque: 80, defesa: 81, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Internacional", cor: "#E60107", corTexto: "#edede9", escudo: "times/Internacional.png", ataque: 79, defesa: 81, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Mirassol", cor: "#F6E917", corTexto: "#252422", escudo: "times/Mirassol.png", ataque: 67, defesa: 68, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Palmeiras", cor: "#006434", corTexto: "#edede9", escudo: "times/Palmeiras.png", ataque: 86, defesa: 88, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "RB Bragantino", cor: "#D7183D", corTexto: "#edede9", escudo: "times/RB_Bragantino.png", ataque: 77, defesa: 74, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Remo", cor: "#161923", corTexto: "#edede9", escudo: "times/Remo.png", ataque: 60, defesa: 60, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Santos", cor: "#000000", corTexto: "#edede9", escudo: "times/Santos.png", ataque: 74, defesa: 70, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "São Paulo", cor: "#FE0000", corTexto: "#edede9", escudo: "times/Sao_Paulo.png", ataque: 82, defesa: 81, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Vasco", cor: "#000000", corTexto: "#edede9", escudo: "times/Vasco.png", ataque: 75, defesa: 73, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 },
  { nome: "Vitória", cor: "#E40613", corTexto: "#edede9", escudo: "times/Vitoria.png", ataque: 66, defesa: 65, pts: 0, j: 0, v: 0, e: 0, d: 0, sg: 0 }
];


const torneio = [
  // Rodada 1
  [
    ["Fluminense","Grêmio"],
    ["Botafogo","Cruzeiro"],
    ["São Paulo","Flamengo"],
    ["Corinthians","Bahia"],
    ["Mirassol","Vasco"],
    ["Atlético-MG","Palmeiras"],
    ["Internacional","Athletico-PR"],
    ["Coritiba","RB Bragantino"],
    ["Vitória","Remo"],
    ["Chapecoense","Santos"]
  ],

  // Rodada 2
  [
    ["Flamengo","Internacional"],
    ["Vasco","Chapecoense"],
    ["Santos","São Paulo"],
    ["Palmeiras","Vitória"],
    ["RB Bragantino","Atlético-MG"],
    ["Cruzeiro","Coritiba"],
    ["Grêmio","Botafogo"],
    ["Athletico-PR","Corinthians"],
    ["Bahia","Fluminense"],
    ["Remo","Mirassol"]
  ],

  // Rodada 3
  [
    ["Fluminense","Botafogo"],
    ["Vasco","Bahia"],
    ["São Paulo","Grêmio"],
    ["Corinthians","RB Bragantino"],
    ["Mirassol","Cruzeiro"],
    ["Atlético-MG","Remo"],
    ["Internacional","Palmeiras"],
    ["Athletico-PR","Santos"],
    ["Vitória","Flamengo"],
    ["Chapecoense","Coritiba"]
  ],

  // Rodada 4
  [
    ["Flamengo","Mirassol"],
    ["Botafogo","Vitória"],
    ["Santos","Vasco"],
    ["Palmeiras","Fluminense"],
    ["RB Bragantino","Athletico-PR"],
    ["Cruzeiro","Corinthians"],
    ["Grêmio","Atlético-MG"],
    ["Coritiba","São Paulo"],
    ["Bahia","Chapecoense"],
    ["Remo","Internacional"]
  ],

  // Rodada 5
  [
    ["Flamengo","Cruzeiro"],
    ["Vasco","Palmeiras"],
    ["São Paulo","Chapecoense"],
    ["Corinthians","Coritiba"],
    ["Mirassol","Santos"],
    ["Atlético-MG","Internacional"],
    ["Grêmio","RB Bragantino"],
    ["Athletico-PR","Botafogo"],
    ["Bahia","Vitória"],
    ["Remo","Fluminense"]
  ],

  // Rodada 6
  [
    ["Fluminense","Athletico-PR"],
    ["Botafogo","Flamengo"],
    ["Santos","Corinthians"],
    ["Palmeiras","Mirassol"],
    ["RB Bragantino","São Paulo"],
    ["Cruzeiro","Vasco"],
    ["Internacional","Bahia"],
    ["Coritiba","Remo"],
    ["Vitória","Atlético-MG"],
    ["Chapecoense","Grêmio"]
  ],

  // Rodada 7
  [
    ["Flamengo","Remo"],
    ["Vasco","Fluminense"],
    ["Santos","Internacional"],
    ["Palmeiras","Botafogo"],
    ["Mirassol","Coritiba"],
    ["Atlético-MG","São Paulo"],
    ["Grêmio","Vitória"],
    ["Athletico-PR","Cruzeiro"],
    ["Bahia","RB Bragantino"],
    ["Chapecoense","Corinthians"]
  ],

  // Rodada 8
  [
    ["Fluminense","Atlético-MG"],
    ["Vasco","Grêmio"],
    ["São Paulo","Palmeiras"],
    ["Corinthians","Flamengo"],
    ["RB Bragantino","Botafogo"],
    ["Cruzeiro","Santos"],
    ["Internacional","Chapecoense"],
    ["Athletico-PR","Coritiba"],
    ["Vitória","Mirassol"],
    ["Remo","Bahia"]
  ],

  // Rodada 9
  [
    ["Fluminense","Corinthians"],
    ["Botafogo","Mirassol"],
    ["Santos","Remo"],
    ["Palmeiras","Grêmio"],
    ["RB Bragantino","Flamengo"],
    ["Cruzeiro","Vitória"],
    ["Internacional","São Paulo"],
    ["Coritiba","Vasco"],
    ["Bahia","Athletico-PR"],
    ["Chapecoense","Atlético-MG"]
  ],

  // Rodada 10
  [
    ["Flamengo","Santos"],
    ["Vasco","Botafogo"],
    ["São Paulo","Cruzeiro"],
    ["Corinthians","Internacional"],
    ["Mirassol","RB Bragantino"],
    ["Atlético-MG","Athletico-PR"],
    ["Grêmio","Remo"],
    ["Coritiba","Fluminense"],
    ["Bahia","Palmeiras"],
    ["Chapecoense","Vitória"]
  ],

  // Rodada 11
  [
    ["Fluminense","Flamengo"],
    ["Botafogo","Coritiba"],
    ["Santos","Atlético-MG"],
    ["Corinthians","Palmeiras"],
    ["Mirassol","Bahia"],
    ["Cruzeiro","RB Bragantino"],
    ["Internacional","Grêmio"],
    ["Athletico-PR","Chapecoense"],
    ["Vitória","São Paulo"],
    ["Remo","Vasco"]
  ],

  // Rodada 12
  [
    ["Flamengo","Bahia"],
    ["Vasco","São Paulo"],
    ["Santos","Fluminense"],
    ["Palmeiras","Athletico-PR"],
    ["RB Bragantino","Remo"],
    ["Cruzeiro","Grêmio"],
    ["Internacional","Mirassol"],
    ["Coritiba","Atlético-MG"],
    ["Vitória","Corinthians"],
    ["Chapecoense","Botafogo"]
  ],

  // Rodada 13
  [
    ["Fluminense","Chapecoense"],
    ["Botafogo","Internacional"],
    ["São Paulo","Mirassol"],
    ["Corinthians","Vasco"],
    ["RB Bragantino","Palmeiras"],
    ["Atlético-MG","Flamengo"],
    ["Grêmio","Coritiba"],
    ["Athletico-PR","Vitória"],
    ["Bahia","Santos"],
    ["Remo","Cruzeiro"]
  ],

  // Rodada 14
  [
    ["Flamengo","Vasco"],
    ["Botafogo","Remo"],
    ["São Paulo","Bahia"],
    ["Palmeiras","Santos"],
    ["Mirassol","Corinthians"],
    ["Cruzeiro","Atlético-MG"],
    ["Internacional","Fluminense"],
    ["Athletico-PR","Grêmio"],
    ["Vitória","Coritiba"],
    ["Chapecoense","RB Bragantino"]
  ],

  // Rodada 15
  [
    ["Fluminense","Vitória"],
    ["Vasco","Athletico-PR"],
    ["Santos","RB Bragantino"],
    ["Corinthians","São Paulo"],
    ["Mirassol","Chapecoense"],
    ["Atlético-MG","Botafogo"],
    ["Grêmio","Flamengo"],
    ["Coritiba","Internacional"],
    ["Bahia","Cruzeiro"],
    ["Remo","Palmeiras"]
  ],

  // Rodada 16
  [
    ["Fluminense","São Paulo"],
    ["Botafogo","Corinthians"],
    ["Santos","Coritiba"],
    ["Palmeiras","Cruzeiro"],
    ["RB Bragantino","Vitória"],
    ["Atlético-MG","Mirassol"],
    ["Internacional","Vasco"],
    ["Athletico-PR","Flamengo"],
    ["Bahia","Grêmio"],
    ["Chapecoense","Remo"]
  ],

  // Rodada 17
  [
    ["Flamengo","Palmeiras"],
    ["Vasco","RB Bragantino"],
    ["São Paulo","Botafogo"],
    ["Corinthians","Atlético-MG"],
    ["Mirassol","Fluminense"],
    ["Cruzeiro","Chapecoense"],
    ["Grêmio","Santos"],
    ["Coritiba","Bahia"],
    ["Vitória","Internacional"],
    ["Remo","Athletico-PR"]
  ],

  // Rodada 18
  [
    ["Flamengo","Coritiba"],
    ["Vasco","Atlético-MG"],
    ["Santos","Vitória"],
    ["Palmeiras","Chapecoense"],
    ["RB Bragantino","Internacional"],
    ["Cruzeiro","Fluminense"],
    ["Grêmio","Corinthians"],
    ["Athletico-PR","Mirassol"],
    ["Bahia","Botafogo"],
    ["Remo","São Paulo"]
  ],

  // Rodada 19
  [
    ["Fluminense","RB Bragantino"],
    ["Botafogo","Santos"],
    ["São Paulo","Athletico-PR"],
    ["Corinthians","Remo"],
    ["Mirassol","Grêmio"],
    ["Atlético-MG","Bahia"],
    ["Internacional","Cruzeiro"],
    ["Coritiba","Palmeiras"],
    ["Vitória","Vasco"],
    ["Chapecoense","Flamengo"]
  ],

  // Rodada 20
  [
    ["Flamengo","São Paulo"],
    ["Vasco","Mirassol"],
    ["Santos","Chapecoense"],
    ["Palmeiras","Atlético-MG"],
    ["RB Bragantino","Coritiba"],
    ["Cruzeiro","Botafogo"],
    ["Grêmio","Fluminense"],
    ["Athletico-PR","Internacional"],
    ["Bahia","Corinthians"],
    ["Remo","Vitória"]
  ],

  // Rodada 21
  [
    ["Fluminense","Bahia"],
    ["Botafogo","Grêmio"],
    ["São Paulo","Santos"],
    ["Corinthians","Athletico-PR"],
    ["Mirassol","Remo"],
    ["Atlético-MG","RB Bragantino"],
    ["Internacional","Flamengo"],
    ["Coritiba","Cruzeiro"],
    ["Vitória","Palmeiras"],
    ["Chapecoense","Vasco"]
  ],

  // Rodada 22
  [
    ["Flamengo","Vitória"],
    ["Botafogo","Fluminense"],
    ["Santos","Athletico-PR"],
    ["Palmeiras","Internacional"],
    ["RB Bragantino","Corinthians"],
    ["Cruzeiro","Mirassol"],
    ["Grêmio","São Paulo"],
    ["Coritiba","Chapecoense"],
    ["Bahia","Vasco"],
    ["Remo","Atlético-MG"]
  ],

  // Rodada 23
  [
    ["Fluminense","Palmeiras"],
    ["Vasco","Santos"],
    ["São Paulo","Coritiba"],
    ["Corinthians","Cruzeiro"],
    ["Mirassol","Flamengo"],
    ["Atlético-MG","Grêmio"],
    ["Internacional","Remo"],
    ["Athletico-PR","RB Bragantino"],
    ["Vitória","Botafogo"],
    ["Chapecoense","Bahia"]
  ],

  // Rodada 24
  [
    ["Fluminense","Remo"],
    ["Botafogo","Athletico-PR"],
    ["Santos","Mirassol"],
    ["Palmeiras","Vasco"],
    ["RB Bragantino","Grêmio"],
    ["Cruzeiro","Flamengo"],
    ["Internacional","Atlético-MG"],
    ["Coritiba","Corinthians"],
    ["Vitória","Bahia"],
    ["Chapecoense","São Paulo"]
  ],

  // Rodada 25
  [
    ["Flamengo","Botafogo"],
    ["Vasco","Cruzeiro"],
    ["São Paulo","RB Bragantino"],
    ["Corinthians","Santos"],
    ["Mirassol","Palmeiras"],
    ["Atlético-MG","Vitória"],
    ["Grêmio","Chapecoense"],
    ["Athletico-PR","Fluminense"],
    ["Bahia","Internacional"],
    ["Remo","Coritiba"]
  ],

  // Rodada 26
  [
    ["Fluminense","Vasco"],
    ["Botafogo","Palmeiras"],
    ["São Paulo","Atlético-MG"],
    ["Corinthians","Chapecoense"],
    ["RB Bragantino","Bahia"],
    ["Cruzeiro","Athletico-PR"],
    ["Internacional","Santos"],
    ["Coritiba","Mirassol"],
    ["Vitória","Grêmio"],
    ["Remo","Flamengo"]
  ],

  // Rodada 27
  [
    ["Flamengo","Corinthians"],
    ["Botafogo","RB Bragantino"],
    ["Santos","Cruzeiro"],
    ["Palmeiras","São Paulo"],
    ["Mirassol","Vitória"],
    ["Atlético-MG","Fluminense"],
    ["Grêmio","Vasco"],
    ["Coritiba","Athletico-PR"],
    ["Bahia","Remo"],
    ["Chapecoense","Internacional"]
  ],

  // Rodada 28
  [
    ["Flamengo","RB Bragantino"],
    ["Vasco","Coritiba"],
    ["São Paulo","Internacional"],
    ["Corinthians","Fluminense"],
    ["Mirassol","Botafogo"],
    ["Atlético-MG","Chapecoense"],
    ["Grêmio","Palmeiras"],
    ["Athletico-PR","Bahia"],
    ["Vitória","Cruzeiro"],
    ["Remo","Santos"]
  ],

  // Rodada 29
  [
    ["Fluminense","Coritiba"],
    ["Botafogo","Vasco"],
    ["Santos","Flamengo"],
    ["Palmeiras","Bahia"],
    ["RB Bragantino","Mirassol"],
    ["Cruzeiro","São Paulo"],
    ["Internacional","Corinthians"],
    ["Athletico-PR","Atlético-MG"],
    ["Vitória","Chapecoense"],
    ["Remo","Grêmio"]
  ],

  // Rodada 30
  [
    ["Flamengo","Fluminense"],
    ["Vasco","Remo"],
    ["São Paulo","Vitória"],
    ["Palmeiras","Corinthians"],
    ["RB Bragantino","Cruzeiro"],
    ["Atlético-MG","Santos"],
    ["Grêmio","Internacional"],
    ["Coritiba","Botafogo"],
    ["Bahia","Mirassol"],
    ["Chapecoense","Athletico-PR"]
  ],

  // Rodada 31
  [
    ["Fluminense","Santos"],
    ["Botafogo","Chapecoense"],
    ["São Paulo","Vasco"],
    ["Corinthians","Vitória"],
    ["Mirassol","Internacional"],
    ["Atlético-MG","Coritiba"],
    ["Grêmio","Cruzeiro"],
    ["Athletico-PR","Palmeiras"],
    ["Bahia","Flamengo"],
    ["Remo","RB Bragantino"]
  ],

  // Rodada 32
  [
    ["Flamengo","Atlético-MG"],
    ["Vasco","Corinthians"],
    ["Santos","Bahia"],
    ["Palmeiras","RB Bragantino"],
    ["Mirassol","São Paulo"],
    ["Cruzeiro","Remo"],
    ["Internacional","Botafogo"],
    ["Coritiba","Grêmio"],
    ["Vitória","Athletico-PR"],
    ["Chapecoense","Fluminense"]
  ],

  // Rodada 33
  [
    ["Fluminense","Internacional"],
    ["Vasco","Flamengo"],
    ["Santos","Palmeiras"],
    ["Corinthians","Mirassol"],
    ["RB Bragantino","Chapecoense"],
    ["Atlético-MG","Cruzeiro"],
    ["Grêmio","Athletico-PR"],
    ["Coritiba","Vitória"],
    ["Bahia","São Paulo"],
    ["Remo","Botafogo"] 
  ],

  // Rodada 34
  [
    ["Flamengo","Grêmio"],
    ["Botafogo","Atlético-MG"],
    ["São Paulo","Corinthians"],
    ["Palmeiras","Remo"],
    ["RB Bragantino","Santos"],
    ["Cruzeiro","Bahia"],
    ["Internacional","Coritiba"],
    ["Athletico-PR","Vasco"],
    ["Vitória","Fluminense"],
    ["Chapecoense","Mirassol"]
  ],

  // Rodada 35
  [
    ["Flamengo","Athletico-PR"],
    ["Vasco","Internacional"],
    ["São Paulo","Fluminense"],
    ["Corinthians","Botafogo"],
    ["Mirassol","Atlético-MG"],
    ["Cruzeiro","Palmeiras"],
    ["Grêmio","Bahia"],
    ["Coritiba","Santos"],
    ["Vitória","RB Bragantino"],
    ["Remo","Chapecoense"]
  ],

  // Rodada 36
  [
    ["Fluminense","Mirassol"],
    ["Botafogo","São Paulo"],
    ["Santos","Grêmio"],
    ["Palmeiras","Flamengo"],
    ["RB Bragantino","Vasco"],
    ["Atlético-MG","Corinthians"],
    ["Internacional","Vitória"],
    ["Athletico-PR","Remo"],
    ["Bahia","Coritiba"],
    ["Chapecoense","Cruzeiro"]
  ],

  // Rodada 37
  [
    ["Fluminense","Cruzeiro"],
    ["Botafogo","Bahia"],
    ["São Paulo","Remo"],
    ["Corinthians","Grêmio"],
    ["Mirassol","Athletico-PR"],
    ["Atlético-MG","Vasco"],
    ["Internacional","RB Bragantino"],
    ["Coritiba","Flamengo"],
    ["Vitória","Santos"],
    ["Chapecoense","Palmeiras"]
  ],

  // Rodada 38
  [
    ["Flamengo","Chapecoense"],
    ["Vasco","Vitória"],
    ["Santos","Botafogo"],
    ["Palmeiras","Coritiba"],
    ["RB Bragantino","Fluminense"],
    ["Cruzeiro","Internacional"],
    ["Grêmio","Mirassol"],
    ["Athletico-PR","São Paulo"],
    ["Bahia","Atlético-MG"],     
    ["Remo","Corinthians"]      
  ]
];

const nomeParaIndice = {};

times.map((time, index) => {
  nomeParaIndice[time.nome] = index;
});

let torneioIndexado = torneio;

for (let rodada of torneioIndexado) {
  for (let jogo of rodada) {
    jogo[0] = nomeParaIndice[jogo[0]];
    jogo[1] = nomeParaIndice[jogo[1]];
  }
}

const simularRodada = document.getElementById("simularRodada");
const simularNovamente = document.getElementById("simularNovamente");
const overlay = document.querySelector(".overlay");
const alertaCampeao = document.querySelector(".alertaCampeao")
let rodadasSimuladas = 0;

function atualizarTabela() {
  const classificacao = [...times].sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.sg !== a.sg) return b.sg - a.sg;
    return b.v - a.v;
  });
  for (let i = 0; i < 20; i++) {
    document.getElementById("pos" + (i+1)).innerHTML = i + 1;
    document.getElementById("nome" + (i+1)).innerHTML =`
      <img class="escudo" src="${classificacao[i].escudo}">
      <span class="nomeTexto">${classificacao[i].nome}</span>
    `;
    document.getElementById("pts" + (i+1)).innerHTML = classificacao[i].pts;
    document.getElementById("jogos" + (i+1)).innerHTML = classificacao[i].j;
    document.getElementById("v" + (i+1)).innerHTML = classificacao[i].v;
    document.getElementById("e" + (i+1)).innerHTML = classificacao[i].e;
    document.getElementById("d" + (i+1)).innerHTML = classificacao[i].d;
    document.getElementById("sg" + (i+1)).innerHTML = classificacao[i].sg;
  }
}

function proximasRodadas(){
    const partidasFuturas = document.getElementById("partidasFuturas");
    if (rodadasSimuladas<38){
      if (rodadasSimuladas>0){
      for (let i=0; i<10; i++){
        const partidaFutura = document.getElementById("proximoJogo"+i)
        partidasFuturas.removeChild(partidaFutura)
      }
    }
  }
  else{
    return ""
  }
  for (let i=0; i<10; i++){
    const partidaFutura = document.createElement("p");
    partidaFutura.setAttribute("id", "proximoJogo"+i);
    partidaFutura.innerHTML =`
      <span class="time casa">
      <img class="escudo" src="${times[torneioIndexado[rodadasSimuladas][i][0]].escudo}">
      ${times[torneioIndexado[rodadasSimuladas][i][0]].nome}
      </span>
      <span class="placar">
      <span class="gol">  </span>
      <span class="x">x</span>
      <span class="gol">  </span>
      </span>
      <span class="time fora">
      ${times[torneioIndexado[rodadasSimuladas][i][1]].nome}
      <img class="escudo" src="${times[torneioIndexado[rodadasSimuladas][i][1]].escudo}">
      </span>
  `
    partidasFuturas.appendChild(partidaFutura)
    }
}

proximasRodadas();

simularRodada.addEventListener("click",()=>{
  Rodada();
  proximasRodadas();
})

simularNovamente.addEventListener("click", ()=>{
  location.reload()
})

function Rodada(){
  let jogos=0;
  let partidasDaRodada = document.getElementById("partidas");
  let rodadaNumerada = document.getElementById("rodada");

  if (rodadasSimuladas<38){
    if (rodadasSimuladas>0){
    for (let i=0; i<10; i++){
      const partida = document.getElementById("jogo"+i);
      partidasDaRodada.removeChild(partida)
    }
  }
  }
  else{
    const campeao = document.getElementById("nome1");
    const src = campeao.children[0].getAttribute("src");
    const nome = campeao.children[1].textContent;
    const nomeTimeCores = times.find(el => el.nome === nome);
    const cor = nomeTimeCores.cor;
    const corTexto = nomeTimeCores.corTexto
    let textoCampeao = `
      <h1 style="font-weight: bold;margin-top: 5px;">${nome}</h1>
      <h1 style="font-weight: 400;font-size: 25px;margin-top: 5px; height: 70px">foi campeão do Brasileirão 2026!</h1>
      <img style=" height: 180px" src="${src}">
      <button id="fecharAlerta" style="background-color: ${cor}; color: ${corTexto}">Fechar</button>
    `
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    alertaCampeao.style.display = "flex";
    alertaCampeao.style.flexDirection = "column";
    alertaCampeao.style.alignItems = "center";
    alertaCampeao.innerHTML = textoCampeao;

    simularRodada.blur();
    alert("Todas as rodadas foram simuladas!");

    const fecharAlerta = document.getElementById("fecharAlerta");
    fecharAlerta.addEventListener("click", ()=>{
      overlay.style.display = "none";
      alertaCampeao.style.display = "none";
    })
    
    return
  }
  rodadaNumerada.innerHTML = "Rodada " + (rodadasSimuladas+1)
  while (jogos<10){
    const Ataque1 = times[torneioIndexado[rodadasSimuladas][jogos][0]].ataque;
    const Ataque2 = times[torneioIndexado[rodadasSimuladas][jogos][1]].ataque;
    const Defesa1 = times[torneioIndexado[rodadasSimuladas][jogos][0]].defesa;
    const Defesa2 = times[torneioIndexado[rodadasSimuladas][jogos][1]].defesa;

    const ChanceGol1=0.012*Ataque1/Defesa2
    const ChanceGol2=0.012*Ataque2/Defesa1

    let Gols1=0;
    let Gols2=0;
    let tempo = 0;
    
    while (tempo<91){
      if (Math.random()<ChanceGol1){
        Gols1++
      }
      if (Math.random()<ChanceGol2){
        Gols2++
      }
      tempo++
    }
    if (Gols1>Gols2){
      times[torneioIndexado[rodadasSimuladas][jogos][0]].v++;
      times[torneioIndexado[rodadasSimuladas][jogos][0]].pts+=3;
      times[torneioIndexado[rodadasSimuladas][jogos][1]].d++;
      times[torneioIndexado[rodadasSimuladas][jogos][0]].j++;
      times[torneioIndexado[rodadasSimuladas][jogos][1]].j++;
      times[torneioIndexado[rodadasSimuladas][jogos][0]].sg+=Gols1-Gols2;
      times[torneioIndexado[rodadasSimuladas][jogos][1]].sg+=Gols2-Gols1;
    }
    else if (Gols2>Gols1){
      times[torneioIndexado[rodadasSimuladas][jogos][1]].v++;
      times[torneioIndexado[rodadasSimuladas][jogos][1]].pts+=3;
      times[torneioIndexado[rodadasSimuladas][jogos][0]].d++;
      times[torneioIndexado[rodadasSimuladas][jogos][0]].j++;
      times[torneioIndexado[rodadasSimuladas][jogos][1]].j++;
      times[torneioIndexado[rodadasSimuladas][jogos][0]].sg+=Gols1-Gols2;
      times[torneioIndexado[rodadasSimuladas][jogos][1]].sg+=Gols2-Gols1;
    }
    else{
      times[torneioIndexado[rodadasSimuladas][jogos][0]].e++;
      times[torneioIndexado[rodadasSimuladas][jogos][1]].e++;
      times[torneioIndexado[rodadasSimuladas][jogos][0]].pts++;
      times[torneioIndexado[rodadasSimuladas][jogos][1]].pts++;
      times[torneioIndexado[rodadasSimuladas][jogos][0]].j++;
      times[torneioIndexado[rodadasSimuladas][jogos][1]].j++;
    }
    const placar = document.createElement("p")
    placar.setAttribute("id", "jogo"+jogos)
    placar.innerHTML =`
      <span class="time casa">
      <img class="escudo" src="${times[torneioIndexado[rodadasSimuladas][jogos][0]].escudo}">
        ${times[torneioIndexado[rodadasSimuladas][jogos][0]].nome}
      </span>
      <span class="placar">
      <span class="gol">${Gols1}</span>
      <span class="x">x</span>
      <span class="gol">${Gols2}</span>
      </span>
      <span class="time fora">
        ${times[torneioIndexado[rodadasSimuladas][jogos][1]].nome}
        <img class="escudo" src="${times[torneioIndexado[rodadasSimuladas][jogos][1]].escudo}">
      </span>
`
    partidasDaRodada.appendChild(placar)
    jogos++  
}
  atualizarTabela();
  rodadasSimuladas++
}

for (let i=0; i<20; i++){
      let informacoes = document.createElement("tr")
      informacoes.setAttribute("id", "posicao"+(i+1))
      informacoes.innerHTML = 
      `<td class="colocacao" id="pos${i+1}">${i+1}</td>
      <td id="nome${i+1}" class="nomeTime">
        <img class="escudo" src="${times[i].escudo}">
        <span class="nomeTexto">${times[i].nome}</span>
      </td>
      <td style="text-align: center;" id="pts${i+1}" class="num">${times[i].pts}</td>
      <td style="text-align: center;" id="jogos${i+1}" class="num">${times[i].j}</td>
      <td style="text-align: center;" id="v${i+1}" class="num">${times[i].v}</td>
      <td style="text-align: center;" id="e${i+1}" class="num">${times[i].e}</td>
      <td style="text-align: center;" id="d${i+1}" class="num">${times[i].d}</td>
      <td style="text-align: center;" id="sg${i+1}" class="num">${times[i].sg}</td>`;
      let posicoes = document.getElementById("posicoes");
      posicoes.appendChild(informacoes)
}


