const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

//sincrona

const conteudo = fs.readFileSync(caminho, 'utf-8')
//console.log(conteudo);



//assincrono
fs.readFile(caminho, 'utf8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    //console.log(`${config.resposta}`);
    
})

//sincrona 
const config2 = require(caminho);
//console.log(config2.resposta)



for( var prop in config2.resposta){

    var strId = config2.resposta[prop].id
    var id = strId.substring(44)

    var strIdOrgao = config2.resposta[prop].orgao.id
    var idOrgao = strIdOrgao.substring(70)
 
    config2.resposta[prop].id = id;
    config2.resposta[prop].orgao.id = idOrgao

    console.log(prop + " = " + config2.resposta[prop].id);
    console.log(prop + " = " + config2.resposta[prop].orgao.id);

    
  }