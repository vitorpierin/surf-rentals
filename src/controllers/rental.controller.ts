import { Request, Response } from 'express';
import { Rental } from '../models/Rental';
import { Surfboard } from '../models/Surfboard';

export const home = async (req: Request, res: Response) => {
    let list = await Surfboard.findAll();

    res.render('pages/home', {
        banner:{
            title:"Surfboards Available:"
        },
        list
    });
}



export const all = async (req: Request, res: Response) => {
   const list = await Rental.findAll();
   res.json({list});
}
export const one = async (req: Request, res: Response) => {
    let id: string = req.params.id;
   
    let rent = await Rental.findByPk(id);

    if(rent){
        res.json({rent});
    }else{
        res.json({error: 'Dados não encontrados'})
       }
 }
export const add = async (req: Request, res: Response) => {
   if(req.body.name){
    let newRental = await Rental.create({
        name: req.body.name,
        address: req.body.address,
        equipment_id: req.body.equipment_id,
        date_start: req.body.date_start,
        date_end: req.body.date_end,
        total_price: req.body.total_price,
        info: req.body.info,
        document: req.body.document

    });
    res.status(201).json({item: newRental});
   }else{
    res.json({error: 'Dados não enviados!'})
   }
}
export const update = async (req: Request, res: Response) => {
   let id: string = req.params.id;
   
   let rent = await Rental.findByPk(id);

   if(rent){
        if(req.body.name){
            rent.name = req.body.name;
        }
        if(req.body.address){
            rent.address = req.body.address;
        }
        if(req.body.equipment_id){
            rent.equipment_id = req.body.equipment_id;
        }
        if(req.body.date_start){
            rent.date_start = req.body.date_start;
        }
        if(req.body.date_end){
            rent.date_end = req.body.date_end;
        }
        if(req.body.total_price){
            rent.total_price = req.body.total_price;
        }
        if(req.body.info){
            rent.info = req.body.info;
        }
        if(req.body.document){
            rent.document = req.body.document;
        }
        if(req.body.finalizado){
           switch(req.body.finalizado.toLowerCase()){
                case 'true':
                case '1':
                    rent.finalizado = true;
                    break;
                case 'false':
                case '0':
                    rent.finalizado = false;
                    break;
           }
        }
        if(req.body.paied){
            switch(req.body.paied.toLowerCase()){
                case 'true':
                case '1':
                    rent.paied = true;
                    break;
                case 'false':
                case '0':
                    rent.paied = false;
                    break;
           }
        }

        await rent.save();
        res.json({item: rent});
   }else{
       res.json({error: 'Item não encontrado!'});
   }
}
export const remove = async (req: Request, res: Response) => {
    let id: string = req.params.id;
   
    let rent = await Rental.findByPk(id);

    if(rent){
        await rent.destroy();
    }
    res.json({});
}

export const newrent = async (req: Request, res: Response) => {

    if(req.params.available){
        res.render('pages/newrent');
    }  
}
