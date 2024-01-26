import { Router } from "express";
import routerProduct from "./product";
import routerAuth from "./auth";


const router = Router()


router.use('/product', routerProduct)
router.use('/auth', routerAuth)
export default router