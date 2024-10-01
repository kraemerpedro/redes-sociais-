const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

console.log(url);
async function visualizarinformacoesglobais()
{
const res =await fetch(url);
const dados =await res.json();
console.log(dados);

}
visualizarinformacoesglobais()