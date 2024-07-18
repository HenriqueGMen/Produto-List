import { Request, Response } from "express"
import { SearchProdutoUseCase } from "./SearchProdutoUseCase"

export class SearchProdutoController {
  async handle(req: Request, res: Response) {
    try {
      const { nome } = req.params

      const searchProdutoUseCase = new SearchProdutoUseCase()

      const result = await searchProdutoUseCase.execute({nome})

      return res.status(200).json(result);
    } catch(error) {
      const err = error as Error;
      console.error("Erro ao pesquisar produto:", err);
    
      return res.status(400).json({ error: err.message });
    }
  }
}