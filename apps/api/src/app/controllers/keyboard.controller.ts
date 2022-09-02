import { Request, Response } from 'express';
import KeyboardModel from '../model/keyboard.model';

export default class KeyboardController {
  create = async (req: Request, res: Response) => {
    try {
      const data = {
        title: req.body.title,
        text: req.body.text,
        img: req.body.img,
        price: req.body.price,
        titleImg: req.body.titleImg,
      };

      const keyboard = new KeyboardModel(data);
      await keyboard.save();

      return res.json(keyboard);
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };

  findAll = async (_, res: Response) => {
    try {
      const data = await KeyboardModel.find({});
      return res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };

  find = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data = await KeyboardModel.findById({ _id: id });
      return res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data = await KeyboardModel.findByIdAndRemove({ _id: id });
      res.json({
        message: `Keyboard ${data.title} deleted`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };
}
