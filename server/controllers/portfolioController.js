const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

// transport
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: 'Please provide all fields',
      });
    }

    // email matter
    transporter.sendMail({
      to: process.env.Email,
      from: 'ankurwalker2002@outlook.com',
      subject: 'Regarding Mern-portfolio website',
      html: `
            <h5> Detail Information </h5>
            <ul>
               <li><p>Name: ${name}</p></li>
               <li><p>Email: ${email}</p></li>
               <li><p>Message: ${msg}</p></li>
            </ul>
            `,
    });

    return res.status(200).send({
      success: true,
      message: 'message send successfully',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Send email API error',
      error,
    });
  }
};

module.exports = { sendEmailController };
