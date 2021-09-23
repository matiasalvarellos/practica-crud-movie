const express = require("express");
const router = express.Router();
const movieController = require("../controller/moviesController");

// router.get("???", movieController.???);
router.get("/detail/:id", movieController.detail);

//rutas de creación
// router.???("???", movieController.???);
// router.???("???", movieController.???);

// //rutas para edición
// router.???("???", movieController.???);
// router.???("???", movieController.???);

// //ruta para eliminar
// router.???("???", movieController.???);

module.exports = router;