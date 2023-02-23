import {
getAllWordSet,
getWordSetByUsername,
addWordSet,
editWordSet,
deleteWordSetByID
} from "../model/wordSet.js";

export const showAllWordSet = (req, res) => {
    getAllWordSet((err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const showWordSetByUsername = async (req, res) => {
    const {username} = req.body;
    getWordSetByUsername(username, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const AddWordSet = async (req, res) => {
    const {title, description, username} = req.body;
    if(!title || !description){
        return res.status(400).json({message: 'Please enter title and description'})
    }
    addWordSet(title, description, username, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const EditWordSet = async (req, res) => {
    const {title, description, wordSet_id} = req.body;
    if(!title || !description){
        return res.status(400).json({message: 'Please enter title and description'})
    }
    editWordSet(title, description, wordSet_id, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}

export const DeleteWordSetByID = async (req, res) => {
    const { wordSet_id } = req.body;
    deleteWordSetByID(wordSet_id, (err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })
}