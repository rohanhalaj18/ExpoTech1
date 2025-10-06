const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


const ConformOrder = async (name,email,order,orderprice,orderdetails) => {
  await transporter.sendMail({
    from: "ExploreTech <process.env.EMAIL_USER>",
    to: email,
    subject: "Order Confirmation - ExploreTech",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #27ae60;">Thank you for your order, ${name}!</h2>   
            <p>We have received your order for "${order}" priced at ₹${orderprice}. Our team is currently processing your order and will update you shortly.</p>
            <p>Order Details:</p>
            <p>${orderdetails}</p>
            <p>If you have any questions or need further assistance, please feel free to reply to this email.</p>
            <br/>
            <p>Contact Details:</p>
            <p><strong>Email:explorotech411@gmail.com</strong>
            <p><strong>Phone Number:8152021285</strong></p>
            <br/>
            <p>Best regards,<br/>The ExploreTech Team</p>
      </div>
      `,
  });
}
const enquiry = async (firstName, lastName, email, phoneNumber, subject, message) => {
    await transporter.sendMail({
      from: "ExploreTech <process.env.EMAIL_USER>",
      to: email,
      subject: "We Received Your Enquiry - ExploreTech",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #27ae60;">Thank you for reaching out, ${firstName}!</h2>
            <p>We have received your enquiry regarding "${subject}". Our team will review your message and get back to you as soon as possible.</p>
            <p>If you have any additional information to provide, please feel free to reply to this email.</p>
            <br/>
            <p>contact Details:</p>
            <p><strong>Email:</strong>explorotech411@gmail.com</>
            <p><strong>Phone Number:</strong>8152021285</p>
            <br/>
            <p>Best regards,<br/>The ExploreTech Team</p>
        </div>
        `,
    });
}
const enquiryNotification = async (firstName, lastName, email, phoneNumber, subject, message) => {
  await transporter.sendMail({
    from: "ExploreTech <process.env.EMAIL_USER>",
    to: "rohanhalaj1@gmail.com",
      subject: `New Enquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #e01f1fff;">New Enquiry Received</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong><br/> ${message}</p>
        </div>
      `,
  });
}
module.exports = { ConformOrder, enquiry, enquiryNotification };