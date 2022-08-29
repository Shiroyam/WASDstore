import { Request, Response } from 'express';
import BrandModel from '../model/brands.model';

export class BrandController {
  createItems = async (req: Request, res: Response) => {
    try {
      const data = {
        type: req.body.type,
        name: req.body.name,
        keyboard: req.body.keyboardId,
        mouse: req.body.mouseId,
      };

      const brand = new BrandModel(data);
      await brand.save();

      return res.json(brand);
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };

  findNameOrType = async (req: Request, res: Response) => {
    try {
      const name = req.params.name
      const data = await BrandModel.find({$or: [{ name: name }, {type: name}]});
      res.json(data)
    } catch (error) {
      console.log(error);
      res.status(500).json('error');
    }
  };
}
