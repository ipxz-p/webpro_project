import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
import db from "../config/database.js";


export const register = async (req, res) => {
    try {
        const {username, password, checkPassword} = req.body
        if(!username || !password || !checkPassword){
            return res.status(400).json({message: 'Please enter username and password'})
        }
        if(username.length < 4){
            return res.status(400).json({message: 'username need to be 4 characters or longer'})
        }
        if(password.length < 6){
            return res.status(400).json({message: 'password need to be 6 characters or longer'})
        }
        if(password != checkPassword){
            return res.status(400).json({message: "Password and confirm password don't match"})
        }
        db.query("SELECT * FROM `user` where username = ? limit 1", 
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
                res.status(200).json({
                    message: 'Success'
                })
            }
        })
    } catch (error) {
        console.log(error);
    }
} 

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({message: 'Please enter username and password'})
        }
        db.query("SELECT * FROM `user` where username = ? limit 1", 
        username,
        async function (err, results) {
            if(err) throw err;
            if (!results.length){
                return res.status(400).json({message: "Username or password incorrect"})
            }
            // compare password
            const match = await bcrypt.compare(password, results[0].password)
            if(!match){
                return res.status(400).json({message: "Username or password incorrect"})
            }
            else{
                let token = jwt.sign({id: username}, process.env.ACCESS_TOKEN, {
                    expiresIn: 86400 //1 day
                })
                res.status(200).json({
                    username: username,
                    accessToken: token
                })
            }
        })
    } catch (error) {
        console.log(error);
    }
}
