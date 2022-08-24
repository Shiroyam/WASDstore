import { Request, Response } from 'express';
import MouseModel from '../model/mouse.model';

export default class MouseController {
  findAll = async (_, res: Response) => {
    try {
      const data = await MouseModel.find({});
      return res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };

  find = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data = await MouseModel.findById({ _id: id });
      return res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const data = {
        title: req.body.title,
        text: req.body.text,
        img: req.body.img,
        price: req.body.price,
        titleImg: req.body.titleImg
      };

      const mouse = new MouseModel(data);
      await mouse.save();

      return res.json(mouse);
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data = await MouseModel.findByIdAndRemove({ _id: id });
      res.json({
        message: `Mouse ${data.title} deleted`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };
}
