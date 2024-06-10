export type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
};

import Iphone15 from "../assets/products-img/iPhone-15-Preto.png";
import Iphone15Rosa from "../assets/products-img/iPhone-15-Rosa.png";
import Iphone15Verde from "../assets/products-img/iPhone-15-Verde.png";
import S23Creme from "../assets/products-img/S23-Creme.png";
import S23Rosa from "../assets/products-img/S23-Rosa.png";
import S23Verde from "../assets/products-img/S23-Verde.png";
import S23UltraPreto from "../assets/products-img/S23Ultra-Preto.png";
import S23UltraRosa from "../assets/products-img/S23Ultra-Rosa.png";
import S23UltraVerde from "../assets/products-img/S23Ultra-Verde.png";
import Iphone13Pro from "../assets/products-img/Iphone13-Verde.png";

const Products: Produto[] = [
  {
    id: "0",
    nome: "Iphone 15 Black",
    descricao: "Um elegante iPhone 15 na cor preta.",
    preco: 1000.99,
    imagem: Iphone15,
  },
  {
    id: "1",
    nome: "Iphone 15 Pink",
    descricao: "Um lindo iPhone 15 na cor rosa.",
    preco: 1200.99,
    imagem: Iphone15Rosa,
  },
  {
    id: "2",
    nome: "Iphone 15 Green",
    descricao: "Um moderno iPhone 15 na cor verde.",
    preco: 1100.0,
    imagem: Iphone15Verde,
  },
  {
    id: "3",
    nome: "Iphone 13 Pro",
    descricao: "O poderoso iPhone 13 Pro, agora ainda melhor.",
    preco: 2000,
    imagem: Iphone13Pro,
  },
  {
    id: "4",
    nome: "S23 Cream",
    descricao: "Um elegante S23 na cor creme.",
    preco: 1000.99,
    imagem: S23Creme,
  },
  {
    id: "5",
    nome: "S23 Pink",
    descricao: "Um adorável S23 na cor rosa.",
    preco: 1040.59,
    imagem: S23Rosa,
  },
  {
    id: "6",
    nome: "S23 Green",
    descricao: "Um vibrante S23 na cor verde.",
    preco: 1350.0,
    imagem: S23Verde,
  },
  {
    id: "7",
    nome: "S23 Ultra Black",
    descricao: "Um sofisticado S23 Ultra na cor preta.",
    preco: 1500.0,
    imagem: S23UltraPreto,
  },
  {
    id: "8",
    nome: "S23 Ultra Pink",
    descricao: "Um deslumbrante S23 Ultra na cor rosa.",
    preco: 1800.0,
    imagem: S23UltraRosa,
  },
  {
    id: "9",
    nome: "S23 Ultra Green",
    descricao: "Um estiloso S23 Ultra na cor verde.",
    preco: 1399.99,
    imagem: S23UltraVerde,
  },
];

export default Products;
