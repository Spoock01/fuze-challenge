import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import CardsRouter from './routes';
import ValidationsErrors from './errors/ValidationsError';

const Server = () => {
    const app = express();
    const PORT = 8080;

    const setup = () => {
        app.use(cors());
        app.use(helmet());
        app.use(morgan('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.use("/api", CardsRouter);
        app.use(
            (err: Error, request: Request, response: Response, _: NextFunction) => {
                if (err instanceof ValidationsErrors) {
                    return response
                        .status(err.statusCode)
                        .json({ statusCode: err.statusCode, errors: err.errors });
                }

                return response
                    .status(500)
                    .json({ statusCode: 500, message: 'Internal server error' });
            },
        );

    }

    const start = () => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    }

    return {
        setup,
        start,
    }
}

export default Server;