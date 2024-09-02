const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.CLIENT;

const corsoption = {
  origin: url,
  method: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};
// dotenv configuration

// rest object
const app = express();

//middlewares
app.use(cors(corsoption));
app.use(express.json());

//routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'));

// ports
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT} 🚀`);
  console.log(process.env.CLIENT);
});
