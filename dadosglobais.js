const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);
async function visualizarinformacoesglobais()
{
const res =await fetch(url);
const dados =await res.json();
const paragrafo=document.createElement ('p');
paragrafo.classList.add('graficos-container__texto');
paragrafo.innerHTML=`voce sabia que o mundo tem aproximadamente 
${dados.total_pessoas_mundo}de pessoas e que aproximadamente
 ${dados.total_pessoas_conectadas} estao conectadas em alguma rede social e passam em media
  ${dados.tempo_medio}horas conectadas`
  
  const container = document.getElementById('graficos-container');
  container.appendChild(paragrafo);

  console.log(paragrafo)
}
visualizarinformacoesglobais()