import { Request, Response } from "express";
import { IAService } from "../services/IA.service";
import MulterRequest from "../interfaces/MulterRequest.interface";
import FormData from 'form-data';

class IAController {
    private iaService: IAService;
    
    constructor() {
        this.iaService = new IAService();
    }

    /**
     * POST http://0.0.0.0:0000/ia/predict
     * @param req Request com imagem
     * @param res Response
     */
    async predict(req: MulterRequest, res: Response) {
        try {
            const file = req.file
            if (!file) {
                res.status(400).json({ message: "Nenhuma imagem foi enviada." })
                return
            }

            const form = new FormData()
            form.append('file', file.buffer, {
                filename: file.originalname,
                contentType: file.mimetype,
                knownLength: file.size
            })

            const predict = await this.iaService.predict(form)

            res.status(200).json(predict)
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    /**
     * GET http://0.0.0.0:0000/ia
     * @param res Response
     */
    async test(_: Request, res: Response) {
        try {
            res.status(200).json({
                message: "Rota funcionando!"
            })
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default IAController;