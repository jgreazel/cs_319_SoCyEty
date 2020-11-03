const connection = require('../../database');

class QuestionTable{
    static getAllQuestions(){
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM question', (err, response) => {
                if(err){
                    return reject(err);
                }
                resolve(response.rows); //may need to do rows.rows[0] or some other variation
            })
        })
    }

    static storeQuestion(question){
        const {questionBody, questionAuthor, dateAsked} = question;
        return new Promise((resolve, reject)=>{
            connection.query(
                'INSERT INTO question("questionBody", "questionAuthor", "dateAsked") VALUES($1, $2, $3) RETURNING id',
                [questionBody, questionAuthor, dateAsked],
                (err, response)=>{
                    if(err) return reject(err);

                    const qId = response.rows[0].id;
                    resolve({qId})
                }
            )
        })
    }

}

module.exports = QuestionTable;