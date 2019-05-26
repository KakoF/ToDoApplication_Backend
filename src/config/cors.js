module.exports = function(req, res, next){
    //PERMITE REQUISIÇÕES DE ORIGENS DIFERENTES DE APLICAÇÕES
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}