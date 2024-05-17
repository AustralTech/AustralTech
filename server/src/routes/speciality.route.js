import { Router } from "express";
import { specialityController } from "../controllers/specility.controller.js";

const router = Router()

router.post("/create", specialityController.createSpeciality);
router.get("/", specialityController.getAllSpeciality);
router.get("/:id", specialityController.getSpecialityById);
router.put("/:id", specialityController.updateSpeciality);
router.delete("/:id", specialityController.deleteSpeciality);

export default router;

