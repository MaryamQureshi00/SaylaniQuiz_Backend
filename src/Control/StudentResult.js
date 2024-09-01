const Quiz = require('../Model/QuizSchema');

const GetStudentResult = async(req,res)=>{
try {
    const {tToTalScoreitle ,ObtainScore,} = req.body; 
  
 

} catch (e) {
    console.log(e);
    res.status(500).send({ error: "An error occurred " });
}
};



const getQuiz = async(req, res)=>{

    try{
        const Card = req.query.Card;
        const QuizData = await Quiz.find({CardId:Card});
        res.status(200).json({
          success: true,
          QuizData,
        });


    }catch(e){

        console.log(e.message)
    }

}
module.exports={createQuiz,getQuiz}

