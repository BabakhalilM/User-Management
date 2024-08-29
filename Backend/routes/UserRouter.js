import {Router} from 'express';
import { deleteuser, deleteusers, edituser, register, users } from '../controllers/Register.js';

const userRouter=Router();

userRouter.get('/users', users);
userRouter.post('/register',register);
userRouter.delete('/deleteuser/:id',deleteuser);
userRouter.post('/deleteusers',deleteusers);
userRouter.put('/edituser',edituser);
export default userRouter;