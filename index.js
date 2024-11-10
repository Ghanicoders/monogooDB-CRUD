
const express = require('express')
const app = express()
const connectDB = require('./config/db')
const productRoutes = require('./routes/productsRoute')

app.use(express.json());

const port = 3000

// Connect to MongoDB
connectDB();
app.use('/api',productRoutes)
app.get('/',(req, res) => {
    res.send('Hello World!')

})

app.listen(port, () => {
    console.log(`Product app running on port ${port}`)
})
