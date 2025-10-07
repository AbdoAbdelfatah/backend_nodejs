import {Sequelize} from 'sequelize'

export const db_config=new Sequelize('OnlineShopping','Abdo','A123',{
    host:'localhost',
    dialect:'mysql'
})


export const DB_connection=async()=>{
    try {
        await db_config.sync({alter:true,force:false});
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
