import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let saldo = 0


const deposito = (valor) => {
    saldo += valor;
    return saldo;
};


const retirar = (valor) => {
    if (valor <= saldo) { 
        saldo -= valor; 
        return saldo;
    } else {
        console.log("Saldo insuficiente!");
        return saldo;
    }
};


function calculadora(){
    console.log('\nSelecione a operação:');
    console.log('1 - Depósito');
    console.log('2 - Retirar');
    console.log(`Saldo atual: ${saldo}`);


    rl.question('Digite o número da operação desejada (1/2): ', (escolha) => {
        if (['1', '2'].includes(escolha)){
            if(escolha === '1' ){
                rl.question('Quanto você quer depositar: ', (valor) => {
                    const depositoValor = parseFloat(valor);
                    if(!isNaN(depositoValor) && depositoValor > 0 ){
                        const novoSaldo = deposito(depositoValor);
                        console.log(`Você depositou: ${depositoValor}`);
                        console.log(`Seu novo saldo é: ${novoSaldo}`);
                    }else{
                        console.log('Valor inválido!');
                    }
                    calculadora();
                })
            }else if(escolha === '2'){
                rl.question('Quanto você quer retirar: ', (valor) => {
                    const retirarValor = parseFloat(valor);
                    if(!isNaN(retirarValor) && retirarValor > 0 ){
                        const novoSaldo = retirar(retirarValor);
                        console.log(`Você retirou: ${retirarValor}`);
                        console.log(`Seu novo saldo é: ${novoSaldo}`);

                    }else{
                        console.log('Valor inválido!');
                    }
                    calculadora()
                })
            }
        }else{
            console.log('Opção inválida!');
            calculadora()
        }
    })
}

calculadora()

