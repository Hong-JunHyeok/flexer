import { atom, selector, selectorFamily } from "recoil";
import { Product } from "Types/Product";

export const productsState = atom<Product[]>({
  key: "productsState",
  default: [],
});

export const viewProductState = selectorFamily<Product | undefined, string>({
  key: "viewProductState",
  get:
    (productId: string) =>
    ({ get }) => {
      const products = get(productsState);

      return products.find((product) => product.id === productId);
    },
});
