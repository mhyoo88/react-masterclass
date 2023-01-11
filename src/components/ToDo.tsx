import { IToDo } from "../atoms";

function ToDO({ text, category }: IToDo) {
  const onClick = (newCategory: IToDo["category"]) => {
    // "TO_DO" | "DOING" | "DONE" 할 수 있지만 이렇게 하면 보호 받으며 반복 하지않아도 된다
    console.log(`i wanna go to ${newCategory}`);
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>To Do</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
  );
}

export default ToDO;
