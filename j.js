import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let saldo = 0 
function consultar(){
    console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
    menu()
}



function depositar(valor){
    if(valor <= 0){
        console.log(`Depósito invalido`);
        
    }else{
        saldo += valor;
        console.log(`Deposito realizado com sucesso Seu saldo atual é ${saldo.toFixed(2)}`);
         consultar()
    }
}


function sacar(valor){
    if(valor <= 0 || valor > saldo){ 
        console.log(`Saque invalido`);
    }else{
        saldo -= valor;
        console.log(`Retirada de R$ ${valor.toFixed(2)} realizada com sucesso`);
        consultar
    }
}

function menu(){
    rl.question(`\nEscolha a operação que deseja realizar: 
       1-Consultar
       2-Deposito
       3 retirar
       0-Sair\n `, (resposta) => {
        switch(resposta){
            case '1':consultar();
            break;

            case '2': rl.question("Digite o valor que deseja depositar:", (valor) =>{
                depositar(parseFloat(valor)) })
                break;
            case '3': rl.question("Digite o valor que deseja sacar:", (valor) =>{
                sacar(parseFloat(valor)) })
            case '0': console.log('Obrigado por usar noso banco');
            rl.close()
            break;

            default: console.log('Opição invalida');
            menu()
            break;
            
            
        } 
       })
}

console.log("Bem vindo ao sistema bancario");
menu()
