import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRoute = Router();

interface UserOptionalPassowrd {
    name: string;
    email: string;
    password?: string;
}

sessionsRoute.post('/', async (request, response) => {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const {
        user,
        token,
    }: {
        user: UserOptionalPassowrd;
        token: string;
    } = await authenticateUser.execute({
        email,
        password,
    });

    delete user.password;

    return response.json({ user, token });
});

export default sessionsRoute;
