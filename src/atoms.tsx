import { atom, selector } from "recoil";

export enum Categories {
  // "TO_DO", //기본값이 숫자 라서 category가 숫자로 된다 0, 1, 2
  //.원한다면 string으로 변경한다.
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories; //명시된 string 중 하나만 가져야한다.
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState); //atom 이 변하면 selector 도 변한다.
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
