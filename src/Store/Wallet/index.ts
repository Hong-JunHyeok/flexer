import { atom, selector } from "recoil";

export const walletState = atom({
  key: "walletState",
  default: 0,
});

export const formattedWalletState = selector({
  key: "formattedWalletState",
  get: ({ get }) => {
    const walletAmount = get(walletState);
    const format = walletAmount.toLocaleString();

    return `${format} 원`;
  },
});
