import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  min-height: 200px;
`;

function App() {
  const [toDos, setTODos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    //draggableId: 타겟id, //destination: 드롭된곳 //source: 드롭된 index
    const { destination, draggableId, source } = info;

    if (destination?.droppableId === source.droppableId) {
      //same board movement.
      setTODos((allBoards) => {
        // 모든 boards 를 가져와서
        const boardCopy = [...allBoards[source.droppableId]]; // source의 droppabledId 로부터 array를 복사

        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, draggableId); // 복사본을 변형한후

        return {
          ...allBoards, // 남은 board들을 return 하고
          [source.droppableId]: boardCopy, //변형된 곳에서 새로운 배열을 적용
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board key={boardId} boardId={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
