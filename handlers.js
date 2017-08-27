var exec = require("child_process").exec;
var qs = require("querystring");

function senha(req, res) {

  if(req.method == "GET"){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Senha?");
    res.write("<form method=post>");
    res.write("<input type=text name=senha>");
    res.write("<input type=submit />");
    res.write("</form>");
    res.end();
  } else {
    var body = '';
    req.on('data', function(data){
      body+= data;
    });
    req.on('end', function(data) {
      var senha= qs.parse(body);
      res.writeHead(200, {"Content-Type": "text/html"});
      if(senha.senha == '54321'){
          res.write("Acertou!");
      } else {
          res.write("Senha Invalida!");
      }
      res.end();
    });
  }
}

exports.senha = senha;
