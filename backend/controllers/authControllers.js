import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
import db from "../config/database.js";

export const register = async (req, res) => {
    try {
        const {username, password} = req.body
        if(!username || !password){
            return res.status(400).json({message: 'Please enter username and password'})
        }
        db.query("SELECT * FROM `user` where username = ?", 
        username,
        function (err, results) {
            if(err) throw err;
            if (results.length){
                return res.status(400).json({message: "Username already exist"})
            }
            else{
                // encode password before send to database
                const hashPassword = bcrypt.hashSync(password, 8)
                db.query("INSERT INTO `user`(`username`, `password`) VALUES (?,?)",
                [username, hashPassword])
                res.send("Success")
            }
        })
    } catch (error) {
        console.log(error);
    }
} 

