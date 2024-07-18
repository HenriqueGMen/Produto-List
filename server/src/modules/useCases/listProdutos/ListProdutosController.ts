import { Request, Response } from "express"
import { ListProdutosUseCase } from "./ListProdutosUseCase"

export class ListProdutosController {
  async handle(req:Request, res: Response) {
    try {
      const listProdutosUseCase = new ListProdutosUseCase()
    
      const produtos = await listProdutosUseCase.execute()
    
      return res.status(200).json(produtos)
    } catch(error) {
      const err = error as Error;
      console.error("Erro ao listar produto:", err);
      
      return res.status(400).json({ error: err.message });
    }
  }
}