const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_AP_KEY)

const sendWelcomeMail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'panneer3110dev@gmail.com',
        subject:'Thanks for Joining In..',
        text:`Welcome to the app ${name},Let me know you get along with the app`
    })
}


const sendCancellationMail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'panneer3110dev@gmail.com',
        subject:'Its Pleasure having you as a customer',
        text:`Hello ${name},Hope your feedBack would help us improve`
    })
}
module.exports={
    sendWelcomeMail,
    sendCancellationMail
}