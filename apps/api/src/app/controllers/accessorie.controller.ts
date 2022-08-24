import { Request, Response } from 'express';
import AccessorieModel from '../model/accessorie.model';

export default class AccessorieController {
  create = async (req: Request, res: Response) => {
    try {
      const data = {
        title: req.body.title,
        text: req.body.text,
        img: req.body.img,
        price: req.body.price,
        titleImg: req.body.titleImg,
      };

      const accessorie = new AccessorieModel(data);
      await accessorie.save();

      return res.json(accessorie);
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };

  findAll = async (_, res: Response) => {
    try {
      const data = await AccessorieModel.find({});
      return res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };

  find = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data = await AccessorieModel.findById({ _id: id });
      return res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };

  remove = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const data = await AccessorieModel.findByIdAndRemove({ _id: id });
      res.json({
        message: `Accessorie ${data.title} deleted`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };
}
