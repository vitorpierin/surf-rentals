import { Router } from 'express';

import * as RentalController from '../controllers/rental.controller';
import * as SurfboardController from '../controllers/surfboard.controller';

const router = Router();

router.get('/', RentalController.home);
router.get('/rental', RentalController.all);
router.get('/rental/:id', RentalController.one);
router.post('/rental', RentalController.add);
router.put('/rental/:id', RentalController.update);
router.delete('/rental/:id', RentalController.remove);

router.get('/newrent', RentalController.newrent);

router.get('/surfboards', SurfboardController.surfboards);
router.get('/surfboards/:id', SurfboardController.surfboard);


export default router;