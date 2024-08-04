import mongoose from 'mongoose';

const Connection = async () => {
    const DB_URL = 'mongodb://shagungupta0307:gmailclone0307@ac-o18nsyz-shard-00-00.kc4hvnz.mongodb.net:27017,ac-o18nsyz-shard-00-01.kc4hvnz.mongodb.net:27017,ac-o18nsyz-shard-00-02.kc4hvnz.mongodb.net:27017/?ssl=true&replicaSet=atlas-lxnaf6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Gmailclone';
    try {
        await mongoose.connect(DB_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;
