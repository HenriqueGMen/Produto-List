import { Request, Response } from "express"
import { DeleteProdutoUseCase } from "./deleteProdutoUseCase"

export class DeleteProdutoController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params

      const deleteProdutoUseCase = new DeleteProdutoUseCase()

      await deleteProdutoUseCase.execute(id)

      return res.status(204).send()
    } catch (error) {
        const err = error as Error
        console.error("Erro ao deletar produto:", err)
        return res.status(400).json({ error: err.message })
    }
  }
}
