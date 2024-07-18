import { prisma } from "../../../database/prismaClient"

export class ListProdutosUseCase {
  async execute() {
    const produtos = await prisma.produto.findMany()

    return produtos
  }
}