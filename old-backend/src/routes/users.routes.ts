import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateuserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

interface UserOptionalPassowrd {
    name: string;
    email: string;
    password?: string;
    avatar: string;
}

const usersRoute = Router();

const upload = multer(uploadConfig);

usersRoute.post('/', async (request, response) => {
    const { name, email, password } = request.body;

    const createUser = new CreateuserService();

    const user: UserOptionalPassowrd = await createUser.execute({
        name,
        email,
        password,
    });

    delete user.password;

    return response.json(user);
});

usersRoute.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (request, response) => {
    const updateUserAvatar = new UpdateUserAvatarService();
    const user: UserOptionalPassowrd = await updateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
});

export default usersRoute;
