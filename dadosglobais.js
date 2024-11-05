const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';


async function visualizarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = await res.json();
const pessoasmudo= (dados. total-pessoas-mundo)/1e9
const pessoasconectadas =((dados.total_pessoas_conectadas)/1e9).tofixed(2)
const horas = parseInt((dados.tempo-medio)).tofixed(2)
const minutos = Math.round((daods.tempo_medio-horas))*1000.tofixed(2)
const porcentagem = ((pessoasconectadas/pessoasmudo))
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `Você sabia que o mundo tem 
    <span>${pessoas-mundo} </span> bilhoes de pessoas e que aproximadamente 
    <span>${pessoasconectadas} </span> bilhoes estão conectadas em alguma rede social e passam em média <span>${horas}</span> horas e <span>$(minutos)<span/> conectadas
    <br>isto é impressionante pois cerca de <span>$(porcentagem )<span/> de pessoas usam alguma rede social  `

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);

   
}

visualizarInformacoesGlobais()
