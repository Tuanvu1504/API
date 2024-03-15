import { Router } from "express";
import routerProduct from "./product";
import routerAuth from "./auth";
import routerCategory from "./category";


const router = Router()


router.use('/product', routerProduct)
router.use('/category', routerCategory)
router.use('/auth', routerAuth)
export default router