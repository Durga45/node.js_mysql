const express=require("express");
const con=require("./config");
const { error } = require("console");
const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
    con.query("select * from details",(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    });

});
app.post("/",(req,res)=>{
   
    //const data={according to table this is through api}
    //now through postman
    const data=req.body;
    con.query("insert into details SET ?",data,(error,result,fields)=>{
       if(error) error;
       res.send(result)
    })
})
app.put("/:id",(req,res)=>{
    // const data=[123,"chetan","gowda","navlur","chennai",2] this is static
    const data=[req.body.personid,req.body.firstname,req.body.lastname,req.body.address,req.body.city,req.params.id]
    con.query("update details SET personid=?,firstname=?,lastname=?,address=?,city=? where personid=?",data,(error,result,fields)=>{
        if(error)  error;
        res.send(result)
    });
})
app.delete("/:id",(req,res)=>{
    
    con.query("delete from details WHERE personid="+req.params.id,(error,result)=>{
        if(error) error;
        res.send(result)
    });
})
app.listen(8080)