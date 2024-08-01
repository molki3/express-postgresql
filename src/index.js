import express from 'express';
import { PORT } from './config.js';
import userRoutes from './routes/users.routes.js';
import morgan from 'morgan';

const app = express();

// Settings

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(userRoutes);

app.listen(PORT);
console.log(`Server on port ${PORT}`);