//Dados do Cliente
class Cliente{
    nome;
    _cpf;

    get cpf(){
        return this._cpf
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}
//Dados da Conta
class ContaCorrente{
    agencia;
    _cliente;

     // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    transferir(valor, cliente){
        const valorSacado = this.sacar(valor);
        conta2.depositar(valorSacado);
    }
}

/*//Criando conta Cliente sem constructor
const cliente1 = new Cliente();
    cliente1.nome = "Ricardo";
    cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
    cliente2.nome = "Alice";
    cliente2.cpf = 88822233309;*/

//Crindo clientes com constructor
const cliente1 = new Cliente('Otthon', 12345678910);
const cliente2 = new Cliente('Leão', 98765432109);

//Criando Contas
const conta1 = new ContaCorrente();
    conta1.agencia = 1001;
    conta1._saldo = 0;
    conta1.cliente = cliente1;
console.log(cliente1)

const conta2 = new ContaCorrente();
    conta2.agencia = 1010;
    conta2._saldo = 0;
    conta2.cliente = cliente2;
console.log(cliente2);

//Depositar
conta1.depositar(1000);
conta2.depositar(2000);
console.log(`***O saldo da conta1 após o depósito é: R$${conta1._saldo}***`);
console.log(`O saldo da Conta2 após o depósito é: R$${conta2._saldo}`);

//Sacar
const valorSacado = conta1.sacar(50);
console.log("***O valor sacado da conta1 é: R$" + valorSacado + "***");
console.log(`O saldo da conta1 após o saque é: R$${conta1._saldo}`);

//Transferir
conta1.transferir(150, conta2);
console.log(`***O saldo da conta1 após a retirada para transferência é: R$${conta1._saldo}***`);
console.log(`O saldo da conta2 após a recebimento de transferência é: R$${conta2._saldo}`);

