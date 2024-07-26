import express from 'express';
import { PORT } from './config.js';
import userRoutes from './routes/users.routes.js';
import morgan from 'morgan';

const app = express();

// Settings

// Moddlewares
app.use(morgan('dev'))

// Routes
app.use(userRoutes);

app.listen(PORT);
console.log(`Server on port ${PORT}`);