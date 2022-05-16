const {validateCard} = require('../validation/cardPayment');
const {validateMobile} = require('../validation/mobilePayment');


const cardPayment = async(req,res)=>{
    let card = req.body;
    let pay =  validateCard(new String(card.cardHolder), new Number(card.cardNo),new Number(card.cvcCode),new Number(card.total));

    if(pay){
        res.status(201).send(pay);
    }else{
        res.status(502).send(pay);
    }
}

const mobilePayment = async(req,res)=>{
    let mobile = req.body;
    let pay2 =  validateMobile(new Number(mobile.phoneNo), new Number(mobile.pin),new Number(mobile.total));

    if(pay2){
        res.status(201).send(pay2);
    }else{
        res.status(502).send(pay2);
    }
}

module.exports = {cardPayment ,mobilePayment };