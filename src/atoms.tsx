import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minute",
  default: 0,
});

export const hourSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState); // atom minuteState값을 가져온다.
    return minutes / 60;
  },
});
