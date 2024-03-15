import { Router } from "express";
import { creteCategory, deleteCategory, getAllCategory, getCategoryById, updateCategory } from "../controllers/categoty";
import { getDetail } from "../controllers/product";


const routerCategory = Router()

routerCategory.post('/',creteCategory )
routerCategory.get('/',getAllCategory )
routerCategory.get('/:id',getCategoryById )
routerCategory.put('/:id',updateCategory )
routerCategory.delete('/:id',deleteCategory )


export default routerCategory