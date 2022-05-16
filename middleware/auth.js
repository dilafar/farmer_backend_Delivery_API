const jwt = require("jsonwebtoken");
const {decode} = require("jsonwebtoken");

const auth = async(req , res , next)=>{
        try{
            const token = req.headers.authorization.split(" ")[1];
            let decodeData;
            if(token){
                decodeData = jwt.verify(token , 'test');
                req.userId = decodeData?.email;
            }

            next();

        }catch(error){
            console.log(error);
        }
}

module.exports = auth;