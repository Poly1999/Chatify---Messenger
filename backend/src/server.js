import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';
import messageRoute from './routes/messages.route.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoute);

app.listen(PORT, () => console.log('Server running on port: ' + PORT));
