const  Delivery = require('../models/Delivery');
const {transporter} = require('../api/userMail.api');
const {validateDelivery} = require('../validation/delivery');
const axios = require('axios');
//import axios from 'axios';
/*
let mailOptions = {
    from: 'farmertest98@gmail.com',
    to: '',
    subject: 'Delivery Confirmation',
    text: 'This mail is to ensure that your payment has been successfully made'
};*/

const createDelivery = async(req,res)=>{
    try{
    const {products , address ,total}= req.body;
    const userId = req.userId;
    
    const newdelivery = {
      userId,
      products,
      address,
      total 
    };
        const status = await validateDelivery(new String(address),products,userId);
        
        if(status){
           /* axios.post(`${process.env.Delivery_API}/delivery2/create`,newdelivery).then((res)=>{
                res.status(200).json(res);
            }).catch((err)=>{
                res.status(500).json("fail");
            })*/
            res.status(200).json("success");
           
        }else{
            res.status(404).send("error");
        }
      
    }catch(err){
        res.status(409).send(err);
    }
  
        
    
};
module.exports = {createDelivery};