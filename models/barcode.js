module.exports = function(app) {
  var model = {};
  var Boleto = require('node-boleto').Boleto;

  model.santander = function() {
    var boleto = new Boleto({
      'banco': "santander", // nome do banco dentro da pasta 'banks'
      'data_emissao': new Date(),
      'data_vencimento': new Date(new Date().getTime() + 5 * 24 * 3600 * 1000), // 5 dias futuramente
      'valor': 1500, // R$ 15,00 (valor em centavos)
      'nosso_numero': "1234567",
      'numero_documento': "123123",
      'cedente': "Pagar.me Pagamentos S/A",
      'cedente_cnpj': "18727053000174", // sem pontos e traços
      'agencia': "3978",
      'codigo_cedente': "6404154", // PSK (código da carteira)
      'carteira': "102"
    });

    return boleto['linha_digitavel'];
  }

  model.bradesco = function() {
    var boleto = new Boleto({
      'banco': 'bradesco',
      'data_emissao': new Date(),
      'data_vencimento': new Date(new Date().getTime() + 5 * 24 * 3600 * 1000),
      'valor': 1500,
      'nosso_numero': '6',
      'numero_documento': '1',
      'cedente': 'Pagar.me Pagamentos S/A',
      'cedente_cnpj': '18727053000174',
      'agencia': '1229',
      'codigo_cedente': '469',
      'carteira': '25',
      'pagador': 'Nome do pagador\nCPF: 000.000.000-00',
      'local_de_pagamento': 'PAGÁVEL EM QUALQUER BANCO ATÉ O VENCIMENTO.',
      'instrucoes': 'Sr. Caixa, aceitar o pagamento e não cobrar juros após o vencimento.'
    });

    return boleto['linha_digitavel'];
  }

  return model;
}
