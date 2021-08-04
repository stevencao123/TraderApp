import { Router } from "express";

import inventory from "../controllers/inventory.js";

const router = Router();

router.post("/addInventory", inventory.addInventory);
router.post("/sellInventory", inventory.sellInventory);
router.get("/getInventory", inventory.getInventory);

export default router;
