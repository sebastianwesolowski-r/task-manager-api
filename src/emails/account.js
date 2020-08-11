const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'cursedyou33@gmail.com',
        subject: 'Thank for joining Task App!',
        text: `Hello ${name}`
    })
    .then(() => console.log('message sent'))
    .catch(e => console.log(e));
};

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'cursedyou33@gmail.com',
        subject: "We are sad that you are leaving us",
        text: `Hey ${name} your account have been successfully deleted. You can help us with improving our platform`
    })
    .then(() => console.log('message sent'))
    .catch(e => console.log(e));
};

module.exports = {sendWelcomeEmail, sendFarewellEmail};