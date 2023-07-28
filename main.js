class Pessoa{
    
}


class Motor{
    constructor(p){
        console.log("construtor do motor rodando...");
        this.potenciadomeumotor = p;
    }
}

class Carro{
    acelerar(){
        console.log('vruummm');
    }
}
let mBasicao = new Motor(2);
let mTop = new Motor(10);
let ferrari = new Carro("vermelho");
ferrari.acelerar();