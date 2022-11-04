const Sequelize = require('sequelize');

const sequelize = new Sequelize("test", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!");
});
const Pagamento= sequelize.define('pagamentos',{
    //attributes
    nome:{
        type: Sequelize.STRING,
    },
    VALOR:{
        type: Sequelize.DOUBLE
    }

});
Pagamento.create({
    nome:"Energia",
    VALOR: 220
})