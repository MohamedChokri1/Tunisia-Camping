const CartRoute = require("express").Router();
const CartController = require("../controllers/cartController.js");

CartRoute.get("/getAllProduct",CartController.getAllProduct);
CartRoute.delete("/deleteOneProduct/:id",CartController.deleteOneProduct);
CartRoute.delete("/deleteAllProduct",CartController.deleteAllProduct);
CartRoute.get("/get/:id",CartController.getProductsOfUserInCart);
CartRoute.post("/add",CartController.addProductToCart);

CartRoute.post("/sendDiscountEmail/:email", CartController.sendDiscountEmail);



module.exports =CartRoute;  