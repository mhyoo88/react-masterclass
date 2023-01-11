import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "../atoms";
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
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>Todos</h1>

      <hr />
      <CreacteToDo />
      <h2>To Do</h2>
      <TodoListUl>
        {/* {toDos.map((toDo) => <ToDo text={toDo.category} category={toDo.category} id={toDo.id}/>)} */}
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} /> //toDos 배열의 toDo 원소 하나하나가 ToDo 컴포넌트에 필요한 props 와 같은 모양이기 떄문에
        ))}
      </TodoListUl>

      <hr />
      <CreacteToDo />
      <h2>Doing</h2>
      <TodoListUl>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </TodoListUl>

      <hr />
      <CreacteToDo />
      <h2>Done</h2>
      <TodoListUl>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </TodoListUl>
    </div>
  );
}

export default TodoList;
