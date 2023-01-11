import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, toDoState } from "../atoms";
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
  const toDos = useRecoilValue(toDoSelector);
  const [category, setcategory] = useRecoilState(categoryState); //조회, 수정function
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setcategory(event.currentTarget.value as any); // 해당 value
  };
  console.log(category); //셀릭트 값에 따라서 상태가 변한다.
  return (
    <div>
      <h1>Todos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreacteToDo />
      {toDos.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
