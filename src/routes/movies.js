const express = require("express");
const router = express.Router();
const movieController = require("../controller/moviesController");
const configMulter = require("../middlewares/movieMulter");


router.get("/list", movieController.list)

router.get("/detail/:id", movieController.detail)
//rutas de creación
router.get("/create", movieController.create);

router.post("/create", configMulter.single("image") ,movieController.store);

// //rutas para edición
router.get("/edit/:id", movieController.edit);
router.put("/edit/:id", configMulter.single("image"), movieController.update);

// //ruta para eliminar
router.delete("/delete/:id", movieController.destroy);

module.exports = router;