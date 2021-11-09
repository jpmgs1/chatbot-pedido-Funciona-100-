const banco = require("../banco");

function execute(user, msg) {
  let arrayMsgRetorno = [];
  arrayMsgRetorno.push({stage: 5});

  let voltarMenu = `*Menu Anterior Digite* #️⃣ `;
  arrayMsgRetorno.push({texto:voltarMenu});
    
  let addQtd = `*DIGITE A QUANTIDADE:*`;
  arrayMsgRetorno.push({texto: addQtd});
  
  banco.db[user].produtoEscolhido = msg;
  
  //Altera o estado para o menu de opções
  // banco.db[user].stage = 5;

  return arrayMsgRetorno;
}

exports.execute = execute;
