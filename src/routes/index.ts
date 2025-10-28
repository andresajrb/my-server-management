import { Router } from 'express';
import myexperience from './myexperience';

let router = Router();

router.use('/myexperience', myexperience);

export default router;