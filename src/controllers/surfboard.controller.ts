import { Request, Response } from 'express';
import { Surfboard } from '../models/Surfboard';

export const surfboards = async (req: Request, res: Response) => {
  const list = await Surfboard.findAll();
  res.json({list});
}

export const surfboard = async (req: Request, res: Response) => {
  let id: string = req.params.id;
   
  let surfboard = await Surfboard.findByPk(id);

  if(surfboard){
      res.json({surfboard});
  }else{
      res.json({error: 'Dados não encontrados'})
     }
}
