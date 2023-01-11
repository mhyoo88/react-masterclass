import React from "react";
import { useSetRecoilState } from "recoil";
import { idText } from "typescript";
import { IToDo, toDoState } from "../atoms";

function ToDO({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      console.log(oldToDos);
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldTodo = oldToDos[targetIndex];
      const newTodo = { text, id, category: name as any };
      console.log(oldTodo, newTodo); //{text: '3', id: 1673413782729, category: 'TO_DO'} {text: '3', id: 1673413782729, category: 'DOING'}
      return [
        //이후에 타입스크립트 에러가 나는데 oldToDos의 형태와 우리가 바꾸려는 newTodo의 category 가 달라서 에러가 난다 그러니까 category:name as any 를 추가해서 타입스크립트에 체크하지말라고 한다. name="" 으로 보내기 보다는 onCLick 함수에 인자를 보내는것으로 하는게 낫다. as any 를 쓰지 안하도 된다.
        ...oldToDos.slice(0, targetIndex),
        newTodo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name={"DOING"} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name={"TO_DO"} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name={"DONE"} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDO;
