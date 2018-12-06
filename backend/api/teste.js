const request = require('request');
request('https://www.servicos.gov.br/api/v1/servicos?campos=id%2C%20nome%2C%20porcentagemDigital%2C%20servicoDigital%2C%20avaliacoes%2C%20orgao', 
    
function (error, response, body) {
var arquivoJson = JSON.parse(body);  

console.log(arquivoJson.resposta);
});