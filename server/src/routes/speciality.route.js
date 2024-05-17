import {Router} from "express"
import {specialityController} from "../controllers/specility.controller.js"

const router = Router()

router.post("/create", specialityController.createSpeciality)  //OK
router.get("/", specialityController.getAllSpeciality)          //OK
router.get("/:id", specialityController.getSpecialityById)      //OK
router.put("/:id", specialityController.updateSpeciality)       //OK
router.delete("/:id", specialityController.deleteSpeciality)    //OK

export default router;

