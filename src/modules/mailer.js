const path = require('path')
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const dotenv = require('dotenv')

dotenv.config()

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PSW_MAIL,
    }
  });

  transport.use('compile', hbs({
      viewEngine: {
        defaultLayout: undefined,
        partialsDir: path.resolve('./src/resources/mail/')
      },
      viewPath: path.resolve('./src/resources/mail/'),
      extName: '.html',
  }))

  module.exports = transport