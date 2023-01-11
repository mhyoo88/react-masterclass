import { atom, selector } from "recoil";

type categories = "TO_DO" | "DOING" | "DONE";

export interface IToDo {
  text: string;
  id: number;
  category: categories; //명시된 string 중 하나만 가져야한다.
}

export const categoryState = atom<categories>({
  key: "category",
  default: "TO_DO",
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
