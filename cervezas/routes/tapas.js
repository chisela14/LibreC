const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

const { getTapas, getTapa, addTapa, updateTapa, deleteTapa } = require('../controllers/tapas')
const { validateFields } = require('../helpers/validate-fields')
const { hasRol, isAdminRol } = require('../middlewares/validate-rol')
const { validateJWT } = require('../middlewares/validate-jwt')


// GET: (/nombreRecurso) Todos los usuarios pueden acceder a ella y se mostrarán todos los elementos de ese recurso. 
// Además debe permitir solicitar un número de elementos e indicar a partir de que elemento se quiere recuperar.
// GET: (/nombreRecurso/:id) Todos los usuarios pueden acceder a ella. Devuelve el elemento cuyo id coincida con el introducido
router.get("/", getTapas)
router.get("/:id",[
    check('id','No es un id correcto').isMongoId(),
    validateFields
], getTapa)


// POST: (/nombreRecurso) Solo los usuarios con el rol ADMIN_ROLE y SELL_ROLE pueden acceder. 
// Permite crear un nuevo recurso, se deben realizar las validaciones oportunas.
router.post("/", [
    hasRol("ADMIN_ROLE", "SELL_ROLE"),
    check('nombre', 'El nombre de la tapa no puede quedar vacío').notEmpty(),
    check('nombre', 'El tamaño del nombre no es apropiado').isLength({min: 6, max: 20}),
    check('ingredientes', "Los ingredientes no pueden quedar vacíos").notEmpty(),
    check('ingredientes', 'La tapa debe tener mínimo un ingrediente').isLength({min: 6, max: 100}),
    check('precio', 'El precio no es válido').isFloat(),
    validateFields
], addTapa)


// PUT: (/nombreRecurso/:id) Solos los usuarios con el rol ADMIN_ROLE pueden acceder. 
// Permite editar el recurso con el id indicado en la ruta. Se deben recibir todos los datos para permitir editar.
router.put("/:id",[
    isAdminRol,
    check('id','No es un id correcto').isMongoId(),
    check('nombre', 'El nombre de la tapa no puede quedar vacío').notEmpty(),
    check('ingredientes', "Los ingredientes no pueden quedar vacíos").notEmpty(),
    check('precio', 'El precio no puede quedar vacío').notEmpty(),
    validateFields
], updateTapa)


// DELETE: (/nombreRecurso/:id) Solo los usuarios con los roles ADMIN_ROLE y DELETE_ROLE pueden acceder. 
// Permite eliminar el recurso con el id indicado. En este caso lo eliminaremos de la base de datos.
router.delete("/:id", [
    validateJWT,
    hasRol("ADMIN_ROLE", "DELETE_ROLE"),
    validateFields
], deleteTapa)

module.exports = router
