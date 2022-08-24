import * as express from 'express';
import AccessorieController from '../controllers/accessorie.controller';
import AudioController from '../controllers/audio.controller';
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

const Audio = new AudioController()
router.post('/audio', Audio.create);
router.get('/audio', Audio.findAll);
router.get('/audio/:id', Audio.find)
router.delete('/audio/:id', Audio.remove);

const Accessorie = new AccessorieController();
router.post('/accessorie', Accessorie.create);
router.get('/accessorie', Accessorie.findAll);
router.get('/accessorie/:id', Accessorie.find)
router.delete('/accessorie/:id', Accessorie.remove);