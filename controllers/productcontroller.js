const Product = require('../models/productmodels')

const getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();

        if (!allProducts || allProducts.length === 0) {
            res.json({
                message: 'there is no product available'
            })

        } else {

            res.status(200).json({
                success: true,
                data: allProducts
            })

        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })

    }
}


const cearteP = async (req, res) => {
    try {
        const { name, price, description, category } = req.body;
        const newProduct = new Product({ name, price, description, category });
        await newProduct.save();
        return res.status(201).json({
            product: newProduct,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

const updateProduct = async (req, res) => {

    try {
        console.log("put ki request ayi ki nhi")
        const { id } = req.params;
        const { name, price, description, category } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, description, category }, { new: true });

        res.status(200).json({
            product: updatedProduct
        })

    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })

    }

}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            res.json({
                message: 'Product not found'
            })

        } else {
            res.status(200).json({
                message: 'Product deleted successfully',
                product: deletedProduct
            })

        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error"
        })

    }
};

module.exports = { getProducts, updateProduct, cearteP, deleteProduct }