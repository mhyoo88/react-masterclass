function def() {
  return null;
}

export default def;

// import React from "react";
// import { Draggable } from "react-beautiful-dnd";
// import styled from "styled-components";

// const Card = styled.li<{ isDragging: boolean }>`
//   background-color: ${(props) =>
//     props.isDragging ? "tomato" : props.theme.cardColor};
//   border-radius: 5px;
//   padding: 10px 10px;
//   margin-bottom: 5px;
//   box-shadow: ${(props) =>
//     props.isDragging ? "0px 2px 10dpx rgba(0, 0, 0, 0.5)" : "none"};
// `;

// interface IDragabbleCardProps {
//   toDoId: number;
//   toDoText: string;
//   index: number;
// }
// function DragabbleCard({ toDoId, toDoText, index }: IDragabbleCardProps) {
//   // console.log(toDo, "has been rendered");
//   return (
//     <>
//       <Draggable key={toDoId} draggableId={toDoId + ""} index={index}>
//         {(magic, snapshot) => (
//           <Card
//             isDragging={snapshot.isDragging}
//             ref={magic.innerRef}
//             {...magic.draggableProps}
//             {...magic.dragHandleProps}
//           >
//             <span>🔥</span>
//             {toDoText}
//           </Card>
//         )}
//       </Draggable>
//     </>
//   );
// }

// export default React.memo(DragabbleCard); // prop이 변하지 않았다면 DraggabelCard를 다시 렌더링 하지말라고 함.
