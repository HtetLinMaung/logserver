const axios = require("axios");

exports.sendSms = async (phoneno, message, senderInfo = "") => {
  try {
    return axios.post(`${process.env.mxgw_domain}/sms/sendmessage`, {
      phoneno,
      message,
      appid: "002",
      accesskey: "445fdc4bd21cbcd5",
      sender_info: senderInfo,
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};

exports.sendEmail = async (email, subject, message, senderInfo = "") => {
  try {
    console.log(`Sending email to ${email}...`);
    return axios.post(`${process.env.mxgw_domain}/email/sendmessage`, {
      toemail: email,
      body_text: message,
      subject,
      appid: "002",
      accesskey: "445fdc4bd21cbcd5",
      sender_info: senderInfo,
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};
