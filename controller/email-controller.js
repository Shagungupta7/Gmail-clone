import Email from "../model/email.js";


export const saveSentEmail = async (request, response) => {
    try{
        const email = new Email(request.body);
        await email.save();

        response.status(200).json({message: 'Email saved successfully'});
    }catch(error){
        response.status(500).json({message: error.message});
    }
}