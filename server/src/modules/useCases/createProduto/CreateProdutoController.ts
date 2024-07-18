import { Request, Response } from "express";
import { CreateProdutoUseCase } from "./CreateProdutoUseCase";

export class CreateProdutoController {
  async handle(req: Request, res: Response) {
    try {
      const { nome, descricao, preco } = req.body;

      const createProdutoUseCase = new CreateProdutoUseCase();

      const result = await createProdutoUseCase.execute({
        nome,
        descricao,
        preco
      });

      return res.status(201).json(result);
    } catch (error) {
      const err = error as Error;
      console.error("Erro ao criar produto:", err);
      
      return res.status(400).json({ error: err.message });
    }
  }
}
