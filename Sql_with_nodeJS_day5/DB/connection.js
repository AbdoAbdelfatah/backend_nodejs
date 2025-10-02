import mysql2 from 'mysql2'     

const DB_connection=mysql2.createConnection({
    host:'localhost',
    user:'Abdo',
    database:'onlineShopping',
    password:'A123'
})
 
DB_connection.connect((err)=>{
     if(err){
        console.log(err);
     }
     else{
      console.log('databse connected successful');
     }
})


export default DB_connection;