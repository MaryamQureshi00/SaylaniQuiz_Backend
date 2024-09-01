const express=require('express');
const cont = require('../Control/control.js')

const quizWork = require('../Control/quizControl.js')
const card = require('../Control/cardControl.js')


const router = express.Router()
 //user route
router.post('/signup', cont.userSignup);     
router.get("/loginUser",cont.loginUser)     
router.get("/getallUser",cont.getALLRequest)  
// jitna ram s hosky ktna wrna kl krlena cha  subh s bethy hoye ap g g ab akk satt or time mil geya aram sa hang hu raha hay per tension  nahi mujha :) versal open krna 


//Quiz Route
router.post("/quiz",quizWork.createQuiz)  
router.get("/getquiz",quizWork.getQuiz) 

//  both quiz and card 
router.post("/createQuizCard",card.createCardAndQuiz)  
router.get("/deleteQuizCard",card.deleteCardAndQuiz) 



//Create Card
router.post("/CardCreate",card.CreatCard)
router.get("/getcard",card.getCard) 


module.exports=router