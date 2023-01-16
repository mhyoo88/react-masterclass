import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import DragabbleCard from "./components/DragabbleCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  min-height: 200px;
`;

const Board = styled.ul`
  background-color: ${(props) => props.theme.boardColor};
  padding: 30px 10px 20px 10px;
  border-radius: 5px;
`;

function App() {
  const [toDos, setTODos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setTODos((oldToDos) => {
      const toDosCopy = [...oldToDos];
      //1. Delete item on souce.index
      // console.log("Delete item on", source.index);
      // console.log(toDosCopy);
      toDosCopy.splice(source.index, 1);
      // console.log("Delete item");
      // console.log(toDosCopy);
      //2. put back the item on the destination.index
      // console.log("Put back", draggableId, "on", destination.index);
      toDosCopy.splice(destination?.index, 0, draggableId); //destination은 null or undefinde 일수 도 있다 드래그 햇는데 본자리에 놔둘수 잇으니.. 그래서 if로 예외 설정해준다.
      // console.log(toDoState);
      return toDosCopy;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <DragabbleCard key={toDo} index={index} toDo={toDo} />
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
