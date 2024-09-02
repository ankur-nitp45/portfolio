const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const corsoption = {
  origin: process.env.CLIENT,
  method: ['GET', 'POST'],
};
// dotenv configuration
dotenv.config();

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
});
