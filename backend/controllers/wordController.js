import {
    addWord,
    getAllWord
} from "../model/word.js";
    
export const AddWord = (req, res) => {
    const {thai, english, type, wordset_id} = req.body;
    if(!thai || !english || !type){
        return res.status(400).json({
            message: "Please enter all data"
        })
    }
    addWord(thai, english, type, wordset_id, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const GetAllWord = (req, res) => {
    const {wordset_id} = req.body;
    getAllWord(wordset_id, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}