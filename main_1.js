class times{
    constructor(nome, idolo, tamanho, titulos){
     this.nome = nome;
     this.idolo = idolo;
     this.tamanho = tamanho;
     this.titulos = titulos;
    }
}

class informacoes{
    mostrarinformacoes(time){
       console.log("Nome: "+time.nome);
       console.log("Idolo: "+time.idolo);
       console.log("Tamanho: "+time.tamanho)
       console.log("Titulos: "+time.titulos)
    }
}

let Santos = new times("Santos", "Pelé", "Gigante", 17);
let Corinthians = new times("Corinthians", "Cássio", "Grande", 15)
let Sao_Paulo = new times("São Paulo", "Rogério Cenni", "Gigante", 18)
let Palmeiras = new times("Palmeiras", "Ademir da Guia", "Grande", 23)

let t = new informacoes; 

t.mostrarinformacoes(Santos);
t.mostrarinformacoes(Corinthians);
t.mostrarinformacoes(Sao_Paulo);
t.mostrarinformacoes(Palmeiras);