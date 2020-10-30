const connection = require('../../database');

class QuestionTable{
    static getAllQuestions(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM question', (err, rows) => {
                if(err){
                    return reject(err);
                }
                resolve(rows); //may need to do rows.rows[0] or some other variation
            })
        })
    }
}

module.exports = QuestionTable;