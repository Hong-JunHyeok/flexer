import { atom, selector } from "recoil";

export const counterState = atom({
  key: "counterState",
  default: 0,
});

export const counterOddState = selector({
  key: "isCounterOdd",
  get: ({ get }) => {
    const counter = get(counterState);
    return counter % 2 === 1;
  },
});
