const banco = require("../../banco");
const resumoPedido = require("../resumoPedido");

function execute(user, msg) {
    let arrayMsgRetorno = [];
    
    //informarEndereco.js
    arrayMsgRetorno.push({stage: 11});

    // //lista todos os produtos que estão no carrinho
    // let resumo = resumoPedido.resumoCarrinhoBD(user, msg);
    // //Add item ao array
    // arrayMsgRetorno.push({texto:resumo});

        let voltarMenu = `*Para voltar ao menu anterior digite* #️⃣`;
    //Add item ao array
    arrayMsgRetorno.push({texto:voltarMenu});
		
	let opcaoDesejada = `*Digite o seu endereço para prosseguir:*\n
Rua:
Bairro:
Número:
Cidade(opcional):
Cep:`;

    //Add item ao array
    arrayMsgRetorno.push({texto:opcaoDesejada});
      //informarEndereco.js
      //banco.db[user].stage = 11;

    return arrayMsgRetorno;
}

exports.execute = execute;
