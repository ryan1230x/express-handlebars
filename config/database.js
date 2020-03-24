const Sequelize=require('sequelize');
module.exports=new Sequelize('shopping_app', 'ryan', 'ryan', {
    host:'127.0.0.1',
    dialect:'mysql'
})