const Session = require('../app/account/session');
const AccountTable = require('../app/account/table');
const {hash} = require('../app/account/helper');

const setSession = ({username, res, sessionId}) => {
    return new Promise((resolve, reject)=>{
        let session, sessionString;

        if(sessionId){
            sessionString = Session.sessionString({username, id: sessionId})

            setSessionCookie({sessionString, res})
            resolve({message: 'session restored'})
        }else{
            session = new Session({username});
            sessionString = session.toString();

            AccountTable.updateSessionId({
                sessionId: session.id, 
                usernameHash: hash(username)
            })
                .then(()=>{
                    setSessionCookie({sessionString, res})
    
                    resolve({message: 'session created'})
                })
                .catch(error => reject(error));
        }
    })
}

setSessionCookie = ({sessionString, res})=>{
    res.cookie('sessionString', sessionString, {
        expire: Date.now() + 3600000,
        httpOnly: true,
        // secure: true  //use with https
    });
}
module.exports = {setSession};