require('dotenv').config();
const express = require('express');
const app = express();
const StockRouter = require('./api/stock/stock.route')

app.use(express.json());

app.use('/api/stock',StockRouter);


app.listen(process.env.APP_PORT,()=>{
    console.log("Server up  and running on PORT:",process.env.APP_PORT)
})