const mysql=require('mysql');

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'pandey@46',
    database:'person'
});

// con.connect((err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log("connected")
//     }
// });
con.query("select * from details",(err,result)=>{
    console.log("result",result)
})