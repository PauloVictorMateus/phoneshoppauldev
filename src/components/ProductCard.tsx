import { Link } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";
import { toast } from "react-toastify";

type ProductCardProps = {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  id: string;
};

export const ProductCard = ({
  descricao,
  nome,
  imagem,
  preco,
  id,
}: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleContinue = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();

    const item = { id, nome, descricao, preco, imagem };
    addToCart(item);
    toast.success("Produto adicionado ao carrinho");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-5 py-2 mb-5 rounded-lg dark:text-white bg-header hover:scale-110 dark:bg-black">
      <Link to={`/details/${id}`} className="w-full">
        <div className="flex items-center justify-center overflow-hidden">
          <img src={imagem} alt={nome} className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col justify-between flex-grow gap-2 mt-5 text-xl lg:text-base">
          <h3 className="">{nome}</h3>
          <p className="">{descricao}</p>

          <div className="flex items-center justify-between">
            <p className="">R${preco}</p>
            <div className="flex items-center justify-center gap-10 p-2 text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700">
              <button className="z-50 text-xs" onClick={handleContinue}>
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
