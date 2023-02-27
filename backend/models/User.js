import db from "../config/database";
export const getAllUser = (result) => {
    db.query("INSERT INTO `user`(`id`, `username`, `password`, `active`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]')"
    , (err, results) => {
        if(err){
            console.log(err)
            result(err, null);
        }else {
            result(null, results);
        }
    })
}
