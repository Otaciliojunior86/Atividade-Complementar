class Moeda{
    constructor(carteira,valor,preço) {
        this.carteira = carteira;
        this.valor = valor;
        this.preço = preço;
    }

}

const Moeda1 = new Moeda("Real",10,200);
const Moeda2 = new Moeda ("Dolar",50,100);
const Moeda3 = new Moeda ("Euro",30,150);

console.log(Moeda1);
console.log(Moeda2);
console.log(Moeda3);