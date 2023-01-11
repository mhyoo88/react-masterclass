import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreacteToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";

const TodoListUl = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: red;
      margin-right: auto;
    }
  }
`;

function TodoList() {
  const toDos = useRecoilValue(toDoState); // value와  modifier 함수를 반환.
  // console.log(toDos);
  return (
    <div>
      <h1>Todos</h1>
      <br />
      <CreacteToDo />
      <TodoListUl>
        {/* {toDos.map((toDo) => <ToDo text={toDo.category} category={toDo.category} id={toDo.id}/>)} */}
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} /> //toDos 배열의 toDo 원소 하나하나가 ToDo 컴포넌트에 필요한 props 와 같은 모양이기 떄문에
        ))}
      </TodoListUl>
    </div>
  );
}

export default TodoList;
