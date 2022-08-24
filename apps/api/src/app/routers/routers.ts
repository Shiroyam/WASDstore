import * as express from 'express';
import KeyboardController from '../controllers/keyboard.controller';

export const router = express.Router();

const Keyboard = new KeyboardController();
router.post('/keyboard', Keyboard.create);
router.get('/keyboard', Keyboard.findAll);
router.get('/kyboard/:id', Keyboard.find)
router.delete('/keyboard/:id', Keyboard.remove);
