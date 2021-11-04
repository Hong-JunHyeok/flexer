import { atom } from "recoil";
import { Product } from "Types/Product";

export const productsState = atom<Product[]>({
  key: "productsState",
  default: [],
});
