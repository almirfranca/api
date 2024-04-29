const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const multer = require("multer");
const uploadConfig = require("../configs/upload");

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)


const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

//usersRoutes.use(myMiddleware); Assim passo pra todas as rotas ...
usersRoutes.post("/", /*myMiddleware,*/ usersController.create)
usersRoutes.put("/", ensureAuthenticated,/* <- myMiddleware,*/ usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;