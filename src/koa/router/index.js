// router入口文件
const Router = require("koa-router")
const router = new Router();
const login = require("./login")
const register = require("./register")
const hotels = require("./hotels")
const home = require("./home")

router.use("/login", login.routes(), login.allowedMethods());
router.use("/register", register.routes(), register.allowedMethods());
router.use("/hotels", hotels.routes(), hotels.allowedMethods());
router.use("/home", home.routes(), home.allowedMethods());

router.redirect("/", "/home");

module.exports = router;