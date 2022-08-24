import * as express from 'express';
import KeyboardController from '../controllers/keyboard.controller';
import MouseController from '../controllers/mouse.cotroller';

export const router = express.Router();

const Keyboard = new KeyboardController();
router.post('/keyboard', Keyboard.create);
router.get('/keyboard', Keyboard.findAll);
router.get('/kyboard/:id', Keyboard.find)
router.delete('/keyboard/:id', Keyboard.remove);

const Mouse = new MouseController();
router.post('/mouse', Mouse.create);
router.get('/mouse', Mouse.findAll);
router.get('/mouse/:id', Mouse.find)
router.delete('/mouse/:id', Mouse.remove);