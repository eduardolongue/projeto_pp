const {Router} = require("express");
const router = Router();

const { storeConteudo } = require("../controller/conteudoController");

router.post("/store/conteudo", storeConteudo);

module.exports = router;