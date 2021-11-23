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
    async sendActivationMail(to, link){
        await this.transporter.sendMail({
            from:process.env.SMTP_USER,
            to,
            subject:'Account activation on '+process.env.API_URL,
            text:'',
            html:`
            <div>
                <h1>Hello!</h1>
                <h2>Use this activation link to activate your account</h2>
                <a href="${link}">${link}</a>
            </div>
            `
        })
    }
}

module.exports = new MailService();