var http = require('http')
    ,app = require('./config/express');
    
http.createServer(app).listen(process.env.PORT || 5000 , '0.0.0.0', function(){

console.log("Server started...");
});

//listen(3000, function() {
 //  console.log('Servidor escutando na porta: ' + this.address().port);
//}    --> porta utilizada para o ambiente de desenvolvimento



