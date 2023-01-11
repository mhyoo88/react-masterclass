import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE"; //명시된 string 중 하나만 가져야한다.
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
