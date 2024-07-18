import { Router } from "express"
import { CreateProdutoController } from "./modules/useCases/createProduto/CreateProdutoController"
import { ListProdutosController } from "./modules/useCases/listProdutos/ListProdutosController"
import { SearchProdutoController } from "./modules/useCases/searchProduto/SearchProdutoController"
import { UpdateProdutoController } from "./modules/useCases/updateProduto/updateProdutoController"
import { DeleteProdutoController } from "./modules/useCases/deleteProduto/deleteProdutoController"

export const routes = Router()

const createProdutoController = new CreateProdutoController()
const listProdutosController = new ListProdutosController()
const searchProdutoController = new SearchProdutoController()
const updateProdutoController = new UpdateProdutoController()
const deleteProdutoController = new DeleteProdutoController()

routes.post("/produtos", createProdutoController.handle)

routes.get("/produtos", listProdutosController.handle)
routes.get("/busca/produtos/:nome", searchProdutoController.handle)
routes.put("/produtos/:id", updateProdutoController.handle)

routes.delete("/produtos/:id", deleteProdutoController.handle)
