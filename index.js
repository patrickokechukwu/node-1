


// hello-world.js
console.log("HELLO WORLD");



// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});



// read-file.js
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" created successfully!');
});

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Data from welcome.txt:', data);
});

// password-generator.js
const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
    strict: true
  });
  console.log('Generated password:', password);
}

generateRandomPassword();



// email-sender.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password'
  }
});

const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'recipient_email@example.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});


