import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[]; //나중에 유저에게 board를 만들 선택권을 줄수 있으니
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "b"],
    doing: ["c", "d"],
    done: ["e", "f"],
  },
});
