const Quiz = require('../Model/QuizSchema');

const createQuiz = async(req,res)=>{
try {
    const data= req.body.data;
    const Card = req.query.Card;
  
 const quizDocuments = data.map(quiz => ({   
      question: quiz.question,
      options: quiz.options,
      answer: quiz.answer,
      CardId:Card
    }));

    await Quiz.insertMany(quizDocuments);

    res.status(201).send({    
        message: "User successfully create quiz ",
        quizDocuments
    });
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


