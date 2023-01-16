import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.li`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
`;

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}
function DragabbleCard({ toDo, index }: IDragabbleCardProps) {
  // console.log(toDo, "has been rendered");
  return (
    <>
      <Draggable key={toDo} draggableId={toDo} index={index}>
        {(magic) => (
          <Card
            ref={magic.innerRef}
            {...magic.draggableProps}
            {...magic.dragHandleProps}
          >
            <span>🔥</span>
            {toDo}
          </Card>
        )}
      </Draggable>
    </>
  );
}

export default React.memo(DragabbleCard); // prop이 변하지 않았다면 DraggabelCard를 다시 렌더링 하지말라고 함.
