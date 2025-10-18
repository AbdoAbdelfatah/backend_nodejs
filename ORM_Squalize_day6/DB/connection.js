import {Sequelize} from 'sequelize'

export const db_config=new Sequelize('bovpkjfmboxkotbgtr1a','uzu9x5mfahnwmihd','Ke3rbv0qohScHORtqh55',{
    host:'bovpkjfmboxkotbgtr1a-mysql.services.clever-cloud.com',
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
