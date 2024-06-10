import { useEffect, useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineMoon,
  AiOutlineSun,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";
import { useThemeStore } from "../stores/themeStore";

export const Header = () => {
  const { items } = useCartStore();
  const { setTheme, theme } = useThemeStore();
  const [isSun, setIsSun] = useState(true);

  const toggleIcon = () => {
    setIsSun(!isSun);
    setTheme(isSun ? "dark" : "light");
  };

  useEffect(() => {
    // Adiciona ou remove a classe 'dark' do corpo do documento com base no tema selecionado
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <header className="flex items-center justify-between w-full gap-5 p-4 px-10 dark:bg-headerDark">
      {isSun ? (
        <AiOutlineSun
          className="text-lg cursor-pointer dark:text-white"
          onClick={toggleIcon}
        />
      ) : (
        <AiOutlineMoon
          className="text-lg cursor-pointer dark:text-white"
          onClick={toggleIcon}
        />
      )}
      <Link to="/" className="">
        <span className="text-base cursor-pointer hover:underline dark:text-white">
          Store
        </span>
      </Link>
      <Link to="/cart">
        <AiOutlineShoppingCart className="text-lg cursor-pointer dark:text-white" />
        {items.length > 0 && (
          <span className="absolute p-1 text-xs text-white bg-blue-600 rounded-full top-2 right-6">
            {items.length}
          </span>
        )}
      </Link>
    </header>
  );
};
