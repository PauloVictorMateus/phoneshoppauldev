import { useState } from "react";
import Products, { Produto } from "../data/products";
import { ProductCard } from "./ProductCard";
import { BsFilterRight } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { Filter } from "./Filter";
import { useFilterStore } from "../stores/filterStore";
import { Search } from "./Search";

export const ShopContainer = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const { maxPrice, minPrice, productName } = useFilterStore();

  // Função para aplicar filtro
  const applyFilter = (product: Produto) => {
    // Verifica se o produto atende aos critérios de filtro
    const meetsProductNameCriteria =
      productName === "" ||
      product.nome.toLowerCase().includes(productName.toLowerCase());
    const meetsMinPriceCriteria =
      minPrice === 1000 || product.preco >= minPrice;
    const meetsMaxPriceCriteria =
      maxPrice === 5000 || product.preco <= maxPrice;

    return (
      meetsProductNameCriteria && meetsMinPriceCriteria && meetsMaxPriceCriteria
    );
  };

  // Aplica filtro aos produtos
  const filteredProducts = Products.filter(applyFilter);

  return (
    <>
      <div className="flex items-center justify-between w-full gap-5 p-4 px-10 dark:bg-headerDark dark:text-white">
        <div className="flex flex-col w-full mt-20 lg:ml-20 item-center">
          <div className="flex flex-col items-center justify-between w-full md:flex-row">
            <div className="flex flex-col w-full">
              <h1 className="text-5xl font-bold">Shop Your Happiness</h1>
              <p className="mt-5 text-2xl">
                The best products for the best customers
              </p>
            </div>
            <div className="flex gap-2 mt-10 lg:mt-0">
              <AiOutlineSearch
                className="text-2xl cursor-pointer"
                size={40}
                onClick={() => {
                  setIsSearch(!isSearch);
                }}
              />
              <BsFilterRight
                className="text-5xl cursor-pointer"
                size={40}
                onClick={() => {
                  setIsFilter(!isFilter);
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 mt-20 md:grid-cols-2 lg:grid-cols-5">
            {filteredProducts.map((product) => (
              <div className="col-span-1" key={product.id}>
                <ProductCard
                  id={product.id}
                  descricao={product.descricao}
                  nome={product.nome}
                  imagem={product.imagem}
                  preco={product.preco}
                />
              </div>
            ))}
          </div>
          {!filteredProducts.length && (
            <h1 className="w-full h-screen text-3xl text-center">
              Não achamos produtos com esses filtros
            </h1>
          )}
        </div>
      </div>
      <Filter isOpen={isFilter} setIsOpen={setIsFilter} />
      <Search isOpen={isSearch} setIsOpen={setIsSearch} />
    </>
  );
};
