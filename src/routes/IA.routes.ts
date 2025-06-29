import { Router } from "express"
import IAController from "../controllers/IA.controller"
import uploadMiddleware from "../middlewares/upload.middleware"

const router = Router()
const iaController = new IAController()

router.post("/predict", uploadMiddleware.single("image"), iaController.predict.bind(iaController))
router.get("/", iaController.test.bind(iaController))

export default router