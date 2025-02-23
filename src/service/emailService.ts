import emailjs from 'emailjs-com';

const sendEmail = (formData: any) => {
  emailjs.send(
    'service_7uw2g1j', // Ganti dengan Service ID kamu
    'template_11qfm1o', // Ganti dengan Template ID kamu
    formData,
    'wmyo5nLs10ldFtw53' // Ganti dengan User ID kamu
  )
  .then((result) => {
    console.log('Email sent successfully:', result.text);
  })
  .catch((error) => {
    console.error('Error sending email:', error.text);
  });
};

export default sendEmail;
