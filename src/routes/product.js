import { Router } from "express";
import { create, getAll, getDetail, remove, update } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";



const routerProduct = Router()


routerProduct.post('/',checkPermission, create)
routerProduct.get('/', getAll)
routerProduct.get('/:id',  getDetail)
routerProduct.put('/:id', checkPermission ,update)
routerProduct.delete('/:id', checkPermission,remove)

export default routerProduct
