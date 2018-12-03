const fs = require('fs');
const request = require('request');


request('https://www.servicos.gov.br/api/v1/servicos?campos=id%2C%20nome%2C%20porcentagemDigital%2C%20servicoDigital%2C%20avaliacoes%2C%20orgao', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var arquivoJson = JSON.parse(body);
  console.log(arquivoJson);
 

  for( var prop in arquivoJson.resposta){

    var strId = arquivoJson.resposta[prop].id
    var id = strId.substring(44)

    var strIdOrgao = arquivoJson.resposta[prop].orgao.id
    var idOrgao = strIdOrgao.substring(70)

    arquivoJson.resposta[prop].id = id;
    arquivoJson.resposta[prop].orgao.id = idOrgao

    console.log(prop + " = " + arquivoJson.resposta[prop].id);
    console.log(prop + " = " + arquivoJson.resposta[prop].orgao.id);

    
    
  }

  fs.writeFile(__dirname + '/arquivo.json', JSON.stringify(arquivoJson.resposta))
});

