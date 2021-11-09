const infoCliente = require("../informacoesCliente");

function agradecimentos(user, msg) {

let fim = 
`Obrigado pelo contato 💖
Se possivel segue no Instagram\n *@mimi_accessories_0*

A ${infoCliente.info.NOME_CLIENTE} agradece à preferência e até breve.
`;    
return fim;
}

function cancelamentoPedido() {

  let fim = 
`Não desista escolha! 🥺🥺🥺 `;

  let fimAgradecimentos = agradecimentos();
    
  return fim + fimAgradecimentos;
}
  
module.exports = {agradecimentos, cancelamentoPedido};
