import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minute",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState); // atom minuteState값을 가져온다.
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60; //newValue는 hour input 에서 받아온 새로운 값
    set(minuteState, minutes); // 첫번째 argument - 수정할 타겟, 두번째 argument - 새로운 값
  },
});
