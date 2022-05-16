const {transporter} = require('../api/userMail.api');

let mailOptions = {
    from: 'farmertest98@gmail.com',
    to: '',
    subject: 'Delivery Confirmation',
    text: 'This mail is to ensure that your payment has been successfully made'
};

const validateDelivery = async(address , products , user)=>{
    if(address instanceof String && address.length>10){
        mailOptions.to = user;
      
        transporter.sendMail(mailOptions , (error , info)=>{
            if(error){
                console.log(error);
            }else{
                console.log('Email sent: '+ info.response);
            }
        });
        return true;
    }else{
        return false;
    }

}

module.exports = {validateDelivery}