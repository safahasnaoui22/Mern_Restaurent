
import express from 'express' 
import mongoose from 'mongoose'
import cors from 'cors'
import ErrorHandler from './error/error.js';
import ReservationRouter from './routes/reservationRoute.js'
const app = express();

app.use(cors());
app.use(express.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
app.get('/', (req, res) => {
    res.send('Hello, welcome to the Nova API!');
});

app.use('/api/reservtion' , ReservationRouter)

mongoose.connect('mongodb+srv://nova:nova@cluster0.haxquto.mongodb.net/')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Failed to connect to MongoDB:', error));


    app.use(ErrorHandler)

{/** app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
}); */}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Nova Running on port ${PORT}`);
});
