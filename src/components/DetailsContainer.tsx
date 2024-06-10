import { useCartStore } from "../stores/cartStore";
import { Link } from "react-router-dom";

type DetailsContainerProps = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
};

export const DetailsContainer = ({
  id,
  nome,
  descricao,
  imagem,
  preco,
}: DetailsContainerProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleContinue = () => {
    const item = { id, nome, descricao, preco, imagem };
    addToCart(item);
  };

  return (
    <div className="flex items-center justify-between w-full gap-5 p-4 px-10 dark:bg-black dark:text-white">
      <div className="flex flex-col w-full mt-20 lg:ml-20 item-center">
        <h1 className="text-5xl font-bold">Veja o {nome}</h1>
        <p className="mt-5 text-2xl">
          Os melhores produtos para os melhores clientes
        </p>
        <div className="flex flex-col items-center justify-around w-full gap-5 mt-5 lg:flex-row">
          <div className="lg:w-6/12 lg:h-6/12">
            <img src={imagem} alt={nome} className="w-full h-full cover" />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold">
              O Melhor. {""}
              <span>
                Feito para <span className="text-slate-500">Você</span>
              </span>
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-10 p-4 border-2 rounded-md border-slate-700">
                <div className="flex flex-col">
                  <p>{nome}</p>
                  <p>{descricao}</p>
                </div>
                <p>R${preco}</p>
              </div>
              <Link to="/cart">
                <div
                  className="flex items-center justify-center gap-10 p-4 text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700"
                  onClick={handleContinue}
                >
                  <p>Ir para o carrinho</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
