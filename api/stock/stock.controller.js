const {registerstock,StockDetails,StockDetailsById,UpdateDetails,DeleteStock} = require('./stock.service');

const RegisterStocks=(req,res)=>{
    const body = req.body;
    if(body.type!="buy" && body.type!="sell"){
          return res.json({
                status:
          })
    }else if(body.shares<1 && body.shares>100){
        return res.json({
            status:400,
            message:"Share Value out of range"
        })
    }else{
        registerstock(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database Connection error"
                })
              }
              return res.status(200).json({
                sucess:1,
                data:results
        })
    })
   }
}

const StocksDetails=(req,res)=>{
    StockDetails((err,results)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.json({
            success:1,
            data:results
        })
    })
}



const StocksDetailsById =(req,res)=>{
    const id =  req.params.id;
    StockDetailsById(id,(err,results)=>{
        if(err){
            console.log(err);
            return;
        }
        if(!results){
            return res.status(404).json({
                status:404,
                message:"Record Not Found"
            });
        }
        return res.status(200).json({
            status:200,
            data:results
        })
    })
}

const UpdateStock =(req,res)=>{
    const body = req.body;
    UpdateDetails(body,(err,results)=>{
        if(err){
            console.log(err);
            return false;
        }
         if(results.affectedRows==0){
             return res.status(405).json({
                 status:405,
                 message:"Failed to Update Stock Details"
             })
         }
        return res.status(200).json({
            status:200,
            message:"Updated Sucessfully"
        })
    })
}



const DeleteStocks =(req,res)=>{
    const id =  req.params.id;
   
    DeleteStock(id,(err,results)=>{
        if(err){
            console.log(err);
            return;
        }
        if(results.affectedRows==0){
            return res.status(405).json({
                status:405,
                message:"Record not found"
            });
        }
        return res.status(200).json({
            status:200,
            message:"Stock deleted Sucessfully"
        })
    })
}


module.exports={
   RegisterStocks:RegisterStocks,
   StocksDetails:StocksDetails,
   StocksDetailsById:StocksDetailsById,
   UpdateStock:UpdateStock,
   DeleteStocks:DeleteStocks


}