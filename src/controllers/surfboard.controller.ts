import { Request, Response } from 'express';
import { Surfboard } from '../models/Surfboard';

export const surfboards = async (req: Request, res: Response) => {
  const list = await Surfboard.findAll();
  res.json({list});
}

export const surfboard = async (req: Request, res: Response) => {
  let id: string = req.params.id as string;
   
  let surfboard = await Surfboard.findByPk(id);

  if(surfboard){
      res.json({surfboard});
  }else{
      res.json({error: 'Dados não encontrados'})
     }
}

/*export const update = async (req: Request, res: Response) =>{
  let id: string = req.params.id as string;
   
  let surfboard = await Surfboard.findByPk(id);
  
  if(surfboard){
     surfboard.available = false;
     await surfboard.save();
  }else{
    res.json({error: 'Item não encontrado!'});
  }
  res.redirect('/');
}*/