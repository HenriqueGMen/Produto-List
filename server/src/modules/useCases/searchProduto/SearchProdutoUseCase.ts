import { prisma } from "../../../database/prismaClient"
import { IProdutos } from "../../repositorie/IProdutos"

export class SearchProdutoUseCase {
  async execute({ nome }: Pick<IProdutos, 'nome'>) {
      const produtoExiste = await prisma.produto.findFirst({
        where: { nome }
      });

      if (!produtoExiste) {
        throw new Error("Produto não encontrado.")
      }

      return produtoExiste
  }
}