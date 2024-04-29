const { Router } = require("express")
const NotesController = require("../controllers/NotesController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRoutes = Router()

/*
function myMiddleware(request, response, next) {
  console.log("Você passou por aqui!")

  if(!request.body.isAdmin) {
    return response.json({message: "user unauthorized!"})
  }

  next();
}
*/

const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)
//usersRoutes.use(myMiddleware); Assim passo pra todas as rotas ...
notesRoutes.get("/", /*myMiddleware,*/ notesController.index)
notesRoutes.post("/", /*myMiddleware,*/ notesController.create)
notesRoutes.get("/:id", /*myMiddleware,*/ notesController.show)
notesRoutes.delete("/:id", /*myMiddleware,*/ notesController.delete)

module.exports = notesRoutes;