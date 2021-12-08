const nodemailer = require('nodemailer')

class MailService{

    constructor(){
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            host:process.env.SMTP_HOST,
            port:process.env.SMTP_PORT,
            secure:false,
            requireTLS: true,
            auth:{
                user:process.env.SMTP_USER,
                pass:process.env.SMTP_PASSWORD
            }
        })
    }
    async sendActivationMail(to, link,name,surname){
        await this.transporter.sendMail({
            from:process.env.SMTP_USER,
            to,
            subject:'Account activation on '+process.env.API_URL,
            text:'',
            html:`
            <div>
                <h1>Hello, ${surname+" "+name}!</h1>
                <h2>Use this activation link to activate your account on ${process.env.CLIENT_URL}</h2>
                <a href="${link}">${link}</a>
            </div>
            `
        })
    }

    async sendEventMail(to, name,surname, cost){
        await this.transporter.sendMail({
            from:process.env.SMTP_USER,
            to,
            subject:'You have succesfully ordered an event!',
            text:'',
            html:`
            <div>
                <h1>Hello, ${surname+" "+name}!</h1>
                <h2>Thank you for ordering event in our agency! We will write you soon.</h2>
                <h2>Cost for your event will be ${cost} r.</h2>
            </div>
            `
        })
    }
}

module.exports = new MailService();