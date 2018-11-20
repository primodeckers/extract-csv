const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');

const fields = [{
                  label: 'id',
                  value: 'id'
                },{
                  label: 'nome',
                  value: 'nome'
                },{
                  label: 'porcentagemDigital',
                  value: 'porcentagemDigital'
                },{
                  label: 'servicoDigital',
                  value: 'servicoDigital'
                },{
                  label: 'id_orgao',
                  value: 'orgao.id'
                },{
                  label: 'db_id',
                  value: 'orgao.dbId'
                },{
                  label: 'nome_orgao',
                  value: 'orgao.nomeOrgao'
                },{
                  label: 'porcentagem_digital',
                  value: 'orgao.porcentagemDigital'
                },{
                  label: 'tempo_medio_espera',
                  value: 'orgao.tempoMedioEspera'
                },{
                  label: 'porcentagem_avaliacoes_positivas',
                  value: 'orgao.porcentagemAvaliacoesPositivas'
                },{
                  label: 'qtd_total',
                  value: 'orgao.qtdTotal'
                },{
                  label: 'qtd_total_solicitacoes',
                  value: 'orgao.qtdTotalSolicitacoes'
                },{
                  label: 'qtd_denuncias',
                  value: 'orgao.qtdDenuncias'
                },{
                  label: 'qtd_reclamacao',
                  value: 'orgao.qtdReclamacao'
                },{
                  label: 'avaliacoes_positivas',
                  value: 'avaliacoes.positivas'
                },{
                  label: 'avaliacoes_negativas',
                  value: 'avaliacoes.negativas'
                }];


const opts = { fields };

const caminho = __dirname + '/arquivo.json'
const config2 = require(caminho);

try {
  
  const json2csvParser = new Json2csvParser({ fields, quote: '' });
  const csv = json2csvParser.parse(config2.resposta);
  console.log(csv);
  fs.writeFile(__dirname + '/csv.csv', csv)
} catch (err) {
  console.error(err);
}