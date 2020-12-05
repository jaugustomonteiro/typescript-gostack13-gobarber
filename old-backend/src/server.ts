import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            messsage: err.message,
        });
    }

    console.error(err);

    return response.status(500).json({
        status: 'error',
        messsage: 'Internal server error',
    });
});

app.listen(3333, () => {
    // eslint-disable-next-line no-console
    console.log('🚀 Server started on port 3333');
});