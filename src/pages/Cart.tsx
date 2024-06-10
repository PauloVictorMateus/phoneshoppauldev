import { useCartStore } from "../stores/cartStore";
import { useEffect, useState } from "react";
import { applyCreditCardMask } from "../utils/applyCreditCardMask";
import { applyCVVMask } from "../utils/applyCVVMask";
import { applyExpirationDateMask } from "../utils/applyExpirationDateMask";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [total, setTotal] = useState(0);
  const [isCardVerified, setIsCardVerified] = useState(false);
  const { items, removeItem } = useCartStore();
  const [thankYou, setThankYou] = useState(false);

  // mascaras para o cartão
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyCreditCardMask(e.target.value);
    setCardNumber(maskedValue);
  };

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyCVVMask(e.target.value);
    setCVV(maskedValue);
  };

  const handleExpirationDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const maskedValue = applyExpirationDateMask(e.target.value);
    setExpirationDate(maskedValue);
  };

  const handleVerifyCard = () => {
    // Lógica para verificar se o cartão é válido
    if (!cardNumber) {
      toast.error("Por favor, preencha o número do cartão.");
    }

    if (!cvv) {
      toast.error("Por favor, preencha o CVV.");
    }

    if (!expirationDate) {
      toast.error("Por favor, preencha a data de validade.");
    }

    if (cardNumber || cvv || expirationDate) {
      setIsCardVerified(true);
    }
  };

  const handleCheckout = () => {
    // Lógica para simular um pagamento
    const success = Math.random() > 0.5;
    handleVerifyCard();

    if (success && isCardVerified) {
      toast.success("Pagamento Feito!");
      items.forEach((item) => removeItem(item.id));

      setCardNumber("");
      setCVV("");
      setExpirationDate("");

      setIsCardVerified(false);

      setThankYou(true);
    } else {
      toast.error("Erro no pagamento! Por favor, tente novamente.");
    }
  };

  useEffect(() => {
    const total = items.reduce((acc, item) => acc + item.preco, 0);
    total.toFixed(2);

    setTotal(total);
  }, [items]);

  return (
    <div className="flex items-center justify-center w-full h-screen p-5 bg-header dark:bg-black dark:text-white">
      {items.length === 0 && thankYou === false ? (
        <p>
          Seu carrinho está vazio.{" "}
          <Link to={"/"}>
            <p className="text-blue-600"> Adicione produtos ao carrinho</p>
          </Link>
        </p>
      ) : thankYou ? (
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="text-4xl">Muito obrigado pela compra!</p>
          <Link to={"/"}>
            <button className="flex items-center justify-center w-full gap-20 p-4 px-20 font-bold text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700">
              Voltar para a loja
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full gap-5 p-20">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <div className="flex flex-col items-center justify-center w-full gap-10 lg:flex-row">
            {/* itens */}
            <div className="flex flex-col items-center justify-between w-full">
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-between w-full gap-5 p-4 border-2 rounded-md lg:flex-row border-slate-700"
                  >
                    <div className="flex flex-col gap-5 lg:flex-row">
                      <img
                        src={item.imagem}
                        alt={item.nome}
                        className="w-20 h-20 cover"
                      />
                      <div className="flex flex-col">
                        <p className="text-xl font-bold">{item.nome}</p>
                        <p className="text-lg">{item.descricao}</p>
                        <p className="text-xl font-bold">R${item.preco}</p>
                      </div>
                    </div>
                    <button
                      className="w-full p-2 text-white bg-red-600 rounded-lg hover:bg-red-700 lg:w-20"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* formulário cartão */}
            <div className="flex flex-col items-center justify-center w-full gap-2 p-10 py-20 border-2 rounded-md">
              <h1 className="-mt-10 text-4xl font-bold">Dados do Cartão</h1>
              <div className="flex flex-col w-full">
                <label htmlFor="cardNumber" className="text-sm">
                  Número do cartão
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  className="w-full p-2 border-2 rounded-md border-slate-700 dark:bg-headerDark dark:text-white"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="cvv" className="text-sm">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="000"
                  className="w-full p-2 border-2 rounded-md border-slate-700 dark:bg-headerDark dark:text-white"
                  value={cvv}
                  onChange={handleCVVChange}
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="expirationDate" className="text-sm">
                  Data de validade
                </label>
                <input
                  type="text"
                  id="expirationDate"
                  placeholder="00/00"
                  className="w-full p-2 border-2 rounded-md border-slate-700 dark:bg-headerDark dark:text-white"
                  value={expirationDate}
                  onChange={handleExpirationDateChange}
                />
              </div>
              <p className="mt-10">Total: R${total.toFixed(2)}</p>
              <button
                onClick={handleCheckout}
                className="flex items-center justify-center w-full gap-20 p-4 px-20 font-bold text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700"
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
