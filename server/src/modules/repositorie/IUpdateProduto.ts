import { IProdutos } from "./IProdutos";

export interface IUpdateProduto extends Partial<IProdutos>{
  id: string
}