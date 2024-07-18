import { prisma } from "../../../database/prismaClient";

export class DeleteProdutoUseCase {
  async execute(id: string) {
    const produtoExiste = await prisma.produto.findUnique({
      where: { id }
    });

    if (!produtoExiste) {
      throw new Error("Produto não encontrado.");
    }

    await prisma.produto.delete({
      where: { id }
    });
  }
}