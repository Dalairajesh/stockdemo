const pool = require('../../config/database');

module.exports={

    registerstock:(data,callback)=>{
       pool.query(
           `insert into buy_sell_details(user_id,type,symbol,shares,price) VALUES(?,?,?,?,?)`,
           [
               data.user_id,
               data.type,
               data.symbol,
               data.shares,
               data.price
           ],(err,result,fields)=>{
            if(err){
               
                console.log(err)
                return callback(err)

            }else{
                return callback(null,result)
            }
         }
       )
    },

    StockDetails:callback=>{
        pool.query(
            `SELECT * FROM buy_sell_details`,
            [],
            (err,results,fields)=>{
                if(err){
                    return callback(err);
                }
                return callback(null,results)
            }
        )
    },


  StockDetailsById:(id,callback)=>{
    pool.query(
        `SELECT * FROM buy_sell_details WHERE id=?`,
        [id],
        (err,results,fields)=>{
            if(err){
                return callback(err);
            }
            return callback(null,results[0])
        }
    )
  },

  UpdateDetails:(data,callback)=>{
      console.log(data);
    pool.query(
        `update buy_sell_details SET user_id=?,type=?,symbol=?,shares=?,price=? WHERE id=?`,
        [
               data.user_id,
               data.type,
               data.symbol,
               data.shares,
               data.price,
               data.id
        ],
        (err,results,fields)=>{
            if(err){
               
                return callback(err);
            }else{
              
                return callback(null,results);
               
            }
          
            
        }
    )

  },

  DeleteStock:(id,callback)=>{
    
    pool.query(
        `delete from buy_sell_details WHERE id=?`,
        [id],
        (error,results,fields)=>{
            if(error){
                console.log(error)
                return callback(error);
             }
              console.log(results)
             return callback(null,results);
        }
    )

  }

}