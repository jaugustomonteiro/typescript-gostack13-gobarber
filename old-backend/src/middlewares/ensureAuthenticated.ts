import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

import AppError from '../errors/AppError';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {
    /**
     * VALIDAÇÃO DO TOKEN
     */
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new AppError('JWT token is missing', 401);

    // Bear token => split
    const [, token] = authHeader.split(' ');

    const { secret } = authConfig.jwt;

    try {
        const decode = verify(token, secret);

        const { sub } = decode as TokenPayload;

        request.user = {
            id: sub,
        };

        return next();
    } catch {
        throw new AppError('Invalid JWT token', 401);
    }
}

export default ensureAuthenticated;
