const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'eduaas_db',
});

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'express_db',
// });

app.use(express.json())
app.use(cors());

app.get("/api/get/question", (req, res) => {
    const sqlSelect ="select * from student";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/api/get/answer", (req, res) => {
    const sqlSelect ="select * from teacher";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// app.get("/api/get/users", (req, res) => {
//     const sqlSelect ="select * from users";
//     db.query(sqlSelect, (err, result) => {
//         res.send(result);
//     });
// });

app.post("/api/post/answer", (req, res) => {
    const sqlInsert = "INSERT INTO teacher(`t_name`, `answer`) VALUES(?)";

    const values = [
        req.body.t_name,
        req.body.answer,
    ];

    db.query(sqlInsert, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("teacher create success!");
    })
})


app.post("/api/post/question", (req, res) => {
    const sqlInsert = "INSERT INTO student(`s_name`, `question`) VALUES(?)";

    const values = [
        // req.body.id,
        req.body.s_name,
        req.body.question,
      ];
    
      db.query(sqlInsert, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("student create success!");
      });
});

// app.post("/api/post/question", (req, res) => {
//     const sqlInsert = "INSERT INTO users(`name`, `email`) VALUES(?)";
    
//     const values = [
//         // req.body.id,
//         req.body.name,
//         req.body.email,
//       ];
    
//       db.query(sqlInsert, [values], (err, data) => {
//         if (err) return res.json(err);
//         return res.json("create success!");
//       });
// });




app.listen(3001, () => {
    console.log('eduaas backend connect!');
});