const express = require('express');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/products.js');
const contactRoutes = require('./routes/contact.js');

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
