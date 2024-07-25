import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';


const API_GMAIL = async (urlObject, payload) => {

    console.log('urlObject:',urlObject);
    console.log('payload', payload);
    try {
        const response = await axios({
            method: urlObject.method,
            url: `${API_URL}/${urlObject.endpoint}`,
            data: payload,
        });
        return response;
    } catch (error) {
        // Handle or log the error here
        console.error("API call failed:", error);
        throw error;  
    }
}

export default API_GMAIL;