import  express  from "express";
import {
    getProducts,
    getProductsById,
    saveProduct,
    updateProduct,
    deleteProducts

} from "./ProductController_vid.js";


const router = express.Router();

router.get('/vids', getProducts);
router.get('/vids/:id', getProductsById);
router.post('/vids', saveProduct);
router.patch('/vids/:id', updateProduct);
router.delete('/vids/:id', deleteProducts);

export default router;