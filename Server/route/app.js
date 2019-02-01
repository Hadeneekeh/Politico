import express from "express"
// import Middleware from "./Middleware/Middleware"
import politicoController from "../Controllers/politico"

const router = express.Router();
const versionedEndPoint = '/api/v1/parties' 

router.post(versionedEndPoint, politicoController.createParty)
router.get(`${versionedEndPoint}:id`, politicoController.getAParty)
router.get(versionedEndPoint, politicoController.getAllParties)

export default router;