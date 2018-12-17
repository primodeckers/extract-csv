const request = require('request');

module.exports = app => {
const get =  async (req, res) => {
    
    request('https://www.servicos.gov.br/api/v1/servicos?campos=id%2C%20nome%2C%20porcentagemDigital%2C%20servicoDigital%2C%20avaliacoes%2C%20orgao', 
    
    function (error, response, body) {
    var arquivoJson = JSON.parse(body);
    

      
    for( var prop in arquivoJson.resposta){

      var strId = arquivoJson.resposta[prop].id;
      var id = strId.substring(44)
      arquivoJson.resposta[prop].idServico = id;
      delete arquivoJson.resposta[prop].id;
     
     
      arquivoJson.resposta[prop].nomeServico = arquivoJson.resposta[prop].nome
      delete arquivoJson.resposta[prop].nome
      
     

      if(arquivoJson.resposta[prop].orgao === undefined || arquivoJson.resposta[prop].orgao === null  ){
         arquivoJson.resposta[prop].orgao = {}
         arquivoJson.resposta[prop] = {}
                 
        
         
      } else{
                arquivoJson.resposta[prop].idOrgao = arquivoJson.resposta[prop].orgao.dbId;
                arquivoJson.resposta[prop].nomeOrgao = arquivoJson.resposta[prop].orgao.nomeOrgao;
                arquivoJson.resposta[prop].avaliacoesPositivas = arquivoJson.resposta[prop].avaliacoes.positivas;
                arquivoJson.resposta[prop].avaliacoesNegativas = arquivoJson.resposta[prop].avaliacoes.negativas;
                
                
                delete arquivoJson.resposta[prop].orgao.id;
                delete arquivoJson.resposta[prop].orgao.nomeOrgao;
                delete arquivoJson.resposta[prop].orgao.dbId;
                delete arquivoJson.resposta[prop].orgao.porcentagemDigital;
                delete arquivoJson.resposta[prop].orgao.tempoMedioEspera;
                delete arquivoJson.resposta[prop].orgao.porcentagemAvaliacoesPositivas;
                delete arquivoJson.resposta[prop].orgao.qtdTotal;
                delete arquivoJson.resposta[prop].orgao.qtdTotalSolicitacoes;
                delete arquivoJson.resposta[prop].orgao.qtdDenuncias;
                delete arquivoJson.resposta[prop].orgao.qtdReclamacao;


                delete arquivoJson.resposta[prop].avaliacoes.positivas;
                delete arquivoJson.resposta[prop].avaliacoes.negativas;

                delete arquivoJson.resposta[prop].orgao
                delete arquivoJson.resposta[prop].avaliacoes

               

      } 

           
    

    } 
    arquivoJson2 = JSON.stringify(arquivoJson.resposta)
    var json =  arquivoJson2.replace(/{},/g,'');
    var Json2 = JSON.parse(json);
    res.json(Json2)
    
    
    
  })

}

 return { get }
}



