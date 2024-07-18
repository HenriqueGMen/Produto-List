import { Request, Response } from "express"
import { UpdateProdutoUseCase } from "./updateProdutoUseCase"

export class UpdateProdutoController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { nome, descricao, preco } = req.body

      const updateProdutoUseCase = new UpdateProdutoUseCase()

      const result = await updateProdutoUseCase.execute({ id, nome, descricao, preco })

      return res.status(200).json(result)
    } catch (error) {
      const err = error as Error;
      console.error("Erro ao atualizar produto:", err)
      return res.status(400).json({ error: err.message })
    }
  }
}
