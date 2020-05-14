# Introdução à Programação Orientada à Objetos com JavaScript
_As aulas teórias e conceitos de POO foram realizadas com o professor [Gustavo Guanabara](https://github.com/gustavoguanabara) do [Curso em Vídeo](https://www.youtube.com/watch?v=KlIL63MeyMY&list=PLHz_AreHm4dmGuLII3tsvryMMD7VgcT7x)_
## Classe
Classe vem de classificação que **define os atributos e métodos comuns que serão partilhadas por um objeto**.
Antes de criar um objeto é necessário definir a sua classe, ou seja, é necessário uma espécie de planejamento/protótipo de classificação.
*Por convenção, é definido que as classes no JavaScript começe com letra maiúscula.*
```
class Cliente{
```
## Objeto
É uma instância de uma classe descrito por meio de seus:
* **ATRIBUTOS**: caracteríticas, propriedade, dados.
```
class Cliente{
    nome;
    _cpf;
}
```
* **MÉTODOS**: comportamentos, procedimentos das rotinas internas desse objeto, definir o que um objeto pode fazer e podem receber parâmetros
```
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
```
* **ESTADO**: características atuais do momento em que estou analisando o objeto
```
const cliente1 = new Cliente('Otthon', 12345678910);
const cliente2 = new Cliente('Leão', 98765432109);

console.log(cliente1); //Cliente { nome: 'Otthon', _cpf: 12345678910 }
console.log(cliente2); //Cliente { nome: 'Leão', _cpf: 98765432109 }
```
### Encapsulamento
Por padrão no JS utilizamos o `_` para indicar que um atributo é privado e não deve ser alterado, mesmo que seja possível. Atualmente a [comunidade no gitHub](https://github.com/tc39/proposal-class-fields#private-fields) está sugerindo o uso da `#` para ser usadas em atributos privados.
```
class ContaCorrente{
    agencia;
    _cliente;
    _saldo = 0;
}
```
Em métodos é importante especificar em qual objeto queremos que seja trabalhado, por isso usamos o `this.xxxx`.
Vamos usar como o exemplo o método para o comportamento de saque, onde recebemos o parâmetro `_valor` e verifica se o valor é maior ou igual ao saldo da conta específica `this._valor`, se for `true` ele permite o saque subtraindo o valor do saldo.
```
sacar(valor){
  if(this._saldo >= valor){
    this._saldo -= valor;
    return valor;
  }
}
```
### Funções `get` e `set`
Sintexe conhecidade como assessores que protege os atributos que temos a intenção de deixá-lo privado. Ou seja, é a forma que damos acesso a manipulação dos atributos de uma maneira controlada.
Exemplo: Atribuir valor ao `_cliente` somente se for do tipo que é pra ser cliente.


