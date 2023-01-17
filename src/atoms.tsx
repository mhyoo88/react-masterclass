import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[]; //나중에 유저에게 board를 만들 선택권을 줄수 있으니
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": [
      { id: 0, text: "hey" },
      { id: 2, text: "hey22" },
    ],
    doing: [],
    done: [],
  },
});
