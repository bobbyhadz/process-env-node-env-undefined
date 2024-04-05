// Make sure to create a .env file containing NODE_ENV="development"

import * as dotenv from 'dotenv';

dotenv.config();

console.log(process.env.NODE_ENV);
