const Card= require('../Model/cardSchema')
 


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
module.exports={getCard,CreatCard}

