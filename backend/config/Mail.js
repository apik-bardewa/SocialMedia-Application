import nodeMailer from 'nodeMailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use true for port 465, false for port 587
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

 const sendMail = async (receiver,otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: receiver,
    subject: "Reset your password",
    html: `<p>Reset your password your otp is <b>${otp}</b></p>`
})};
export default sendMail;

