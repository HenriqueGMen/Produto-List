import { Prisma } from "@prisma/client";
import { prisma } from "../../../database/prismaClient"
import { IProdutos } from "../../repositorie/IProdutos"

export class CreateProdutoUseCase {
  async execute({ nome, descricao, preco }: IProdutos) {
    try{
     const produtoExiste = await prisma.produto.findFirst({
        where: { nome }
      })

      if(produtoExiste) {
        throw new Error("Esse produto já existe!");      
      }

      const novoProduto = await prisma.produto.create({
        data: {
          nome,
          descricao,
          preco
        }
      })

      return novoProduto
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        const message = error.message.match(/Argument `[^`]+`: Invalid value provided\. Expected [^,]+, provided [^\.]+\./);
        throw new Error(message ? message[0] : error.message);
      } else {
        throw error;
      }
    }
  }
}