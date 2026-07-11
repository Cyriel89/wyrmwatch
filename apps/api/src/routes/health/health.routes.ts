import { Router } from 'express';
import { type Request, type Response } from 'express';

const router: Router = Router();

router.get('/health', (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: 'ok' });
    } catch (err) {
        res.status(520).json({ message: 'nok' });
    }
})

export default router;