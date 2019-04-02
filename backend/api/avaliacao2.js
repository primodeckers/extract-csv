const Pool = require("pg").Pool;
var copyTo = require("pg-copy-streams").to;
var fs = require("fs");
var path = require("path");
var mime = require("mime");

const pool = new Pool({
  user: "avaliacao",
  host: "localhost",
  database: "postgres",
  password: "h4ck3r",
  port: 5432
});


module.exports = app => {
  const getAvaliacoes = (req, res, next) => {
    var fileName = "tb_avaliacao.csv";
    pool.connect(function(err, client, done) {
      var stream = client.query(
        copyTo("COPY avaliacao.tb_avaliacao TO STDOUT CSV HEADER DELIMITER ';'")
      );
      
      toString(stream.pipe(fs.createWriteStream(fileName)));
      console.log('passei por aqui primeiro');
      
      stream.on("end", done);
      stream.on("error", done);
      
      
      
    });

    
   
    
  };

  const getFile = (req, res, next) => {
    var fileName = req.params.name;
      const options = {
      root: "/home/primodeckers/reposirory/extract-csv/backend/",
      dotfiles: "ignore",
      headers: {
        "x-timestamp": Date.now(),
        "x-sent": true
      }
    };
    
    res.sendFile(fileName, options, (err) => {
      if (err) {
        next(err);
      } else {
        console.log("Enviando....:", fileName);
      }
    });
  };
  return { getAvaliacoes, getFile };
};
