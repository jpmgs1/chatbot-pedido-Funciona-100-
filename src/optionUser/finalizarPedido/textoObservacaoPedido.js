const banco = require("../../banco");

function Observacao(user, msg) {
    let arrayMsgRetorno = [];
    
    let textoOpcaoDesejada = `*Observação no seu pedido,*\nPor exemplo: _"Mais azul/vermelha/etc"_\nÉ só digitar a observação e enviar:`;
    arrayMsgRetorno.push({texto: textoOpcaoDesejada});
    
    let voltarMenu = `*Para voltar ao menu anterior digite* #️⃣`;
    arrayMsgRetorno.push({texto:voltarMenu});

    let textoPularOpcao = `*FINALIZAR PEDIDO:* 4️⃣ `;
    arrayMsgRetorno.push({texto: textoPularOpcao});

    return arrayMsgRetorno;
}

exports.textoObservacao = Observacao;
