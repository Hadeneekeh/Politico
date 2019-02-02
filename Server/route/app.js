import express from "express"
// import Middleware from "./Middleware/Middleware"
import politicoController from "../Controllers/politico"

const router = express.Router();
const versionedEndPoint = '/api/v1/parties/' 
const versionedEndPoint2 = '/api/v1/offices/'

router.post(versionedEndPoint, politicoController.createParty)
router.get(`${versionedEndPoint}:id`, politicoController.getAParty)
router.get(versionedEndPoint, politicoController.getAllParties)
router.post(versionedEndPoint2, politicoController.createOffice)

export default router;