const {RegisterStocks,StocksDetails,StocksDetailsById,UpdateStock,DeleteStocks} = require('./stock.controller');
const router = require('express').Router() ;


router.post('/',RegisterStocks);
router.get("/",StocksDetails);
router.get("/:id",StocksDetailsById);
router.put("/",UpdateStock);
router.delete("/:id",DeleteStocks)

module.exports= router;