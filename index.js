import express from 'express';
import Connection from './database/db.js';
import routes from './routes/route.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended : true}));

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    console.log('Request Body:', req.body);
    next();
  });

app.use('/', routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
