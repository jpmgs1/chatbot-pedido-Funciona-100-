const menu = require("./menu");
const resumoPedido = require("./resumoPedido");
const banco = require("../banco");
const alterarPedido = require("./alterarPedido");
const cancelarPedido = require("./cancelamentoPedido");
const finalizarPedido = require("./finalizarPedido/finalizarPedido");

function execute(user, msg) {

  console.log("Opção selecionada --> ", msg);

  //Deseja visualizar o cardápio para adicionar novos itens?
  if (msg === "1") {
    
    let arrayMsgRetorno = [];
    arrayMsgRetorno.push({stage: 6});

    let menus = menu.execute(user, msg);
    arrayMsgRetorno.push({texto: menus});

    //Escolher item do menu
    //banco.db[user].stage = 6;
    return arrayMsgRetorno;
  }

  //Já fez seu pedido e deseja conferir?
  if (msg === "2") {
    let arrayMsgRetorno = resumoPedido.execute(user, msg);
    return arrayMsgRetorno;
  }

  //Deseja remover itens do seu pedido?
  if (msg === "3") {
    let arrayMsgRetorno = alterarPedido.execute(user, msg);
    return arrayMsgRetorno;
  }

  // Conferiu seu pedido e quer finalizar?
  if (msg === "4") {
    let arrayMsgRetorno = finalizarPedido.execute(user, msg);
    return arrayMsgRetorno;
  }
  
  // Deseja cancelar seu pedido?
  if (msg === "5") {
    let arrayMsgRetorno = cancelarPedido.execute(user, msg);
    return arrayMsgRetorno;
  }

  // Deseja falar com um de nossos atendentes?
  if (msg === "6") {
    console.log("Opção 6 em implementação");
    return;
  }

  //Apresenta o pedido para conferência
  if (!cardapio.menu[msg]) {
    let codInvalido = "Código inválido, digite corretamente para concluir ou realizar seu pedido.";

    let arrayMsgRetorno = [];
    //Add item ao array
    arrayMsgRetorno.push({texto:codInvalido});

    return arrayMsgRetorno;
  }
}

exports.execute = execute;
