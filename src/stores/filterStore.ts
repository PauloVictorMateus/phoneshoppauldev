import create from "zustand";

type FilterProps = {
  productName: string;
  setProductName: (name: string) => void;
  minPrice: number;
  setMinPrice: (price: number) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
};

export const useFilterStore = create<FilterProps>((set) => ({
  productName: "",
  setProductName: (name) =>
    set(() => ({
      productName: name,
    })),
  minPrice: 1000.99,
  setMinPrice: (price) =>
    set(() => ({
      minPrice: price,
    })),
  maxPrice: 2000,
  setMaxPrice: (price) =>
    set(() => ({
      maxPrice: price,
    })),
}));
