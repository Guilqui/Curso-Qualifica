class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        if(this.saldo > valor){
        this.saldo -= valor
        } else {
            console.log('Saldo insuficiente')
        }
    }
}

let conta = new Conta(1000);

conta.deposito(1050);

conta.saque(100);

console.log(conta.saldo)