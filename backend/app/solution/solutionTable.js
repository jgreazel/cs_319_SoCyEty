const connection = require('../../database');

class SolutionTable{
    static getSolutionsForQ(questionId){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM solution WHERE questionId = ' + questionId, (err, rows) => {
                if(err){
                    return reject(err);
                }
                resolve(rows); //may need to do rows.rows[0] or some other variation
            })
        })
    }
}

module.exports = SolutionTable;