import create from "zustand";

type CartItem = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
};

type CartStore = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (id: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addToCart: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));
