import { useParams } from "react-router-dom";
import Products from "../data/products";
import { DetailsContainer } from "../components/DetailsContainer";

export const Details = () => {
  const { id } = useParams();

  const product = Products.find((product) => product.id === id);

  if (!product) return <span>Product not found</span>;

  return <DetailsContainer {...product} />;
};
