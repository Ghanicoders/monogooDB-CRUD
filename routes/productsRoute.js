const express = require('express')
const router = express.Router()

const {getProducts, updateProduct, cearteP, deleteProduct} = require('../controllers/productcontroller')

router.get('/products',getProducts);
router.post('/products', cearteP);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


module.exports = router