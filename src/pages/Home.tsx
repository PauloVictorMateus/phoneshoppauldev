import { Offers } from "../components/Offers";
import { ShopContainer } from "../components/ShopContainer";

export const Home = () => {
  return (
    <div className="dark:text-white dark:bg-black">
      <Offers />
      <ShopContainer />
    </div>
  );
};
