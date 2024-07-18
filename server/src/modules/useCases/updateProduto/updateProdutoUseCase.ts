import { prisma } from "../../../database/prismaClient";
import { IUpdateProduto } from "../../repositorie/IUpdateProduto";

export class UpdateProdutoUseCase {
  async execute({ id, nome, descricao, preco }: IUpdateProduto) {
    const produtoExiste = await prisma.produto.findUnique({
      where: { id }
    });

    if (!produtoExiste) {
      throw new Error("Produto não encontrado.");
    }

    const produtoAtualizado = await prisma.produto.update({
      where: { id },
      data: {
        nome,
        descricao,
        preco
      }
    });

    return produtoAtualizado;
  }
}