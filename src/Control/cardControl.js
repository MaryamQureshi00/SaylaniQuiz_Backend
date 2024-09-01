const Card= require('../Model/cardSchema')
const Quiz = require('../Model/QuizSchema');



const CreatCard =async (req,res)=>{  /// 
    try {
        const {title ,image} = req.body; 
        const data = {title,image };
        const card = new Card(data);

        console.log(card);
        // ap suy page sbatye meeting start hogye 

        await card.save();
        res.status(201).send({    
            message: "Crad has being Created",
            card
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "An error occurred while signing up" });
    }
}



const getCard = async(req, res)=>{

    try{
        const QuizData = await Card.find();
        res.status(200).json({
          success: true,
          QuizData,
        });


    }catch(e){

        console.log(e.message)
    }

}




const createCardAndQuiz = async (req, res) => {
    try {
        // Extract title and image from the request body for the card
        const { title, image, quizzes } = req.body;

        // Create and save the card
        const cardData = { title, image };
        const card = new Card(cardData);
        await card.save();

        // If quizzes data is provided, create quizzes linked to the card
        if (quizzes && quizzes.length > 0) {
            const quizDocuments = quizzes.map(quiz => ({
                question: quiz.question,
                options: quiz.options,
                answer: quiz.answer,
                CardId: card._id // Link the quiz to the newly created card
            }));

            await Quiz.insertMany(quizDocuments);
        }

        // Send a successful response with the card and quizzes
        res.status(201).send({
            message: "Card and quizzes have been created successfully",
            card,
            quizzes: quizzes || []
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "An error occurred while creating the card and quizzes" });
    }
};

const deleteCardAndQuiz = async (req, res) => {
    try {
        const { cardId } = req.query;

        // Delete the card
        const card = await Card.findByIdAndDelete(cardId);

        if (!card) {
            return res.status(404).send({ error: "Card not found" });
        }

        // Delete quizzes associated with the card
        await Quiz.deleteMany({ CardId: cardId });

        res.status(200).send({
            message: "Card and associated quizzes have been deleted successfully"
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: "An error occurred while deleting the card and quizzes" });
    }
};


module.exports={getCard,CreatCard,createCardAndQuiz,deleteCardAndQuiz}

