const banco = require("../../banco");

function FormaPagamento(user, msg) {
    let arrayMsgRetorno = [];
    //OpcaoSelecionadaAlterarPedido.js
    arrayMsgRetorno.push({stage: 15});

    let voltarMenu = `*Para voltar ao menu anterior digite:*#️⃣`;
    arrayMsgRetorno.push({texto:voltarMenu});

    let texto = `*Escolha forma de pagamento:*
1️⃣ - Débito
2️⃣ - Crédito
3️⃣ - Dinheiro (Em mãos?)
    
*Obrigado pelo Pedido!\nFico feliz em lhe atenter.*🤝`;

    arrayMsgRetorno.push({texto: texto});
    
    //formaPagamentoDigitada.js
    //banco.db[user].stage = 15;
    return arrayMsgRetorno;
}

exports.textoFormaPagamento = FormaPagamento;
