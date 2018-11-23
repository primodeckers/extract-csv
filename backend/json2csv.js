const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');

const fields = [{
                label: 'id_servico',
                value: 'id'
                },{
                label: 'id_orgao',
                value: 'orgao.dbId'
                },{
                label: 'nome_orgao',
                value: 'orgao.nomeOrgao'
                },{
                label: 'servico',
                value: 'nome'
                },{
                label: 'servico_digital',
                value: 'servicoDigital'
                },{
                label: 'avaliacoes_negativas',
                value: 'avaliacoes.negativas'
                },{
                label: 'avaliacoes_positivas',
                value: 'avaliacoes.positivas'
                },{
                label: 'porcentagem_digital',
                value: 'porcentagemDigital'
                }];


const opts = { fields };

const caminho = __dirname + '/arquivo.json'
const config2 = require(caminho);

try {
  
  const json2csvParser = new Json2csvParser({ fields, quote: '', delimiter: ';' });
  const csv = json2csvParser.parse(config2.resposta);
  console.log(csv);
  fs.writeFile(__dirname + '/csv.csv', csv)
} catch (err) {
  console.error(err);
}