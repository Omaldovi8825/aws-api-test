const mysql = require('mysql2');

// create the connection to database

const connection = mysql.createConnection({
    host: 'test1.cdnpwxaawgds.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Tollotzin25',
    database: 'test',
    port: '3306'
});    


const getAll = (req, res) => {

    const query = 'SELECT * FROM `usuarios`'

    const cb = (err, results, fields) => {
        if(err){
            res.status(500).json({ mensaje: 'Error al hacer consulta', err })
        }
        // console.log(results)
        // console.log(fields)
        res.status(200).json({ data: results })
    }

    connection.query( query, cb ) 
}

export default getAll