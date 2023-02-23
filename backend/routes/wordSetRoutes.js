import express from 'express'
import { 
AddWordSet,
showAllWordSet,
showWordSetByUsername,
EditWordSet,
DeleteWordSetByID
} from '../controllers/wordSetController.js'

const router = express.Router()
router.get('/getAllWordSet', showAllWordSet)
router.post('/getWordSetByUsername', showWordSetByUsername)
router.put('/addWordSet', AddWordSet)
router.put('/editWordSet', EditWordSet)
router.delete('/deleteWordSetByID', DeleteWordSetByID)

export default router