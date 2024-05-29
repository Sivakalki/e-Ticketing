// emailService.js

const sgMail = require('@sendgrid/mail');

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Sends an email using SendGrid.
 * @param {string} to Email address of the recipient.
 * @param {string} subject Email subject.
 * @param {string} text Email body text.
 */
async function sendEmail(to, subject, text) {
  try {
    const msg = {
      to,
      from: 'sivakalkipusarla6@gmail.com', // Replace with your sender email address
      subject,
      text,
    };
    await sgMail.send(msg);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

module.exports = sendEmail;
