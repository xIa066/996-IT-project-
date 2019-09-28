const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();

//assign AWS user credentials and region
var cred = new AWS.Credentials(process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY);
AWS.config.credentials = cred;
AWS.config.update({region: 'ap-southeast-2'});
