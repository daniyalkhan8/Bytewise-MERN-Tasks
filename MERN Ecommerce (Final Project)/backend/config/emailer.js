const nodemailer = require('nodemailer');

const sendAccountCreationEmail = async (fname, lname, email) => {
    const text = `Dear ${fname} ${lname},
    We're delighted to welcome you to MERN Ecomm! As a valued member of our online shopping community, we want to express our gratitude for choosing us as your go-to destination for all your shopping needs. Get ready to embark on a fantastic retail journey filled with incredible products, exclusive deals, and exceptional customer service.
    At MERN Ecomm, we pride ourselves on offering an extensive range of high-quality products, ensuring you'll find something perfect for every occasion. Whether you're searching for stylish fashion pieces, innovative gadgets, home essentials, or thoughtful gifts, our diverse collection has you covered.`;
    const subject = `Welcome to MERN Ecomm`

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_APP_USER,
            pass: process.env.EMAIL_APP_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_APP_USER,
        to: email,
        subject: subject,
        text: text
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            return info.response;
        }
    });
}

module.exports = { sendAccountCreationEmail }